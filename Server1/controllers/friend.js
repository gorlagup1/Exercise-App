exports.getAllFriends = function (req, res) {
  var sql = `SELECT * from users WHERE email LIKE '%${req.query.searchText}%' OR name LIKE '%${req.query.searchText}%'`;
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);   
      res.json(err)
    } else {
      res.json({
        friends: result    
      });
    }
  });
}
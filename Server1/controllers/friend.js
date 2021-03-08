exports.getAllFriends = function (req, res) {
    var sql = `Select * from users where id!=${req.query.id}`;
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
  
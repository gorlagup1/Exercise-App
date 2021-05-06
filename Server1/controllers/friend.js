exports.createFriend = function (req, res) {
  const query = sql = 'INSERT INTO friend SET ?';
  connection.query(query, req.body, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getAllFriends = function (req, res) {
  var sql = `SELECT * from users WHERE email LIKE '%${req.query.id}%' OR name LIKE '%${req.query.searchText}%'`;
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


exports.updateFriend = function (req, res) {
  const query = 'UPDATE friend SET ? WHERE id = ?'
  connection.query(query, [req.body, req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.removeFriend = function (req, res) {
  const query = `DELETE FROM friend WHERE  user_id=${req.query.user_id} AND friend_id=${req.query.friend_id}`
  connection.query(query, [req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getFriend = function (req, res) {
  const sql = 'SELECT * FROM friend WHERE id=?';
  connection.query(sql, [req.query.id], function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        friend: result
      });
    }
  });
}
var current_search = {
  search_string: ''
};

  


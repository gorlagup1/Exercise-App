const _ = require('lodash')
exports.createStatus = function (req, res) {
  const query = sql = 'INSERT INTO status SET ?';
  connection.query(query, req.body, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getAllStatus = function (req, res) {
  const sql = `select s.*,
  su.name as status_user,
  GROUP_CONCAT(CONCAT_WS(' *@,* ',
  c.comment_title, c.user_id, c.created_at, cu.name)
  SEPARATOR ' *@;* ') as cmts
  from status s
  left JOIN comments c on  c.status_id=s.id
  left JOIN users cu on  cu.id=c.user_id
  join users su on  s.user_id=su.id
  group  by s.id;`;
  connection.query(sql, function (err, result) {
    _.each(result, (item )=> {
      if (!_.isEmpty(item.cmts)) {
        item.comments = []
        item.cmts = item.cmts.split(' *@;* ');
        _.each(item.cmts, (data) => {
          data = data.split(' *@,* ')
          if (!_.isEmpty(data[1])) {
            item.comments.push({
              comment_title: data[0],
              user_id: data[1],
              created_at: data[2],
              user_name: data[3]
            })
          }
        })
      }
      delete item.cmts;
    })
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        status: result
      });
    }
  });
}
exports.updateStatus = function (req, res) {
  const id = req.body.id;
  delete req.body.id;
  const query = 'UPDATE status SET ? WHERE id = ?'
  connection.query(query, [req.body, id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}

exports.deleteStatus = function (req, res) {
  const query = `DELETE  from status where id=${req.query.status_id} and user_id=${req.query.user_id};`
  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
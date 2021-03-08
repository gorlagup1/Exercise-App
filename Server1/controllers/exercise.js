exports.createExercise = function (req, res) {
    const query = sql = 'INSERT INTO exercises SET ?';
    connection.query(query, req.body, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  }
  exports.getAllExercises = function (req, res) {
    var sql = 'SELECT * FROM `exercises` WHERE user_id = ? AND exercise_type = ?';
    connection.query(sql, [req.query.user_id, req.query.exercise_type], function (err, result) {
      if (err) {
        console.log(err);
        res.json(err)
      } else {
        res.json({
          exercises: result
        });
      }
    });
  }
  
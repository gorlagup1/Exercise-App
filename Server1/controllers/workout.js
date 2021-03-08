exports.createWorkout=function(req,res){

    if (req.body.start_date) {
      req.body.start_date = new Date(req.body.start_date)
    }
  
    if (req.body.last_date) {
      req.body.last_date = new Date(req.body.last_date)
    }
  
    const query = sql = 'INSERT INTO workouts SET ?';
    connection.query(query, req.body, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  
  }
  exports.getAllWorkouts=function(req,res){
    var sql = `SELECT * FROM workouts where user_id=${req.query.user_id} and workout_type='${req.query.workout_type}'`;
    connection.query(sql, function (err, result) {
      if (err) {
        console.log(err);
        res.json(err)
      } else {
        res.json({
          workouts: result
        });
      }
    });
  }
  
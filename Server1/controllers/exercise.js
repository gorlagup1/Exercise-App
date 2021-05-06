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
  }/* commented for autoboxing */
 /* function get(){
    return exercise;
  }
  function add(exercise){
    exercise.push({exercise});
    return true;

  }

  function getUserData(user_id){
    const dta = exercise.find(x => x.user_id == user_id);
    if(!data) throw Error('Data not available');

    let index = exercise.length - 1;
    exercise = data.list.slice(index, 1);
  }
  function getUserData(user_id)
  const data = exercise.find(x=>x.user_id== user_id);
  if(!data) throw Error('Data not available');

        return exerciseLog.push({ Name: user.Name, Log: data })
    }

    function getValues(enter){
        const result = exercise.find(x => x.enter == enter);
        return result;
    }

module.exports = {
    exercise, exerciseLog, get, add,  getUserData, getValues
}*/
  
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
  
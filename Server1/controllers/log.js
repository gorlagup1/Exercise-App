exports.createlog=function(req,res){
    const query = sql = 'INSERT INTO logs SET ?';
    connection.query(query, req.body, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  }
  exports.getAllLogs=function(req,res){
    var sql = 'SELECT * FROM `logs`';
    connection.query(sql, function (err, result) {
      if (err) {
        console.log(err);
        res.json(err)
      } else {
        res.json({
          logs: result
        });
      }
    });
  }
  exports.updateLog=function(req,res){
    const query = 'UPDATE logs SET ? WHERE id = ?'
    connection.query(query, [req.body, req.query.id], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  }
  exports.removeLog=function(req,res){
    const query = 'DELETE FROM logs WHERE id = ?'
    connection.query(query, [req.query.id], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  
  }
  exports.getLog=function(req,res){
    const sql = 'SELECT * FROM logs WHERE id=?';
    connection.query(sql, [req.query.id], function (err, result) {
      if (err) {
        console.log(err);
        res.json(err)
      } else {
        res.json({
          log: result
        });
      }
    });
  }
  
  exports.createLogEntry=function(req,res){
    const query = sql = 'INSERT INTO log_entries SET ?';
    connection.query(query, req.body, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  
  }
  exports.getAllLogEntries=function(req,res){
    var sql = 'SELECT * FROM `log_entries`';
    connection.query(sql, function (err, result) {
      if (err) {
        console.log(err);
        res.json(err)
      } else {
        res.json({
          logEntries: result
        });
      }
    });
  }
  exports.updateLogEntry=function(req,res){
  
    const query = 'UPDATE log_entries SET ? WHERE id = ?'
    connection.query(query, [req.body, req.query.id], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  
  }
  exports.removeLogEntry=function(req,res){
    const query = 'DELETE FROM log_entries WHERE id = ?'
    connection.query(query, [req.query.id], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  
  }
  exports.getLogEntry=function(req,res){
    const sql = 'SELECT * FROM log_entries WHERE id=?';
    connection.query(sql, [req.query.id], function (err, result) {
      if (err) {
        console.log(err);
        res.json(err)
      } else {
        res.json({
          logEntry: result
        });
      }
    });
  }
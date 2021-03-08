exports.createComments = function (req, res) {
    const query = sql = 'INSERT INTO comments SET ?';
    connection.query(query, req.body, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  }
const mysql = require('mysql');

let pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  connectionLimit: process.env.DB_POOL || 10,
  database: process.env.DB_NAME || "fitness_tracker_2",
  port:3306,
});

/*let pool = mysql.createPool({
  host: process.env.DB_HOST || "us-cdbr-east-03.cleardb.com",
  user: process.env.DB_USER || "bc5bda6e58e81c",
  password: process.env.DB_PASSWORD || "50a27871",
  connectionLimit: process.env.DB_POOL || 10,
  database: process.env.DB_NAME || "heroku_5916cd8e8f1a8f0",
  port:3306,
});*/

pool.getConnection(function (err, connection) {
  if (err) console.log('Error while connecting to databse', err);
  else {
    console.log('Database connected');
    global.connection = connection;
  }
});
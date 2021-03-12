/**
 * Module dependencies.
 */

 var express = require('express'),
 http = require('http'),
 path = require('path');
 var cors = require('cors');
 var bodyParser = require("body-parser");
 var app = express();
 require('dotenv').config();
 app.use(cors());
 
 
 global.config = require('./config/config.json')
 
 const fileUpload = require('express-fileupload');
 var user = require('./routes/user');
 var index = require('./routes/index');
 
 /**
  * creating mysql connection.
  */
 require('./config/db');
 
 /**
  * all environments.
  */
 app.set('port', process.env.PORT || 3006);
 app.set('views', __dirname + '/views');
 app.use(express.static(path.join(__dirname, '../vue-dist')));
 app.use(express.static(path.join(__dirname, 'public')));
 app.use(bodyParser.urlencoded({
   extended: false
 }));
 
 app.use(bodyParser.json());
 global.__basedir = __dirname;
 app.use(fileUpload());
 /**
  * routes.
  */
 
 app.use('/',user);
 app.use('/',index);
 
 /**
  * creating server.
  */
 
 http.createServer(app).listen(app.get('port'), function () {
   console.log('application server is listening on port ' + app.get('port'));
 });
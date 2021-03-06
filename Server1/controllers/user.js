/**
 * Module dependencies.   
 */

 const jwt = require('jsonwebtoken'); 
 const bcrypt = require('bcrypt');
 /*const SECRET_KEY = "secretkey23456";  */
 /*const atob = require('atob');*/
 const saltRounds = process.env.saltRounds;  
 const JWT_SECRET = process.env.JWT_SECRET;
 /*const Cryptr = require('cryptr'),
 cryptr = new Cryptr(config.CRYPTOKEY);*/
 
 
 
 //-------------------------------------Register service----------------------------------- //
 exports.register = (req, res, next) => {
    const {email, password} = req.body;
  
  bcrypt.hash(password, +saltRounds)
  .then(hash=>{    
    let sql = `INSERT INTO users(name,mobile,email,password) VALUES ('${req.body.name}','${req.body.mobile}','${req.body.email}', '${hash}')`;

    connection.query(sql, function (err, result) {
        if (err) {
          console.log('Error', err)   
          res.status(500).send(err);    
        } else {
          res.status(200).send(result);
        }
      });
  }).catch(err=> next(err))
   

   
     
     //await connection('user').insert({email:email, hash:hash});

  
    
  

 
   /*let decPass = atob(req.body.password);  
   let encrypted_Pass = cryptr.encrypt(dec_Pass);
   let sql = "INSERT INTO `users`(`name`,`mobile`,`email`,`password`) VALUES ('" + req.body.name + "','" + req.body.mobile + "','" + req.body.email + "','" + encryptedPass + "')";
 
   connection.query(sql, function (err, result) {
     if (err) {
       console.log('Error', err)
       res.status(500).send(err);
     } else {
       res.status(200).send(result);
     }
   });
 };*/

 }
 //---------------------------------------login services----------------------------------------------------------
 exports.login = (req, res) => {
  try{
    const {email, password} = req.body;
    var sql = "SELECT id, name, mobile, dob, gender, email, password, profile_picture FROM `users` WHERE `email`='" + req.body.email + "'";
 
    connection.query(sql, async function (err, results) {
      jwtLogin(res, err, results);
      if(results.length){
        const user = results[0]
        const validPass = await bcrypt.compare(password, user.password);
        if(validPass){
          res.status(200).json("valid email and pass!");
        }else{
          res.json("wrong pass!");
        }
      }else{
        res.status(404).json('user not found');
      }
    });
   } catch(e){
      console.log(e);
      res.status.send('something broke!');
      
    }
};
     
   /*var dec_pass = atob(req.body.password);
   var encrypted_pass = cryptr.encrypt(dec_pass);
   var sql = "SELECT id, name, mobile, dob, gender, email, profile_picture FROM `users` WHERE `email`='" + req.body.email + "' AND password = '" + encrypted_pass + "'";
 
   connection.query(sql, function (err, results) {
     jwtLogin(res, err, results);
   });
 };*/
 exports.socialLogin = function (req, res) {
   console.log(req.body)
   var email = req.body.email;
   var sql = "SELECT id, name, mobile, dob, gender, email, profile_picture FROM `users` WHERE `email`='" + email + "'";
 
   connection.query(sql, function (err, results) {
 
     if (results != "") {
       jwtLogin(res, err, results);
 
     } else if (results == "") {
       var name = req.body.name;
 
       var sql = "INSERT INTO `users`(`name`,`email`) VALUES ('" + name + "','" + email + "')";
 
       connection.query(sql, function (err, result) {
         if (err) {
           console.log('Error', err)
           res.end(JSON.stringify({result: {message: err}}));
         } else {
 
           // make login
           var sql = "SELECT id, name, mobile, dob, gender, email, profile_picture FROM `users` WHERE `email`='" + email + "'";
 
           connection.query(sql, function (err, results) {
             jwtLogin(res, err, results);
           });
         }
       });
     }
   });
 };
 exports.update = (req, res) => {
   const id = req.body.id;
   delete req.body.id;
 
   if (req.body.password) {
     delete req.body.password;
   }
 
   if (req.body.dob) {
     req.body.dob = new Date(req.body.dob)
   }
 
   const query = 'UPDATE users SET ? WHERE id = ?'
   connection.query(query, [req.body, id], (err, result) => {
     if (err) {
       console.log(err);
       res.status(500).send(err);
     } else {
       res.status(200).send(result);
     }
   });
 };
 
 exports.uploadProfilePic = function (req, res) {
   const file = req.files.profile_picture;
   const destPath = __basedir + '/public/upload/'
   const fileName = new Date().getTime() + file.name
 
   file.mv(destPath + fileName, function (err, data) {
     if (err) {
       console.log(err);
       res.json(err)
     } else {
       let fileUpdateData = {
         profile_picture: '/upload/' + fileName
       }
       const query = 'UPDATE users SET ? WHERE id = ?'
       connection.query(query, [fileUpdateData, req.query.id], (err, result) => {
         if (err) {
           console.log(err);
           res.status(500).send(err);
         } else {
           res.status(200).send(fileUpdateData);
         }
       });
     }
   });
 };
 
 exports.userMe = function (req, res) {
   var sql = `Select * from users where id=${req.query.id}`;
   connection.query(sql, function (err, result) {
     if (err) {
       console.log(err);
       res.json(err)
     } else {
       res.json({
         results: {
           status: true,
           user: result[0]
         }
       });
     }
   });
 }
 
 // util func
 function jwtLogin(res, err, results) {
   if (err) {
     console.log(err);
     res.status(500).send(err);
   }
   if (results != '') {
     var user = results[0];
     var secret = config.JWT_SECRET;
     var now = Math.floor(Date.now() / 1000),
       iat = (now - 10),
       expiresIn = '7d',
       jwtId = Math.random().toString(36).substring(7);
     var payload = {
       iat: iat,
       jwtid: jwtId,
       user: user
     };
 
     jwt.sign(payload, secret, {
       algorithm: 'HS256',
       expiresIn: expiresIn
     }, function (err, token) {
       if (err) {
         res.json({
           results: {
             status: false,
             message: 'Error occurred while generating token'
           }
         });
       } else {
         if (token != false) {
           res.header();
           res.json({
             results: {
               status: true,
               token: token,
               user: results[0]
             }
           });
           res.end();
         } else {
           res.json({
             results: {
               status: false,
               msg: 'Could not create token'
             },
           });
           res.end();
         }
 
       }
     });
   } else if (results == '') {
     res.json({
       results: {
         status: false,
         msg: 'Not found User!'
       }
     });
     res.end();
   }
  }
/**
	* Module dependencies.
	*/
    const router = require('express').Router();
    const usersCtrl=require('./../controllers/user');
    const utility = require('../utility')
    
    router.post('/register', usersCtrl.register);
    router.post('/login', usersCtrl.login);
    router.post('/signin/social', usersCtrl.socialLogin);
    router.put('/users', utility.authenticateToken, usersCtrl.update);
    router.put('/user/picture', utility.authenticateToken, usersCtrl.uploadProfilePic);
    router.get('/user/me', utility.authenticateToken, usersCtrl.userMe);
    
    module.exports = router;
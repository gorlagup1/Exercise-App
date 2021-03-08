/**
	 * Module dependencies.
	 */
 const router = require('express').Router();
 const exerciseCtrl = require('./../controllers/exercise');
 const workoutCtrl = require('./../controllers/workout');
 const statusCtrl = require('./../controllers/status');
 const commentsCtrl = require('./../controllers/comments');
const friendCtrl = require('./../controllers/friend');
const utility = require('../utility');

router.get('/health', function(req, res) {
 res.send('running server');
});

 router.post('/status', utility.authenticateToken, statusCtrl.createStatus);
 router.get('/status', utility.authenticateToken, statusCtrl.getAllStatus);
 router.put('/status', utility.authenticateToken, statusCtrl.updateStatus);
 router.delete('/status', utility.authenticateToken, statusCtrl.deleteStatus);

 router.post('/comments', utility.authenticateToken, commentsCtrl.createComments);

router.get('/friends', utility.authenticateToken, friendCtrl.getAllFriends);

router.post('/exercise', utility.authenticateToken, exerciseCtrl.createExercise);
router.get('/exercises', utility.authenticateToken, exerciseCtrl.getAllExercises);

router.post('/workout', utility.authenticateToken, workoutCtrl.createWorkout);
router.get('/workouts', utility.authenticateToken, workoutCtrl.getAllWorkouts);

 module.exports = router;
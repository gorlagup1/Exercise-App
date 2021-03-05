import Vue from 'vue';
import Router from 'vue-router';
import Signin from '../components/Signin';
import Landing from '../components/Landing';
import Signup from '../components/Signup';
import dashboardComponent from './../components/common/Dashboard';
import pageNotFoundComponent from './../components/common/PageNotFound';
import Home from './../components/home/Home';
import ExerciseeDailyDiet from './../components/exercise/DailyDiet';
import ExerciseFatToFit from './../components/exercise/FatToFit';
import ExerciseMuscleBuilding from './../components/exercise/MuscleBuilding';
import Walking from './../components/workouts/Walking';
import Running from './../components/workouts/Running';
import Cycling from './../components/workouts/Cycling';
import Rover from './../components/workouts/Rover';
import StairStepper from './../components/workouts/StairStepper';
import Hiking from './../components/workouts/Hiking';
import Yoga from './../components/workouts/Yoga';
import Swimming from './../components/workouts/Swimming';
import WheelChair from './../components/workouts/WheelChair';
import FriendList from './../components/friends/FriendList';
import Profile from './../components/profile/Profile';
import AllUsers from './../components/users/AllUsers';
import auth from '../auth';


Vue.use(Router);

export default new Router({
  // mode: 'history',
  hashbang: false,
  routes: [{
    path: '/',
    name: 'Root',
    component: Landing,
  },
  {
    path: '/signin',
    name: 'Signin',
    beforeEnter: function(to, from, next) {
        if (auth.checkAuth() && auth.getUser()) {
          next({ name: 'HomeView' });
        } else {
          next();
        }

    },
    component: Signin,

  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,

  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    redirect: {
      name: 'HomeView',
    },
    component: dashboardComponent,
    children: [{
      path: '/dashboard/home',
      name: 'HomeView',
      component: Home,
    },
    {
      path: '/dashboard/friends',
      name: 'FriendListView',
      component: FriendList,
    },
    {
      path: '/dashboard/exercise-daily-diet',
      name: 'ExerciseeDailyDietView',
      component: ExerciseeDailyDiet,
    },
    {
      path: '/dashboard/exercise-fat-to-fit',
      name: 'ExerciseFatToFitView',
      component: ExerciseFatToFit,
    },
    {
      path: '/dashboard/exercise-muscle-building',
      name: 'ExerciseMuscleBuildingView',
      component: ExerciseMuscleBuilding,
    },
    {
      path: '/dashboard/workouts-walking',
      name: 'WalkingView',
      component: Walking,
    },
    {
      path: '/dashboard/workouts-running',
      name: 'RunningView',
      component: Running,
    },
    {
      path: '/dashboard/workouts-cycling',
      name: 'CyclingView',
      component: Cycling,
    },
    {
      path: '/dashboard/workouts-rover',
      name: 'RoverView',
      component: Rover,
    },
    {
      path: '/dashboard/workouts-stairstepper',
      name: 'StairStepperView',
      component: StairStepper,
    },
    {
      path: '/dashboard/workouts-hiking',
      name: 'HikingView',
      component: Hiking,
    },
    {
      path: '/dashboard/workouts-yoga',
      name: 'YogaView',
      component: Yoga,
    },
    {
      path: '/dashboard/workouts-swimming',
      name: 'SwimmingView',
      component: Swimming,
    },
    {
      path: '/dashboard/workouts-wheelchair',
      name: 'WheelChairView',
      component: WheelChair,
    },
    {
      path: '/dashboard/profile',
      name: 'ProfileView',
      component: Profile,
    },
    {
      path: '/dashboard/users',
      name: 'AllUsersView',
      component: AllUsers,
    },
    ], 
  },
  {
    path: '*',
    component: pageNotFoundComponent,
  },
  ],
});

<template>
  <Workout :bgImg="bgImg" :keyType="keyType" :iconImg="iconImg" :workoutTitle="workoutTitle" />
</template>

<script>
  import Workout from './WorkoutCommon';
  export default {
    components: {
      Workout
    },
    name: 'workouts-yoga',
    data() {
      return {
        bgImg: {
          backgroundImage: `url(${require('@/assets/yoga.jpg')})`
        },
        iconImg: require('@/assets/workout/yoga.png'),
        keyType: "yoga", 
        workoutTitle: 'Yoga',
      }
    }
  };
</script>

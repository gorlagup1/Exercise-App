<template>
  <Workout :bgImg="bgImg" :keyType="keyType" :iconImg="iconImg" :workoutTitle="workoutTitle" />
</template>

<script>
  import Workout from './WorkoutCommon';
  export default {
    components: {
      Workout
    },
    name: 'workouts-running',
    data() {
      return {
        bgImg: {
          backgroundImage: `url(${require('@/assets/running.jpg')})`
        },
        iconImg: require('@/assets/workout/running.jpeg'),
        keyType: "running", 
        workoutTitle: 'Running',
      }
    }
  };
</script>

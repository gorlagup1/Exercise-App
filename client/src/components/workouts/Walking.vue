<template>
  <Workout :bgImg="bgImg" :keyType="keyType" :iconImg="iconImg" :workoutTitle="workoutTitle" />
</template>

<script>
  import Workout from './WorkoutCommon';
  export default {
    components: {
      Workout
    },
    name: 'workouts-walking',
    data() {
      return {
        bgImg: {
          backgroundImage: `url(${require('@/assets/walking.jpg')})`
        },
        iconImg: require('@/assets/workout/walking-logo.jpg'),
        keyType: "walking",
        workoutTitle: 'Walking', 
      }
    }
  };

</script>

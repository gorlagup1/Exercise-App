<template>
  <Workout :bgImg="bgImg" :keyType="keyType" :iconImg="iconImg" :workoutTitle="workoutTitle" />
</template>

<script>
  import Workout from './WorkoutCommon';
  export default {
    components: {
      Workout
    },
    name: 'workouts-swimming',
    data() {
      return {
        bgImg: {
          backgroundImage: `url(${require('@/assets/swimming.jpg')})`
        },
        iconImg: require('@/assets/workout/swimming.png'), 
        keyType: "swimming",
        workoutTitle: 'Swimming',
      }
    }
  };

</script>

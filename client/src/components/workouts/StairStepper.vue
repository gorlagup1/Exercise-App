<template>
  <Workout :bgImg="bgImg" :keyType="keyType" :iconImg="iconImg" :workoutTitle="workoutTitle" />
</template>

<script>
  import Workout from './WorkoutCommon';
  export default {
    components: {
      Workout
    },
    name: 'workouts-stairstepper',
    data() {
      return {
        bgImg: {
          backgroundImage: `url(${require('@/assets/stairstepper.jpg')})`
        },
        iconImg: require('@/assets/workout/stairstepper.png'), 
        keyType: "stairstepper",
        workoutTitle: 'Stair Stepper',
      }
    }
  };

</script>
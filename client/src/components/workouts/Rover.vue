<template>
  <Workout :bgImg="bgImg" :keyType="keyType" :iconImg="iconImg" :workoutTitle="workoutTitle" />
</template>

<script>
  import Workout from './WorkoutCommon';

  export default {
    name: 'workouts-rower',
    components: {
      Workout
    },
    data() {
      return {
        bgImg: {
          backgroundImage: `url(${require('@/assets/rower.jpg')})`
        },
        iconImg: require('@/assets/workout/rower.jpg'),
        keyType: "rower",
        workoutTitle: 'Rower', 
      };
    }
  };

</script>

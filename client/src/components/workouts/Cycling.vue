<template>
  <Workout :bgImg="bgImg" :keyType="keyType" :iconImg="iconImg" :workoutTitle="workoutTitle" />
</template>

<script>
  import Workout from './WorkoutCommon';

  export default {
    name: 'workouts-cycling',
    components: {
      Workout
    },
    data() {
      return {
        bgImg: {
          backgroundImage: `url(${require('@/assets/cycling-health.jpg')})`
        },
        iconImg: require('@/assets/workout/cycling.jpg'),
        keyType: "cycling",
        workoutTitle: 'Cycling',
      };
    }
  };

</script>

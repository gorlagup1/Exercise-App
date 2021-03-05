<template>
  <Workout :bgImg="bgImg" :keyType="keyType" :iconImg="iconImg" :workoutTitle="workoutTitle" />
</template>

<script>
  import Workout from './WorkoutCommon';

  export default {
    name: 'workouts-hiking',
    components: {
      Workout
    },
    data() {
      return {
        bgImg: {
          backgroundImage: `url(${require('@/assets/landing/inspirational-thoughts.jpg')})`
        },
        iconImg: require('@/assets/workout/hiking.jpg'),
        keyType: "hiking",
        workoutTitle: 'Hiking',
      }
    }
  }
</script>
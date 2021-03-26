<template>
    <div class="container display-block" :style="bgImg">
      <div class="row ">
        <div class="content">
          <div class="inline-block pr-50">
              <img class="workout-img" src="../../assets/logo.jpg" >
          </div>
            <div class="inline-block pr-50 pl-50">
                <div class="center-text p-20">
          <h2 class="pb-15"><strong>Exercise-Muscle Building</strong></h2>
            <button type="button" class="btn btn-primary" data-toggle="modal" v-on:click="modalShow=true" >
                Add Exercise
              </button>

        </div>
            </div>

        </div>
    </div>
    <div class="row mt-20 position-relative pl-15">
        <div>
          <h3>My Exercise History:</h3>
            <table class="table">
            <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Exercise Type</th>
                  <th scope="col">Food Name</th>
                  <th scope="col">Reference URL</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in historyData" :key="index">
                  <th scope="row">{{index+1}}</th>
                  <td>{{item.exercise_type}}</td>
                  <td>{{item.food_name}}</td>
                  <td>{{item.ref_url}}</td>
                </tr>
              </tbody>
            </table>
        </div>

    </div>
    <!-- Modal -->
    <modal-add-exercise v-if="modalShow" @close="modalShow = false" @AddExercise="AddExercise()" :exerciseTitle="exerciseTitle" :exercise="exercise" />
    
  </div>
</template>

<script>

  import Vue from 'vue';
  import auth from '../../auth';
  import modalAddExercise from './modalAddExercise'

  export default {
    name: 'excersice-muscle-building',
    components: {
      modalAddExercise
    },
    data() {
      return {
        modalShow: false,
        exerciseTitle: 'Exercise-Muscle-Building',
        bgImg: {
          backgroundImage: `url(${require('@/assets/exercise/muscle-building.jpg')})`
        },
        historyData:[],
        exercise: {
          exercise_type: 'Muscle-Building',
          food_name: '',
          ref_url: '',
          user_id: ''
        },
      };
    },
    created() {
      this.getHisory()
    },
    computed: {
      userData() {
        return auth.getUser();
      },
    },
    methods: {
      clearExercise() {
        this.exercise.food_name = ''
        this.exercise.ref_url = ''
      },
      getHisory(){
        const self = this;
        Vue.http.get('exercises', {params: {
          user_id: this.userData.id,
          exercise_type: self.exercise.exercise_type
        }})
        .then((data) => {
          self.historyData = data.body.exercises;
        })
      },
      AddExercise() {
        this.exercise.user_id = this.userData.id;
        const self = this;

        Vue.http.post('exercise', self.exercise)
        .then(() => {
          self.getHisory()
          self.modalShow = false;
          self.$toastr.success("exercise added.");
          self.clearExercise();
        })
        .catch((err) => { 
          self.modalShow = false;
          self.$toastr.error(err, "Error while updating workouts!");
        });
      }
    }
  };
</script>
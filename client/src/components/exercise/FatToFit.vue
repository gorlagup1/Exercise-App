<template>
    <div class="container display-block" :style="bgImg">
      <div class="row ">
        <div class="content">
          <div class="inline-block pr-50">
              <img class="workout-img" src="../../assets/logo.jpg" >
          </div>
            <div class="inline-block pr-50 pl-50">
                <div class="center-text p-20">
          <h2 class="pb-15"><strong>Exercise-Fat To Fit</strong></h2>

          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" >
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
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Exercise-Daily-Diet </h4>
          </div>
          <div class="modal-body">
              <form  class="login_form">

                <div class="form-group">
                    <input type="text" class="form-control" v-model="exercise.food_name"
                        placeholder="Food Name" autofocus required>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control " v-model="exercise.ref_url" placeholder="Enter video or any reference URL"
                        required >
                </div>

            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" v-on:click="AddExercise()">Add Exercise</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

    import Vue from 'vue';
    import auth from '../../auth';
    export default {
      name: 'excersice-fat-to-fit',
      data() {
        return {
          bgImg: {
            backgroundImage: `url(${require('@/assets/exercise/fat-to-fat.jpg')})`
          },
          historyData:[],
          exercise: {
            exercise_type: 'Fat-To-Fit',
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
            window.$('.modal').modal('hide');
            self.$toastr.success("exercise added.");
            self.clearExercise();
          })
          .catch((err) => {
            window.$('.modal').modal('hide');
            self.$toastr.error(err, "Error while updating workouts!");
          });
        }
      }
    };

  </script>

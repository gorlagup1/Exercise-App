<template>
  <div class="container black-color" :style="bgImg">
    <div class="row ">
      <div class="content">
        <div class="inline-block pr-50">
          <img class="workout-img" :src="iconImg" >
        </div>
        <div class="inline-block pr-50 pl-50">
          <p>Here is something about workouts {{keyType}}.......</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="content2">
        <div class="inline-block pr-50 pl-50">
          <button type="button" class="btn btn-primary" data-toggle="modal" v-on:click="showModalAddWorkout=true" >
            Add Workout
          </button>
        </div>
        <div class="inline-block pr-50 pl-50">
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModalHisory" v-on:click="getHisory(workout.workout_type)">
            View History
          </button>
        </div>
      </div>
    </div>
    <div class="row black-color">
      <div class="sarch-cls">
        <div class="form-group width-200">
          <label for="">Search My Workout By:</label>
          <select @change="onChange($event)" class="form-control" v-model="key">
            <option value="walking">Walking</option>
            <option value="running">Running</option>
            <option value="cycling">Cycling</option>
            <option value="rower">Rower</option>
            <option value="stairstepper">Stair Stepper</option>
            <option value="hiking">Hiking</option>
            <option value="yoga">Yoga</option>
            <option value="swimming">Swimming</option>
            <option value="wheelchair">WheelChair</option>
          </select>
        </div>
      </div>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Start Date</th>
              <th scope="col">Last Date</th>
              <th scope="col">Duration(MM:SS)</th>
              <th scope="col">Weight</th>
              <th scope="col">Repeats</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in historyData2" :key="index">
              <th scope="row">{{index+1}}</th>
              <td>{{item.start_date}}</td>
              <td>{{item.last_date}}</td>
              <td>{{item.duration}}</td>
              <td>{{item.weight}}</td>
              <td>{{item.repeats}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

 <!-- Modal Add Workout-->
    <modal-add-workout v-if="showModalAddWorkout" @close="showModalAddWorkout = false" @AddWorout="AddWorout()" :workoutTitle="workoutTitle" :workout="workout" />
    
    <!-- Modal show history-->
    <modal-show-history v-if="showModalHistory" @close="showModalHistory = false" :workoutTitle="workoutTitle" :historyData="historyData" />
 
  </div>
</template>

<script>
  import Vue from 'vue';
  import auth from '../../auth'
  import modalAddWorkout from '../../components/workouts/modalAddWorkout'
  import modalShowHistory from '../../components/workouts/modalShowHistory'
  export default {
    name: 'workouts-common',
    props: ['bgImg','keyType', 'iconImg', 'workoutTitle'],
    data() {
      return {
        key: this.$props.keyType,
        historyData:[],
        historyData2:[],
        showModalAddWorkout:false,
        showModalHistory: false,
        workout: {
          workout_type: this.$props.keyType,
          start_date: '',
          last_date: '',
          duration: '',
          weight: '',
          repeats: '',
          user_id: ''
        },
      };
    },
    components: {
      modalAddWorkout,
      modalShowHistory    
    },
    created() {
      this.getHisory(this.$props.keyType, 'onChange');
    },
    computed: {
      userData() {
        return auth.getUser();
      },
    },
    
    methods: {
      clearWorkout() {
        this.workout.start_date = ''
        this.workout.last_date = ''
        this.workout.duration = ''
        this.workout.weight = ''
        this.workout.repeats = ''
        document.getElementById('date1').value = ''
        document.getElementById('date2').value = ''
      },
      onChange(event) {
        console.log(event.target.value)
        this.getHisory(this.key, 'onChange')
      },
      getHisory(type, from='history') {
        console.log('workout_type', type, from)
        
        var self = this;
        Vue.http.get('workouts', {params: {
          user_id: this.userData.id,
          workout_type: type
        }})
        .then((data) => {
          if (from==='onChange') {
            self.historyData2 = data.body.workouts;
          } else {
            this.showModalHistory=true;
            self.historyData = data.body.workouts;
          }
        }).catch((err) => {
          self.showModalAddWorkout = false;
          self.$toastr.error(err.body.message, err.statusText);
        });
      },
      isoDate(id) {
        const val = window.document.getElementById(id).value;
        if (val) {
          const day = new Date(val);  // eslint-disable-line
          return day.toISOString();
        } else { //eslint-disable-line
          return null;
        }
      },
      

      AddWorout() {
        this.workout.start_date = this.isoDate('date1')
        this.workout.last_date = this.isoDate('date2')
        this.workout.user_id = this.userData.id;

        const self = this;
        console.log(this.workout)
        Vue.http.post('workout', this.workout)
        .then(() => {
          self.showModalAddWorkout = false;
          self.$toastr.success("Workout added.");
          self.clearWorkout()
        })
        .catch((err) => {
          self.showModalAddWorkout = false;
          self.$toastr.error(err, "Error while updating workouts!");
        });
      }
    }
  };
</script> 

<style>
  .width-200 {
    width : 200px;
  }
  .modal-active{
	display:block;
}
.modal-body {
    max-height: calc(100vh - 210px);
    overflow-y: auto;
}
</style>
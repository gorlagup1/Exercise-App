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
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" >
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

    <!-- Modal -->
    <div class="modal fade black-color" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Workout-{{workoutTitle}} </h4>
          </div>
          <div class="modal-body">
              <form  class="login_form">
                <div class="form-group">
                  <div class='input-group date' id='lastdate'>
                    <input type='text' id="date1" class="form-control" placeholder="Start Date" />
                    <span class="input-group-addon">
                      <span class="glyphicon glyphicon-calendar" ></span>
                    </span>
                  </div>
                </div>
                <div class="form-group">
                  <div class='input-group date' id='startdate'>
                    <input type='text' id="date2" class="form-control" placeholder="Last Date" />
                    <span class="input-group-addon">
                      <span class="glyphicon glyphicon-calendar" ></span>
                    </span>
                  </div>
                </div>
                <div class="form-group">
                  <input type="time" class="form-control" v-model="workout.duration"
                        placeholder="Duration" autofocus required>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control " v-model="workout.weight" placeholder="Weight"
                        required autocomplete="off">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control " v-model="workout.repeats" placeholder="Repeats"
                        required autocomplete="off">
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" v-on:click="AddWorout()">Save Workout</button>
            </div>
          </div>
        </div>
      </div>

    <!-- Modal -->
    <div class="modal fade black-color" id="myModalHisory" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Workout History for {{workoutTitle}} </h4>
          </div>
          <div class="modal-body">
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
                <tr v-for="(item, index) in historyData" :key="index">
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
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import auth from '../../auth'
  export default {
    name: 'workouts-common',
    props: ['bgImg','keyType', 'iconImg', 'workoutTitle'],
    data() {
      return {
        key: this.$props.keyType,
        historyData:[],
        historyData2:[],
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
    created() {
      this.getHisory(this.$props.keyType, 'onChange');
    },
    computed: {
      userData() {
        return auth.getUser();
      },
    },
    mounted() {
      window.$('#startdate').datetimepicker({
        format: 'MM/DD/YYYY',
        // maxDate: new Date()
      });
      window.$('#lastdate').datetimepicker({
        format: 'MM/DD/YYYY',
        // maxDate: new Date()
      });
    },
    methods: {
      clearWorkout() {
        this.workout.start_date = ''
        this.workout.last_date = ''
        this.workout.duration = ''
        this.workout.weight = ''
        this.workout.repeats = ''
        window.$('#date1').val('')
        window.$('#date2').val('')
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
            self.historyData = data.body.workouts;
          }
        }).catch((err) => {
          window.$('.modal').modal('hide');
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

        Vue.http.post('workout', self.workout)
        .then(() => {
          window.$('.modal').modal('hide');
          self.$toastr.success("Workout added.");
          self.clearWorkout()
        })
        .catch((err) => {
          window.$('.modal').modal('hide');
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
</style>
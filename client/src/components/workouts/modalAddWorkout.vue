<template>
  <div class="modal fade in modal-active">
			<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" v-on:click="$emit('close')" class="close"><span >&times;</span></button>
							<h4 class="modal-title">
							Workout-{{workoutTitle}}
							</h4>
						</div>
						<div class="modal-body">
							<form  class="login_form">
                <div class="form-group">
                  <div class='input-group date' id='lastdate'>
                    <input type='date' id="date1" class="form-control" placeholder="Start Date" />
                    <span class="input-group-addon">
                    </span>
                  </div>
                </div>
                <div class="form-group">
                  <div class='input-group date' id='startdate'>
                    <input type='date' id="date2" class="form-control" placeholder="Last Date" />
                    <span class="input-group-addon">
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
							<button type="button" class="btn btn-default" v-on:click="$emit('close')">Close</button>
							<button type="button" class="btn btn-primary" v-on:click="$emit('AddWorout')">Add Worout</button>
						</div>
				</div>
			</div>
	</div>
</template>
<script>

  export default {
    props: ['workoutTitle', 'workout'],
    name: 'modal-add-workout',
  };
</script>

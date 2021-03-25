<template>
  <div class="modal fade in modal-active">
			<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" v-on:click="$emit('close')" class="close"><span >&times;</span></button>
							<h4 class="modal-title">
							Workout History for {{workoutTitle}}
							</h4>
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
							<button type="button" class="btn btn-default" v-on:click="$emit('close')">Close</button>
						</div>
				</div>
			</div>
	</div>
</template>
<script>

  export default {
    props: ['workoutTitle', 'historyData'],
    name: 'modal-show-history',
  };
</script>

<template>
  <div class="modal fade in modal-active">
			<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" v-on:click="$emit('close')" class="close"><span >&times;</span></button>
							<h4 class="modal-title black-color">
							{{exerciseTitle}}
							</h4>
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
							<button type="button" class="btn btn-default" v-on:click="$emit('close')">Close</button>
							<button type="button" class="btn btn-primary" v-on:click="$emit('AddExercise')">Add Exercise</button>
						</div>
				</div>
			</div>
	</div>
</template>
<script>

  export default {
    props: ['exerciseTitle', 'exercise'],
    name: 'modal-add-exercise',
  };
</script>

<template>
  <div class="modal fade in modal-active">
			<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" v-on:click="$emit('close')" class="close"><span >&times;</span></button>
							<h4 class="modal-title">
							{{selectedMember.name}}' Profile
							</h4>
						</div>
						<div class="modal-body">
							<div class="form-group">
                    <img class="img-style-modal " v-if="!selectedMember.profile_picture " src="../../assets/user.jpg">
                    <img class="img-style-modal " :src="API_HOST_URL+selectedMember.profile_picture" v-else>
                </div>
                <div class="form-group">
                    <label for="">Name: {{selectedMember.name}}</label>
                </div>
                <div class="form-group">
                    <label for="">Mobile: {{selectedMember.mobile}}</label>
                </div>
                <div class="form-group">
                    <label for="">Date of Birth: {{selectedMember.dob}}</label>
                </div>
                <div class="form-group">
                    <label for="">Gender: {{selectedMember.gender}}</label>
                </div>
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
    props: ['API_HOST_URL', 'selectedMember'],
    name: 'modal-show-member',
  };
</script>

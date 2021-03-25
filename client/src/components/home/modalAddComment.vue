<template>
  <div class="modal fade in modal-active">
			<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" v-on:click="$emit('close')" class="close"><span >&times;</span></button>
							<h4 class="modal-title black-color">
							Comment On Status {{statusComment.status_title}}
							</h4>
						</div>
						<div class="modal-body">
							<div class="form-group">
                  <div class="input-group">
                    <textarea class="form-control" id="" rows="3" v-model="comment.comment_title" placeholder="Write your cooment here..." ></textarea>
                  </div>
                </div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-default" v-on:click="$emit('close')">Close</button>
							<button type="button" class="btn btn-primary" v-on:click="$emit('commentStatus')">Add Comment</button>
						</div>
				</div>
			</div>
	</div>
</template>
<script>

  export default {
    props: ['statusComment', 'comment'],
    name: 'modal-add-comment',
  };
</script>

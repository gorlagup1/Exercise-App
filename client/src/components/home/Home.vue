<template>
  <div class="container mt-50 p-20 black-color">
    <div class="row">
    <div class="col-lg-6">
      <form>
        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon">Status:</span>
                  <textarea class="form-control" id="" rows="3" v-model="status.status_title" placeholder="Write your status..." ></textarea>
              </div>
          </div>
        <button class="btn btn-outline-success post-btn"  v-on:click="addStatus()">Post</button>
      </form>
      </div>
    </div>
    <br><br><br>
    <div class="row">
      <div v-for="(item, index) in usersStatus" :key="index">
        <div class="jumbotron">
          <div class="">
            <span class="status_user">{{item.status_user}}:</span>{{item.status_title}}
            <div class="text-right position-relative">
              <button class="btn btn-success" v-on:click="likeStatus(item)">Like <span class="badge">{{item.like_count}}</span></button>
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" v-on:click.stop="openModalCommentStatus($event,item)">
                Comment
              </button>
              <button class="btn btn-danger" v-on:click="delStatus(item)" v-if="userData.id === item.user_id">Delete </button>
            </div>
            <div class="text-left position-relative ">
              <small>posted at: {{item.created_at}}</small>
            </div>
            <div v-if="item.comments">
              <br>
              Comments:
              <div class="comment-section" v-for="(comment,cmt) in item.comments" :key="cmt">
                <h5 class="status_user">{{comment.user_name}} : </h5>
                <span>{{comment.comment_title}}</span>
                <div class="text-left position-relative ">
                    <small>commented at: {{comment.created_at}} </small>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
 <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Comment On Status {{statusComment.status_title}}</h4>
          </div>
          <div class="modal-body">
              <div class="form-group">
                  <div class="input-group">
                    <textarea class="form-control" id="" rows="3" v-model="comment.comment_title" placeholder="Write your cooment here..." ></textarea>
                  </div>
                </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" v-on:click="commentStatus()">Add Comment</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
  </div>
</template>

<script>
import Vue from 'vue';
import auth from '../../auth'


export default {
  name: 'home-view',
  data() {
    return {
      status: {
        status_title: '',
        user_id: '',
        like_count: 0
      },
      comment: {
        comment_title: '',
        status_id: '',
        user_id: ''
      },
      statusComment: {
        status_title:'',
        status_id: ''
      },

      usersStatus: [],
    };
  },
  created() {
    this.getStatus();
  },
  computed: {
    userData() {
      return auth.getUser();
    },
  },
  methods: {
    getStatus() {
      var self = this;
      Vue.http.get('status')
      .then((data) => {
        self.usersStatus = data.body.status;
      })
    },
    addStatus(){
      var self = this;
      this.status.user_id = this.userData.id;

      if (this.status.status_title !=='') {
        Vue.http.post('status', self.status)
        .then(() => {
          self.getStatus()
          this.$toastr.success("Status posted.");
        })
        .catch((err) => {
          this.$toastr.error(err, "Error while post status!");
        });
      } else {
        this.$toastr.error('status fields should not blank!', "Empty Status");
      }
    },

    openModalCommentStatus(e,status) {
      e.preventDefault();
      e.stopPropagation();

        this.statusComment.status_title = status.status_title;
        this.comment.status_id = status.id;
        this.comment.user_id = this.userData.id;
        window.$('.modal').modal('show');
    },
    commentStatus() {
      const self =this;
        if (this.comment.comment_title !=='') {
          Vue.http.post('comments', self.comment)
          .then(() => {
            window.$('.modal').modal('hide');
            self.getStatus();
            self.$toastr.success("Commented on status.");
          })
          .catch((err) => {
            window.$('.modal').modal('hide');
            self.$toastr.error(err, "Error while comment on status!");
          });
        } else {
          window.$('.modal').modal('hide');
          self.$toastr.error('Comment should not blank!', "Empty Comment!");
        }

    },
    likeStatus(status) {
      let count=status.like_count + 1;
      Vue.http.put('status', {"like_count": count, id: status.id})
      .then(() => {
        status.like_count=count;
        this.$toastr.success("Status liked.");
      })
      .catch((err) => {
        this.$toastr.error(err, "Error in like status!");
      });
    },
    delStatus(status) {
      const self = this;
      Vue.http.delete('status', {params:{"user_id": this.userData.id, status_id: status.id}})
      .then(() => {
        this.$toastr.success("Status deleted!");
        self.getStatus()
      })
      .catch((err) => {
        this.$toastr.error(err, "Error in deleting status!");
      });    
    }
  }
};

</script>
<style>
 .status_user {
   padding-left: 5px;
   padding-right: 10px;
   color: green;
 }
 .post-btn{
    width: 100%;
    font-size: 20px;
    font-weight: 700;
 }

 .comment-section {
    margin: 7px;
    background-color: white;
    padding: 10px;
 }

 .galary {
	padding: 20px !important;
	text-align: center !important;
}
.signin-btn {
	padding-top: 40px !important;
	text-align: center !important;
}

.border {
	border: 1px solid gray; 
}
.item {
	margin-left: 150px;
}
.btn {
	border-radius:20px
}
</style>

<template>
  <div class="container mt-20 p-20">
    <div class="row ">
      <div class="panel">
        <h2 class="panel_head black-color">Setting</h2>
        <form >
          <div class="form-group">
            <img class="img-style " v-if="!userData.profile_picture" :src="defaultImage">
            <img class="img-style " :src="API_HOST_URL+userData.profile_picture" v-else>
            <label class="btn-bs-file btn btn-md btn-block">
              Upload Picture
              <input type="file" id="profile-picture" v-on:change="onFileSelection('profile-picture')">
            </label>
          </div>

          <div class="form-group">
              <input type="text" name="fname"  class="form-control " v-model="user.name" placeholder="Name"
                  required autocomplete="off">
          </div>
          <div class="form-group">
            <input type="text" name="lname"  class="form-control " v-model="user.mobile" placeholder="Mobile"
              required autocomplete="off">
          </div>

          <div class="form-group">
              <div class='input-group date' id='dateofbirth'>
                  <input type='date' id="dob" v-model="user.dob" class="form-control" placeholder="Date of Birth" />

                      <span class="input-group-addon">
                      <span class="glyphicon glyphicon-calendar" ></span>
                  </span>
              </div>
            </div>
            <div class="form-group">
                Gender :
              <label class="radio-inline" >
                
                <input type="radio" :selected="user.gender == 'male'" v-model="user.gender" value=male> Male 
              
              </label>
              <label class="radio-inline">
                
                <input type="radio" :selected="user.gender == 'female'" v-model="user.gender" value=female> Female
              </label>
            </div>
            <div class="form-group">
              <button type="button"  class="btn btn-primary " v-on:click="update()"> Save Setting</button>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { API_HOST } from '../../api/urls';
  import auth from '../../auth';

  export default {
    name: 'profile-view',
    data() {
      return {
        key: '',
        user: {
					dob: '',
					gender: '',
					name: '',
					mobile: '',
        },
        API_HOST_URL : API_HOST,
        userData:{}
      };
    },
    created() {
      console.log('created')
      this.userData = auth.getUser();
      this.user.dob = this.formateDateToYYYYMMDD(this.userData.dob) ;
      this.user.gender = this.userData.gender;
      this.user.name = this.userData.name;
      this.user.mobile = this.userData.mobile;
      this.user.id = this.userData.id
      console.log(this.userData, this.user)
    },
    methods: {
      formateDateToYYYYMMDD(date) {
        if(!date) return null;
        date = new Date(date)
        return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + (date.getDate())).slice(-2)}`
      },
      onFileSelection(id) {
      const input = window.document.getElementById(id);
      if (input.files[0].type.indexOf('image') !== -1) {
        const fd = new FormData();
        fd.append('profile_picture', input.files[0]);
        this.savePicture(fd);
      } else {
        this.$toastr.warning('Please Upload Only Images');
      }
    },
    savePicture(picture) {
      const self=this;
      Vue.http.put('user/picture', picture, {params:{id:self.userData.id}}).then(() => {
        self.$toastr.success("Profile updated.");
        auth.getCurrentUser()
        .then((data) => {
          self.userData = data;
          self.user.dob = this.formateDateToYYYYMMDD(self.userData.dob)
        });
      })
      .catch((err) => {
        self.$toastr.error(err, "Error while updating profile!");
      });
    },
      update(){
        this.user.dob = this.isoDate('dob')
        const self = this;

        Vue.http.put('users', self.user)
        .then(() => {
          this.$toastr.success("Profile updated.");
          auth.getCurrentUser()
          .then((data) => {
            self.userData = data;
            self.user.dob = this.formateDateToYYYYMMDD(self.userData.dob)
          });
        })
        .catch((err) => {
          this.$toastr.error(err, "Error while updating profile!");
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
 }
  };

</script>
<style>
  .panel{
    margin: auto;
    width: 60%;
    padding: 10%;
  }
  .panel_head{
    padding-bottom: 7%;
    
  }

  .img-style {
    width: 120px;
    height: 130px;
    margin: 10px auto !important; 
  }
  .btn-block {
    display: block;
    width: 100%;
    text-align: left;
  }
  .form-group{
    color:black;
    text-decoration-color: black;
  
  }
</style>

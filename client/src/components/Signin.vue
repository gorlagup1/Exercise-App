<!--  SignIn.vue -->
<template>
	<div class="container" :style="bgImg">
    <landingnavbar />
		<div class="row pt-50">
      <div class="col-md-3 "></div>

			<div class="col-md-6 ">
        <div class="panel form-panel black-color">
          <h4 class="font-style">Fitness Tracker App</h4>
          <div class="panel-body">
            <form  class="login_form">
              <div class="form-group">
                <input type="text" name="email" class="form-control" v-model="formData.email"
                  placeholder="Email" autofocus required>
              </div>
              <div class="form-group">
                <input type="password" name="password"  class="form-control " v-model="formData.password" placeholder="Password"
                  required autocomplete="off">
              </div>
              <br>
              <div class="form-group">
                <button type="button"  class="btn btn-primary" v-on:click="loginNormal()"> Sign In</button>
              </div>
              <hr>
              <div class="form-group">
                Or Sign In With
                <a href="#" class="btn btn-primary" v-on:click="loginFacebook()"><span class="fa fa-facebook"></span> Facebook</a>

              </div>
                <hr>
              <div class="form-group">
                Or New User <a href="#/signup" class="" >Sign Up</a> Here.
              </div>
            </form>
          </div>
        </div>
      </div>
		</div>
	</div>
</template>

<script>
  import auth from '../auth';
  import Vue from 'vue';
  import landingnavbar from './common/LandingNavbar';
  /*global FB*/

  export default {
    name: 'signin',
    components: {
      landingnavbar,
    },
    data () {
      return {
        bgImg: {
          backgroundImage: `url(${require('@/assets/landing.png')})`
        },
        formData: {
          email:'',
          password:'',
        },
      }
    },
    methods: {
      isValidForm(){
        if (this.formData !=='' && this.formData.password !=='') {
            return true;
        } else {
            return false;
        }
      },
      loginNormal(){
        var self = this;
        if (this.isValidForm()) {
          auth.login(this.formData).then(() => {
            this.$toastr.success("You are logged in successfully", "Login Success");
            self.$router.push({ name: 'HomeView' });
            return true;
          }, error => {
            // error callback
            this.$toastr.error(error, "Login Error!");
            return false;
          });
        } else {
          this.$toastr.error('Empty fields', "Login Error!");
          return false;
        }
      },
      loginFacebook(){
        console.log('Clieckd loginFacebook');
        const self = this;
        FB.login(function() {
          FB.api('/me?fields=id,name,email', function(profile) {
            const userData = {
              name: profile.name,
              email: profile.email
            }
            Vue.http.post('signin/social', userData)
            .then((data) => {
              if (data.body && data.body.results && data.body.results.status) {
                auth.setToken(data.body.results.token);
                localStorage.setItem('user_data', JSON.stringify(data.body.results.user));
                self.$toastr.success("You are logged in successfully", "Login Success");
                self.$router.push({ name: 'HomeView' });
                return true;
              } else {
                let msg = data.body.result.message || 'Unable to Login';
                self.$toastr.error(msg, "Facebook Login Error!");
                return false;
              }
            })
            .catch((err) => {
              console.log("facebook  login----------errr", err)
              if (err.body && err.body.results.message) {
                self.$toastr.error(err.body.results.message, "Facebook Login Error!");
                return false;
              } else {
                self.$toastr.error( "Facebook Login Error!");
                return false;
              }
            });
          });
        }, {scope: 'public_profile, email'});
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button {
    border-radius: 30px;
    width: 100px;
  }

</style>

<!--  Signup.vue -->
<template>
	<div class="container" :style="bgImg">
    <landingnavbar />
      <div class="row pt-50">
        <div class="col-md-3 "></div>
        <div class="col-md-6">
          <div class="panel form-panel">
            <h4 class="font-style">Fitness Tracker App</h4>
            <div class="panel-body ">
              <div v-if="success" >
                <br> <br>
                <h1>Thanks for signup !</h1>
                <h4>Your registration done succesfully.</h4>
                <br> <br>
                <div class="container-login100-form-btn">
                  <div class="wrap-login100-form-btn">
                    <div class="login100-form-bgbtn"></div>
                    <router-link :to="{ name: 'Signin' }"><button class="login100-form-btn">Sign In</button></router-link>
                  </div>
                </div>
              </div>
              <div v-if="!success">
                <form  class="login_form">
                  <div class="form-group">
                      <input type="text" name="fname"  class="form-control " v-model="newUser.name" placeholder="Name"
                          required autocomplete="off">
                  </div>
                  <div class="form-group">
                      <input type="text" name="lname"  class="form-control " v-model="newUser.mobile" placeholder="Mobile"
                          required autocomplete="off">
                  </div>
                  <div class="form-group">
                      <input type="text" name="email" class="form-control" v-model="newUser.email"
                          placeholder="Email" autofocus required>
                  </div>
                  <div class="form-group">
                      <input type="password" name="password"  class="form-control " v-model="newUser.password" placeholder="Password"
                          required autocomplete="off">
                  </div>
                  <div class="form-group">
                      <input type="password" name="password"  class="form-control " v-model="newUser.confirmpassword" placeholder="Confirm Password"
                          required autocomplete="off">
                  </div>
                  <div class="form-group">
                      <button type="button"  class="btn btn-primary " v-on:click="signup()"> Sign Up</button>

                  </div>
                  <hr>
                  <hr>
                <div class="form-group">
                  Or Already member? <a href="#/signin" class="" >Sign In</a> Here.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	import auth from '../auth'
  import landingnavbar from './common/LandingNavbar';

	export default {
		name: 'signup',
    components: {
    landingnavbar,
  },
		data () {
			return {
        bgImg: {
          backgroundImage: `url(${require('@/assets/landing.png')})`
        },
				success: false,
				newUser: {
					email: '',
					password: '',
					name: '',
					mobile: '',
					confirmpassword: ''
				}
			}
		},

		methods: {
			isValidForm(){
				if (this.newUser.name !==''
				&& this.newUser.mobile !==''
				&& this.newUser.email !==''
				&& this.newUser.password !==''
				&& this.newUser.confirmpassword !=='') {
					if (this.newUser.password !== this.newUser.confirmpassword) {
						this.$toastr.error('Password not match with confirm password', "Sign Up Error!");
						return false;
					}
						return true;
				} else {
					this.$toastr.error('Empty fields', "Sign Up Error!");
						return false;
				}
			},

			signup(){
				const self = this;
				if (this.isValidForm()) {
					auth.signup(this.newUser).then(() => {
            this.$toastr.success("You are logged in successfully", "Login Success");
            self.success = true;
            return true;
					}, error => {
            // error callback
            this.$toastr.error(error, "Login Error!");
            return false;
					});
				} else {
					return;
				}
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

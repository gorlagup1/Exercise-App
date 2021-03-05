<!--  SignIn.vue -->
<template>
	<div class="container">
    <landingnavbar />
    <div class="row signin-btn mb-20">
			<div class="col-sm-6">
				<a href="#/signin" class="btn btn-lg btn-success background-theme-color" >Login</a>
			</div>
			<div class="col-sm-6 ">
				<a href="#/signup" class="btn btn-lg btn-primary background-theme-color" >Register</a>
			</div>
		</div>
    <div class="row galary">
      <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          <li data-target="#carousel-example-generic" data-slide-to="3" ></li>
          <li data-target="#carousel-example-generic" data-slide-to="4"></li>
          <li data-target="#carousel-example-generic" data-slide-to="5"></li>
          <li data-target="#carousel-example-generic" data-slide-to="6"></li>
          <li data-target="#carousel-example-generic" data-slide-to="7"></li>
          <li data-target="#carousel-example-generic" data-slide-to="8"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox" style="margin-left: -35px;">
          <div class="item active">
            <img class="carousel-landing-img" src="../assets/landing/fitness-quotes.jpg" >
          </div>
          <div class="item">
            <img class="carousel-landing-img" src="../assets/landing/workout.jpg" >
          </div>
          <div class="item">
            <img class="carousel-landing-img" src="../assets/landing/fit.jpg" >
          </div>
          <div class="item">
            <img class="carousel-landing-img" src="../assets/landing/fit2.jpg" >
          </div>
          <div class="item">
            <img class="carousel-landing-img" src="../assets/landing/fitness3.jpg" >
          </div>
          <div class="item">
            <img class="carousel-landing-img" src="../assets/landing/fitness-quotes2.jpg" >
          </div>
          <div class="item">
            <img class="carousel-landing-img" src="../assets/landing/gym-fitness.jpg" >
          </div>
          <div class="item">
            <img class="carousel-landing-img" src="../assets/landing/inspirational-thoughts.jpg" >
          </div>
        </div>

        <!-- Controls -->
        <a class="left background-theme-color carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right background-theme-color carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
	</div>
</template>

<script>
  import landingnavbar from './common/LandingNavbar';

  export default {
    name: 'landing',
    components: {
      landingnavbar,
    },
    data () {
      return {
        formData: {
          email:'',
          password:'',
        },
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .carousel-landing-img {
      width: 98% !important;
      height: 400px !important;
      text-align: center;
      /* padding: 20px; */
  }
  .item {
      margin-left: 86px;
  }
  .carousel-control {
    width: 5%;
    height: 400px;
  }

  .signin-btn {
    padding-top: 40px !important;
    text-align: center !important;
  }
  .galary {
    padding: 20px !important; 
    text-align: center !important;
    width: 80%;
    position: relative;
    margin: 0 auto;
  }
</style>

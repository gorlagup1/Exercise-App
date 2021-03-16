<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          </button>
        <a class="navbar-brandc " href="#"><img src="../../assets/logo.jpg" class="app_logo"></a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#/dashboard/home">Home <span class="sr-only">(current)</span></a></li>
          <li><a href="#/dashboard/profile">Setting</a></li>
          <li><a href="#/dashboard/users">Members</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Workouts <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#/dashboard/workouts-walking">Walking</a></li>
              <li><a href="#/dashboard/workouts-running">Running</a></li>
              <li ><a href="#/dashboard/workouts-cycling">Cycling</a></li>
              <li ><a href="#/dashboard/workouts-rover">Rower</a></li>
              <li ><a href="#/dashboard/workouts-stairstepper">Stair Stepper</a></li>
              <li ><a href="#/dashboard/workouts-hiking">Hiking</a></li>
              <li ><a href="#/dashboard/workouts-yoga">Yoga</a></li>
              <li ><a href="#/dashboard/workouts-swimming">Swimming</a></li>
              <li ><a href="#/dashboard/workouts-wheelchair">Wheelchair</a></li>
            </ul>
          </li>
          <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Exercise <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#/dashboard/exercise-fat-to-fit">Fat-To-Fit</a></li>
                <li><a href="#/dashboard/exercise-muscle-building">Muscle Building</a></li>
                <li ><a href="#/dashboard/exercise-daily-diet">Daily Diet</a></li>
              </ul>
            </li>
        </ul>

        <div class="username-main text-right position-relative">
          <span>{{userData.name}}</span>
          <a v-on:click="logout()">
              <span class=" btn logout-icon"></span>Logout</a>
        </div>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
  
  import auth from '../../auth'

  export default {
    name: 'Navbar',
    props: [],
    data() {
      return {
        defaultImage: '../../assets/logo.jpg',
        displayImage: '',
      };
    },
    mounted() {
      // this.displayImage = this.userData.profileImage ? this.userData.profileImage : '';
    },
    computed: {
      userData() {
        return auth.getUser();
      },
      profilePic() {
        return "No pic yet";  
      },
    },
    methods: {
      logout() {
        auth.logout();
        this.$router.push({
          name: 'Root',
        });
      },
      toggleSideBar() {
        this.$emit('toggle-sidebar');
      },
    },
  };

</script>

<style scoped>

  .username-main {
    float: right;
    font-size: 14px;
    left: -90px;
    top: 14px;
    margin-left: -30px;
    position: relative;
    color: white;
  }

  navbar-brandc {
    float: left;
    height: 50px;
    padding: 5px 10px;
    font-size: 18px;
    line-height: 20px;
  }

  img {
    width: auto;
    height: 164px;
  }

</style>
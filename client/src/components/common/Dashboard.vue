<template>
  <div class="dashboard">
    <navbar />
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar';
import auth from '../../auth'

export default {
  name: 'dashboard',
  created() {
    // const token = localStorage.getItem('id_token');
    // if (token && typeof (token) !== 'string') {
    //   this.$router.push({ name: 'Signin' });
    // }
  },
  components: {
    Navbar,
  },
};

</script>

<style>

</style>

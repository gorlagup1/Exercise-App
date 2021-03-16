<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
 
 /*//global FB*/
  // Load the SDK asynchronously

  /*
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));


  window.fbAsyncInit = function() {
    FB.init({
      cookie: true,  // enable cookies to allow the server to access the session
      xfbml: true,  // parse social plugins on this page
      appId: '620057538167941',
      autoLogAppEvents: true,
      version: 'v2.6'
    });
  };
  */
  export default {
    
  };

  // FIXME Please move the css to a seperate CSS File.
  // It seems the css written below is not plain css, but LESS or PostCSS
</script>

<style>
  body{
    padding: 5px;
      color: rgb(73, 19, 19);
  }
  .background-theme-color {
    background-color: #86f4ee;
    color: black;
  }

  .align-center {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 99;
  }
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
  .cursor-pointer {
    cursor: pointer;
  }

  /* Popover Arrow */
  .arrow {
    border-right-color: red !important;
  }

  /*Display*/
  .display-block {
    display: block;
  }
  .app_band {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 65px !important;
    width: 160px !important;
    padding: 5px;
  }

  .app_logo {
    display: block;
    margin-left: 0px;
    margin-right: auto;
    margin-top: -8px;
    height: 40px !important;
    width: 60px !important;
  }
  /*Positions*/

  .position-relative {
    position: relative;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #86f4ee;
    border-radius: 4px;
  }

  body::-webkit-scrollbar {
    width: 6px;
    background: #fff;
    border-radius: 4px;
  }
  body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }
  #app {
    font-family: "roboto" !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color:whitesmoke;
    height: 100%;
  }
  .black-color {
    color: black;
  }
  .container {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height:800px;
    min-width:100%;
    height:auto;
    width:auto;
  }
  .align-center {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 99;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .font-style {
    margin-bottom: 20px;
    margin-top: 0px;
    text-align: center;
    opacity: 0.5;
    font-weight: 600;
  }

  .main-content {
    margin-top: 26px;
    margin-bottom: 50px;
    padding: 0px;
  }

  .center-text {
    text-align: center !important;
  }
  .center-align {
    padding: 70px 0;
    text-align: center;
  }

  /* Popover Arrow */
  .arrow {
    border-right-color: red !important;
  }

  /*Margins*/
  .m-0 {
    margin: 0px !important;
  }
  .m-5 {
    margin: 5px;
  }
  .m-10 {
    margin: 10px;
  }
  .mt-4 {
    margin-top: 4px;
  }
  .mb-20 {
    margin-bottom: 20px;
  }
  .mt-20 {
    margin-top: 20px;
  }
  .mt-50 {
    margin-top: 50px;
  }
  .mt-100 {
    margin-top: 100px;
  }
  .ml-200 {
    margin-left: 200px;
  }
  .ml-20 {
    margin-left: 20px;
  }
  .ml-15 {
    margin-left: 15px;
  }
  .ml-50 {
    margin-left: 50px;
  }
  .ml-57 {
    margin-left: 57px;
  }
  .ml-0 {
    margin-left: 0px;
  }
  .mr-20 {
    margin-right: 20px;
  }

  /*Paddings*/
  .p-0 {
    padding: 0px !important;
  }
  .p-5 {
    padding: 5px !important;
  }
  .p-10 {
    padding: 10px !important;
  }
  .p-20 {
    padding: 20px !important;
  }
  .pt-25 {
    padding-top: 25px !important;
  }
  .pt-50 {
    padding-top: 50px !important;
  }
  .p-30 {
    padding: 20px !important;
  }
  .pt-5 {
    padding-top: 5px;
  }
  .pl-5 {
    padding-left: 5px;
  }
  .pl-10 {
    padding-left: 10px;
  }
  .pl-15 {
    padding-left: 15px;
  }
  .pl-50 {
    padding-left: 50px;
  }
  .pb-10 {
    padding-bottom: 10px;
  }
  .pb-15 {
    padding-bottom: 15px;
  }
  .pb-20 {
    padding-bottom: 20px;
  }
  .pt-10 {
    padding-top: 10px !important;
  }
  .pt-15 {
    padding-top: 15px !important;
  }
  .pt-20 {
    padding-top: 20px !important;
  }
  .pt-30 {
    padding-top: 30px !important;
  }
  .pt-40 {
    padding-top: 40px !important;
  }
  .pb-30 {
    padding-bottom: 30px !important;
  }
  .pr-5 {
    padding-right: 5px;
  }
  .pr-20 {
    padding-right: 20px;
  }
  .pr-50 {
    padding-right: 50px;
  }
  /*Fonts*/
  .fw-bold {
    font-weight: bold;
  }
  .fs-40 {
    font-size: 40px;
  }
  .fs-20 {
    font-size: 20px;
  }
  .fs-14 {
    font-size: 14px;
  }
  .fs-16 {
    font-size: 16px;
  }
  .fs-18 {
    font-size: 18px !important;
  }
  .fs-20 {
    font-size: 20px;
  }

  /*Borders*/
  .b-1 {
    border: 1px solid grey;
  }


  navbar-brand {
      padding: 5px 10px;
  }
  .navbar {
    margin-bottom: 0px !important;
  }
  .content{
      margin-top: 10px;
      position: relative;
    }
    .content2{
      margin-top: 50px;
      position: relative;
      padding-left: 90px;
      padding-right: 100px;
    }

    .inline-block {
      display: inline-block;
    }
    .sarch-cls {
      padding: 30px;
    }
    .workout-img {
      align-content: left;
      height: 60px!important;
      width: 100px!important;
      display: inline-block;
      margin-top: 50px;
      margin-left: 150px;
    }
  .form-panel {
    padding: 30px;
    position: relative;
    margin-left: auto;
    margin-top: 35px;
    margin-right: auto;
    text-align: center;
    background-color: #86f4ee;
    width: 80%;
  }
  .app_logo { 
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1px;
    height: 40px !important;
    width: 55px !important;
  }
</style>
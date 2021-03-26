import 'bootstrap/dist/css/bootstrap.css'
import 'toastr/build/toastr.min.css'
import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import toastr from 'toastr'
import 'eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css'

  
import router from './router'
import App from './App'
import auth from './auth'
import { API_HOST } from './api/urls'
const paltformBrowse = require('../src/utils/platform-browser').default;

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VeeValidate);
Vue.prototype.$toastr = toastr;

Vue.http.headers.common['Content-Type'] = 'application/json';
Vue.http.options.root = API_HOST;


Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', auth.getAccessToken().AccessToken);
  next((response) => {
    if (response.status === 401 && router.currentRoute.name !== 'login') {
      // logout();
    } else if (response.status <= 0 && !window.navigator.onLine) {
      toastr.warning('Sorry! No internet connection.');
    } else if (response.status <= 0) {
      toastr.warning('Sorry! There is some server issue. Please try after some time.');
    }
  });
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App), 
  router,
  components: {
    App,
  },

}).$mount('#app')


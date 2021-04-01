import Vue from 'vue';

export default {

  user: {
    authenticated: false,
  },

  setToken(token) {
    localStorage.setItem('id_token', token);
  },

  removeToken() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user_data');
  },

  getUser() {
    const user = JSON.parse(localStorage.getItem('user_data'));
    return user || {name: 'Test User', id: 1};
  },

  getCurrentUser(){
    return new Promise((resolve, reject) => {
      Vue.http.get('user/me', {
        params: {id:this.getUser().id},
      })
      .then((data) => {
        if (data.body && data.body.results && data.body.results.status) {
          
          localStorage.setItem('user_data', JSON.stringify(data.body.results.user));
          resolve(data.body.results.user)
        } else {
          reject(null)
        }
      })
      .catch((err) => {
        reject(err)
      });
    });
  },

  login(payload) {
    return new Promise((resolve, reject) => {
      Vue.http.post('login', {
        email: payload.email,
        password: payload.password,
      })
      .then((data) => {
        console.log(data)
        if (data.body && data.body.results && data.body.results.status) {
          this.setToken(data.body.results.token);
          localStorage.setItem('user_data', JSON.stringify(data.body.results.user));
          resolve(data.body.results);
        } else {
          let msg = data.body.results.msg || 'Unable to Login';
          reject(msg);
        }
      })
      .catch((err) => {
        console.log("login----------errr", err)
        if (err.body && err.body.results.msg) {
          reject(err.body.message);
        } else {
          reject('Unable to login');
        }
      });
    });
  },

  signup(payload) {
    return new Promise((resolve, reject) => {
      console.log("signup", payload)
      Vue.http.post('register', payload)
      .then((data) => {
        resolve(data.body.data);
      })
      .catch((err) => {
        console.log("login----------errr", err)
        if (err.body && err.body.message) {
          reject(err.body.message);
        } else {
          reject('Unable to login');
        }
      });
    });
  },

  logout() {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line
      this.removeToken();
      this.user.authenticated = false;
      if (this.checkAuth()) {
        reject(false);
      } else {
        resolve(true);
      }
    });
  },

  checkAuth() {
    const jwt = localStorage.getItem('id_token');
    if (jwt) {
      this.user.authenticated = true;
    } else {
      this.user.authenticated = false;
    }
    return this.user.authenticated;
  },

  getAccessToken() {
    return {
      AccessToken: `${localStorage.getItem('id_token')}`,
    };
  },
};

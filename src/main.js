import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './plugins/vuetify'
import router from '@/router'
import store from '@/store'
import * as firebase from 'firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

var config = {
  apiKey: "AIzaSyAPHmLvRh-Tx-VXeivyPxHs82t_cQdRgfA",
  authDomain: "vue-firebase-95e29.firebaseapp.com",
  databaseURL: "https://vue-firebase-95e29.firebaseio.com",
  projectId: "vue-firebase-95e29",
  storageBucket: "gs://vue-firebase-95e29.appspot.com",
  messagingSenderId: "288007976915"
}
firebase.initializeApp(config)
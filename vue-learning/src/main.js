import Vue from 'vue';
import App from './App.vue';
import Vuetify from "vuetify";
import axios from 'axios';
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

new Vue({
  el: '#app',
  render: h => h(App),
  vuetify: new Vuetify(),
  data: {
      launches_past: null
  },
  mounted() {
    axios
      .get('https://api.spacexdata.com/v4/launches/past')
      .then(response => (this.launches_past = response.data),
            err => {console.log("Unable to query API: " + err);});
  }
})

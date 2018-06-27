
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-awesome/icons';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Icon from 'vue-awesome/components/Icon';

import App from './App';
import router from './router';



Vue.use(BootstrapVue);
Vue.component('icon', Icon);
Vue.config.productionTip = false;

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, Icon },
});

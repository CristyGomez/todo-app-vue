import Vue from 'vue';
import App from './App.vue';
import '@/assets/css/tailwind.css';

import Card from './components/Card.vue';


Vue.config.productionTip = false;

Vue.component('todo-card', Card);




new Vue({
  render: h => h(App),
}).$mount('#app');

import Vue from 'vue';
import App from './App.vue';
import '@/assets/css/tailwind.css';

import Card from './components/Card.vue';
import Input from './components/Input.vue';

Vue.config.productionTip = false;

Vue.component('todo-card', Card);
Vue.component('todo-imput', Imput);



new Vue({
  render: h => h(App),
}).$mount('#app');

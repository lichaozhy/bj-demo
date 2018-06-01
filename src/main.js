// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'animate.css';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import fas from '@fortawesome/fontawesome-free-solid';
import fontawesome from '@fortawesome/fontawesome';

fontawesome.library.add(fas);

import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
});

'use strict';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		lang: 'en',
		setting: false
	},
	actions: {
		openSettingMode({ commit }) {
			commit('updateSetting', true);
		},
		closeSettingMode({ commit }) {
			commit('updateSetting');
		},
	},
	mutations: {
		updateSetting(state, val = false) {
			state.setting = val;
		}
	}
});

export default store;

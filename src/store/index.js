'use strict';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		lang: 'en',
		setting: false,
		showCalendar: false
	},
	actions: {
		openSettingMode({ commit }) {
			commit('updateSetting', true);
		},
		closeSettingMode({ commit }) {
			commit('updateSetting');
		},
		toggleCalendar({ commit, state }) {
			commit('setCalendarShow', !state.showCalendar);
		}
	},
	mutations: {
		updateSetting(state, val = false) {
			state.setting = val;
		},
		setCalendarShow(state, val = false) {
			state.showCalendar = val;
		}
	}
});

export default store;

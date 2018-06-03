<template>
	<div id="demo-calendar"
		class="h-100">
		<header class="text-right mb-4">
			<b-button
				@click="closeCalendar()"><font-awesome-icon icon="times" /></b-button>
		</header>
		<h2>06 星期四 <span class="float-right mt-2">2018年4月</span></h2>
		<datepicker
			class="demo-datepicker my-4"
			:language="zh"
			:inline="true"
			v-model="selected" 
			:day-view-only="true" />
		<ul>
			<li
				v-for="(event, index) in mock"
				:key="index">
				<h5>{{event.time}}</h5>
				<p>{{event.content}}</p>
			</li>
		</ul>
		<b-button
			variant="primary"
			class="w-100"><font-awesome-icon
				icon="plus"
				class="mr-2" />添加行程安排</b-button>
		<b-row class="mt-5 demo-menu">
			<b-col>
				<font-awesome-icon icon="paint-brush" />
				<p>换肤</p>
			</b-col>
			<b-col>
				<font-awesome-icon icon="user" />
				<p>我的</p>
			</b-col>
			<b-col>
				<font-awesome-icon icon="desktop" />
				<p>后台</p>
			</b-col>
			<b-col>
				<font-awesome-icon icon="clock" />
				<p>时间</p>
			</b-col>
			<b-col>
				<font-awesome-icon icon="door-open" />
				<p>退出</p>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import Datepicker from 'vuejs-datepicker';
import {zh} from 'vuejs-datepicker/dist/locale';

export default {
	components: {
		Datepicker, FontAwesomeIcon
	},
	data() {
		return {
			zh,
			selected: new Date(),
			mock: [
				{
					time: '10:30 AM',
					content: '与王书记参加扶贫小组会议 第一会议室第一会议室第一会议室第一会议室'
				}
			]
		};
	},
	methods: {
		closeCalendar() {
			this.$store.commit('setCalendarShow', false);
		}
	}
}
</script>


<style lang="less">
#demo-calendar {
	color: #fff;
	position: fixed;
	right: 0;
	top: 0;
	padding: 15px;
	z-index: 9999;
	background: #0D243D;
	width: 330px;

	h2 {
		font-weight: 300;
		span {
			font-size: 60%;
		}
	}

	.demo-datepicker {
		font-size: 120%;

		.vdp-datepicker__calendar {
			border: none;
			background: transparent;
		}

		.next::after {
			border-left-color: #fff;
		}

		.prev::after {
			border-right-color: #fff;
		}
	}

	.demo-menu {
		text-align: center;
		
		svg {
			font-size: 32px;
		}
		p {
			margin-top: 1em;
			font-size: 12px;
			font-weight: 300;
		}
	}
}
</style>

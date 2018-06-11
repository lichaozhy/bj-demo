<template>
	<div id="demo-jumbotron" class="mt-4">

		<div class="clearfix" style="height:80px">
			<div id="demo-logo" class="float-left">
				<div id="demo-logo-icon"><img src="@/assets/logo.png" /></div>
				<h2>个人工作平台</h2>
				<p>Personal work platform</p>
			</div>

			<div
				id="demo-tools"
				class="float-right">
				<b-button-group size="lg">
					<b-button><font-awesome-icon
						fixed-width
						icon="search" /></b-button>
					<b-button>
						<font-awesome-icon
							class="pulse animated infinite"
							fixed-width
							icon="envelope" />
						<b-badge
							pill
							variant="danger">1</b-badge>
					</b-button>
					<b-button>
						<font-awesome-icon
							class="pulse animated infinite"
							fixed-width
							icon="comment-dots" />
						<b-badge
							pill
							variant="danger">2</b-badge>
					</b-button>
					<b-button
						@click="toggleCalendar()">
						<font-awesome-icon
							fixed-width
							icon="bars" />
					</b-button>
					<b-button
						v-if="!isSetting"
						@click="openSetting()">
						<font-awesome-icon
							fixed-width
							icon="cog" />
					</b-button>
					<b-button
						@click="closeSetting()"
						v-if="isSetting">
						<font-awesome-icon
							class="fa-spin"
							fixed-width
							icon="cog" />
					</b-button>
				</b-button-group>
			</div>
		</div>

		<div id="demo-abstract" class="my-5">
			<b-row>
				<b-col cols="8" class="style-bg" id="personal-summay">
					<b-card overlay
						class="demo-abstract-card rounded-0"
						text-variant="white"
						title="你好，李海霞">
						<i><font-awesome-icon icon="user-circle" /></i>
						<p class="card-text">当前您有<em>4</em>项待办，约<em>11k</em>项已办，<em>4</em>个关注栏目</p>
					</b-card>
				</b-col>
				<b-col cols="4" class="style-bg" id="calendar">
					<b-card overlay
						class="demo-abstract-card rounded-0"
						text-variant="white"
						title="2018-5-30 星期一">
						<i><font-awesome-icon icon="calendar-alt" /></i>
						<p class="card-text">您有<em>2</em>项工作日程</p>
					</b-card>
				</b-col>
			</b-row>
		</div>
	</div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
	components: {
		FontAwesomeIcon
	},
	computed: {
		isSetting() {
			return this.$store.state.setting;
		}
	},
	methods: {
		openSetting() {
			this.$store.dispatch('openSettingMode');
		},
		closeSetting() {
			this.$store.dispatch('closeSettingMode');
		},
		toggleCalendar() {
			this.$store.dispatch('toggleCalendar');
		}
	}
}
</script>


<style lang="less">
#demo-jumbotron {
	background: transparent;

	#demo-tools {
		height: 80px;
		button {
			background: transparent;
			border: none;
			border-radius: 0;

			.badge {
				position: absolute;
				font-size: 12px;
				line-height: 12px;
				right: 5px;
				top: 5px;
				width: 2em;
				text-align: center;
			}
		}
	}

	#demo-logo {
		position: relative;
		padding-left: 90px;
		padding-top: 10px;
		height: 80px;
		width: 410px;
		text-align: center;

		#demo-logo-icon {
			position: absolute;
			width: 80px;
			height: 80px;
			top: 0;
			left: 0;
		}

		h2 {
			font-size: 24px;
			color: #fff;
			font-weight: 600;
		}
		p {
			font-size: 12px;
			color: #eee;
			font-weight: 300;
			text-transform: uppercase;
		}
	}

	#demo-abstract {
		.demo-abstract-card {
			background: url('../../assets/top-bg.jpg');
			height: 100px;

			i {
				line-height: 100px;
				position: absolute;
				top: 0;
				right: 15px;
				font-size: 64px;
				color: #d3af90;
				opacity: .8;
			}

			em {
				color: #d3af90;
				margin: auto .25em;
				font-weight: bold;
				text-decoration: underline;
			}
		}


	}
}
</style>


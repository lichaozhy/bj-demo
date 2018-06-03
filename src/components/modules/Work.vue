<template>
	<b-card no-body
		class="demo-work-card rounded-0 border-0">
		<b-tabs class="h-100"
			pills card vertical
			nav-class="demo-work-nav"
			nav-wrapper-class="demo-work-tabs">

			<b-tab title="待办工作" active>
				待办工作
			</b-tab>
			<b-tab title="已办工作">
				已办工作
			</b-tab>
		</b-tabs>
		<div class="demo-work-heading my-4 mx-4">
			<font-awesome-icon
				class="icon"
				icon="file-word" />
			<h2 class="mt-4 mb-0">我的工作</h2>
			<p>My work</p>
		</div>
	</b-card>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
	components: {
		FontAwesomeIcon
	}
}
</script>

<style lang="less">
.demo-work-card {
	height: 500px;
	.demo-work-heading {
		color: #fff;
		position: absolute;
		top: 0;

		svg {
			color: #d3af90;
			font-size: 64px;
		}

		p {
			text-transform: uppercase;
			font-weight: 300;
			font-size: 24px;
			color: #ccc;
		}
	}
	.demo-work-tabs {
		background-image: url('../../assets/work-bg.jpg');
		background-position: center center;
		width: 220px;

		.demo-work-nav {
			width: 80%;
			right: 0;
			position: absolute;
			height: auto !important;
			bottom: 10%;
			padding: 0;

			li {
				border-left: 5px #2990CB solid;
				margin: .5em 0;
				font-size: 20px;
				font-weight: 300;

				a {
					transition: all 0.15s ease-in 0s;
					color: #fff;
					border-radius: 0;
					line-height: .5em;

					&.active {
						background: rgba(255, 255, 255, 0.1);
						line-height: 1.8em;
					}
				}
			}
		}
	}
}
</style>

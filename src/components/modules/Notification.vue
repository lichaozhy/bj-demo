<template>
	<b-card no-body class="demo-notification">
		<b-modal id="modal-center" centered
			ok-only
			ok-title="确认"
			size="lg"
			:title="currentNote.title">
			<p class="my-4">{{currentNote.content}}</p>
		</b-modal>

		<b-tabs card large>
			<b-tab>
				<template slot="title">
					<a>消息提醒</a>
					<b-badge pill variant="danger">1</b-badge>
				</template>
				<ul>
					<li v-for="(msg, index) in notification"
						v-b-modal.modal-center
						:key="index">
						<p class="demo-title mb-1"
							:title="msg.title"><a href="#">{{msg.title}}</a></p>
						<p>{{msg.author}} - {{msg.createAt}}</p>
					</li>
				</ul>
			</b-tab>
			<b-tab>
				<template slot="title">
					<a>通知通告</a>
					<b-badge pill variant="danger">2</b-badge>
				</template>
				<ul>
					<li v-for="(msg, index) in notification"
						v-b-modal.modal-center
						:key="index">
						<p class="demo-title mb-1"
							:title="msg.title"><a href="#">{{msg.title}}</a></p>
						<p>{{msg.author}} - {{msg.createAt}}</p>
					</li>
				</ul>
			</b-tab>
		</b-tabs>
	</b-card>
</template>

<script>
function notificationMock() {
	return new Array(4).fill({
		title: '党组会学习贯彻习近平总书记在纪念马克思诞辰200周年大会上重要讲话精神',
		author: '张小四',
		createAt: '2018/04/18 12:45',
		content: '学习贯彻习近平总书记在纪念马克思诞辰200周年大会上重要讲话精神。要深入学习贯彻习近平总书记重要讲话精神，筑牢马克思主义思想根基，学精悟透用好马克思主义理论，坚定不移以习近平新时代中国特色社会主义思想统领检察工作。'
	});
}

export default {
	data() {
		const notification = notificationMock();
		return {
			notification,
			currentNote: notification[0],
		};
	}
}
</script>

<style lang="less">
.demo-notification {
	ul {
		padding-left: 0;
	}
	li {
		list-style: none;
		margin-left: 0;
	}
}

.demo-title {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 450px;
}
</style>

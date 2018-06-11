<template>
	<b-card class="demo-warning">
		<h4 slot="header">
			<font-awesome-icon icon="exclamation-triangle" /><a
				class="mx-3">预警信息</a><em>warning</em>
		</h4>
		<b-table :items="warningList"></b-table>
	</b-card>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

function warningMock() {
	return new Array(5).fill({
		startAt: '2018-05-05',
		source: '档案管理',
		title: '中国干预澳大利亚内政？这位澳前外长替中国说了句公道话'
	});
}

export default {
	components: {
		FontAwesomeIcon
	},
	data() {
		return {
			warningList: warningMock()
		}
	}
}
</script>

<style lang="less">
.demo-warning {
	em {
		text-transform: uppercase;
		font-weight: 300;
		font-size: 80%;
	}
}
</style>

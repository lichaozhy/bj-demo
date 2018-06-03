<template>
	
	<b-card class="demo-statistics">
		<h4 slot="header">
			<font-awesome-icon icon="chart-bar" /><a
				class="mx-3">我的统计</a><em>statistics</em>
		</h4>
		<b-tabs>
			<b-tab title="今天" active>
				<demo-chart :options="options" />
			</b-tab>
			<b-tab title="本周" >
				<demo-chart :options="options" />
			</b-tab>
			<b-tab title="本月">
				<demo-chart :options="options" />
			</b-tab>
			<b-tab title="本年">
				<demo-chart :options="options" />
			</b-tab>
		</b-tabs>
	</b-card>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import DemoChart from '../utils/Chart.vue';

const defaultOptions = {
	chart: {
			type: 'column'
	},
	title: {
			text: '工作统计示例'
	},
	xAxis: {
			categories: [
					'一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'
			],
			crosshair: true
	},
	yAxis: {
			min: 0,
			title: {
					text: '某维度'
			}
	},
	tooltip: {
			// head + 每个 point + footer 拼接成完整的 table
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
			'<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true
	},
	plotOptions: {
			column: {
					borderWidth: 0
			}
	}
}

export default {
	components: {
		FontAwesomeIcon,
		DemoChart
	},
	computed: {
		options() {
			return Object.assign({}, defaultOptions, {
				series: this.example
			})
		}
	},
	data() {
		return {
			example: [{
				name: '示例1',
				data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
			}, {
				name: '示例2',
				data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
			}, {
				name: '示例3',
				data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
			}, {
				name: '示例4',
				data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
			}]
		};
	}
}
</script>

<style lang="less">

.demo-statistics {
	em {
		text-transform: uppercase;
		font-weight: 300;
		font-size: 80%;
	}
}
</style>

<template>
	<div class="demo-framework">
		<b-row class="demo-framework-row"
			v-for="(row, rowIndex) in structure"
			:key="rowIndex">
			<b-col
				@stop="exchange()"
				@move="setSource(rowIndex, colIndex)"
				@appointed="setDestination(rowIndex, colIndex)"
				class="demo-framework-col mb-4"
				:class="{pointed: dst.row === rowIndex && dst.col === colIndex}"
				v-for="(component, colIndex) in row"
				:key="colIndex">
				<demo-draggable
					:component="component"
					:is-active="isSetting" />
			</b-col>
		</b-row>
	</div>
</template>

<script>
import Vue from 'vue';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import DemoDraggable from './Draggable.vue';

import DemoNotification from '../modules/Notification.vue';
import DemoShortcut from '../modules/Shortcut.vue';
import DemoStatistics from '../modules/Statistics.vue';
import DemoWarning from '../modules/Warning.vue';
import DemoWork from '../modules/Work.vue';

export default {
	components: {
		FontAwesomeIcon,
		DemoDraggable
	},
	methods: {
		exchange() {
			const srcComponent =
				this.structure[this.src.row][this.src.col];
			const dstComponent =
				this.structure[this.dst.row][this.dst.col];

			Vue.set(this.structure[this.src.row], this.src.col, dstComponent);
			Vue.set(this.structure[this.dst.row], this.dst.col, srcComponent);

			this.reset();
		},
		setSource(row, col) {
			this.src.row = row;
			this.src.col = col;
		},
		setDestination(row, col) {
			this.dst.row = row;
			this.dst.col = col;
		},
		reset() {
			this.src.row = null;
			this.src.col = null;
			this.dst.row = null;
			this.dst.col = null;
		}
	},
	data() {
		return {
			src: {
				row: null,
				col: null
			},
			dst: {
				row: null,
				col: null
			},
			isSetting: true,
			structure: [
				[DemoShortcut, DemoNotification],
				[DemoWork],
				[DemoStatistics],
				[DemoWarning],
				[DemoStatistics, DemoWarning],
				[DemoWork],
			]
		}
	}
}
</script>

<style lang="less">
.demo-framework-col {
	height: 400px;
	&.pointed {
		background: red;
	}
}
</style>


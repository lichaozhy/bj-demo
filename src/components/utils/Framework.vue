<template>
	<div class="demo-framework">
		<b-row class="demo-framework-row"
			v-for="(row, rowIndex) in structure"
			:key="rowIndex">
			<b-button-group
				vertical
				size="sm"
				v-if="isSetting"
				class="demo-draggable-panel-row mb-5">
				<b-button
					@click="insertRow(rowIndex)">
					<font-awesome-icon
						fixed-width
						icon="plus" />
				</b-button>
				<b-button
					variant="danger"
					@click="removeRow(rowIndex)">
					<font-awesome-icon
						fixed-width
						icon="times" />
				</b-button>
				<b-button
					@click="insertRow(rowIndex+1)">
					<font-awesome-icon
						fixed-width
						icon="plus" />
				</b-button>
			</b-button-group>
			<b-col
				@stop="exchange()"
				@move="setSource(rowIndex, colIndex)"
				@appointed="setDestination(rowIndex, colIndex)"
				class="demo-framework-col mb-4"
				:class="{pointed: dst.row === rowIndex && dst.col === colIndex}"
				v-for="(component, colIndex) in row"
				:key="colIndex">
				<b-input-group
					size="sm"
					v-if="isSetting"
					class="demo-draggable-panel mb-1 mr-3">
					<b-form-select
						v-model="structure[rowIndex][colIndex]"
						:options="options" />
					<b-input-group-append>
						<b-button
							@click="removeCol(rowIndex, colIndex)"
							variant="danger">
							<font-awesome-icon
								fixed-width
								icon="times" />
						</b-button>
						<b-button
							@click="splitRow(rowIndex)"
							v-if="row.length===1">
							<font-awesome-icon
								fixed-width
								icon="columns" />
						</b-button>
					</b-input-group-append>
				</b-input-group>
				<demo-draggable
					:component="component||DemoBlankModule"
					:is-active="isSetting" />
			</b-col>
		</b-row>

		<b-row
			align-h="center"
			v-if="isSetting"
			class="mb-5">
			<b-col cols="3">
				<b-button
					@click="insertRow(structure.length)"
					class="w-100"><font-awesome-icon icon="plus" />
					增加一行</b-button>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import Vue from 'vue';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import DemoDraggable from './Draggable.vue';

import DemoBlankModule from './BlankModule.vue';
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
			if (this.dst.row === null) {
				return this.reset();
			}
			
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
		},
		insertRow(rowIndex) {
			this.structure.splice(rowIndex, 0, [null]);
		},
		splitRow(rowIndex) {
			this.structure[rowIndex].push(null);
		},
		removeRow(rowIndex) {
			this.structure.splice(rowIndex, 1);
		},
		removeCol(rowIndex, colIndex) {
			const row = this.structure[rowIndex];
			row.splice(colIndex, 1);

			if (!row.length) {
				this.removeRow(rowIndex);
			}
		}
	},
	data() {
		return {
			options: [
				{
					value: null,
					text: '无板块'
				},
				{
					value: DemoShortcut,
					text: '快捷入口'
				},
				{
					value: DemoNotification,
					text: '通知通告'
				},
				{
					value: DemoWork,
					text: '待办工作'
				},
				{
					value: DemoWarning,
					text: '预警信息'
				},
				{
					value: DemoStatistics,
					text: '我的统计'
				},
			],
			DemoBlankModule,
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
				[null],
				[DemoWork],
			]
		}
	}
}
</script>

<style lang="less">
.demo-framework-row {
	position: relative;

	.demo-draggable-panel-row {
		position: absolute;
		right: 100%;
		bottom: 0;
	}
}
.demo-framework-col {
	height: 400px;
	&.pointed {
		background: red;
	}

	.demo-draggable-panel {
		position: absolute;
		bottom: 100%;
		right: 0;
		width: 240px;
	}
}
</style>


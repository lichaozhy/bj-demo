<template>
	<div class="demo-draggable-handler w-100"
		:class="{
			'active': isDragging
		}"
		:style="{
			top: `${offset.top}px`,
			left: `${offset.left}px`,
		}">
		<component
			class="demo-h-100"
			:is="component" />
		<div
			@mouseup="dragStop()"
			@mousemove="dragMove($event)"
			@mousedown="dragStart($event)"
			class="demo-draggable-mask h-100 w-100 position-absolute"
			v-if="isActive">
			<div class="demo-draggable-top"
				v-if="isDragging"></div>
		</div>

	</div>
</template>

<script>
export default {
	props: [
		'component', 'isActive'
	],
	computed: {
		offset() {
			return {
				top: this.currentPoint.top - this.startPoint.top,
				left: this.currentPoint.left - this.startPoint.left
			};
		}
	},
	methods: {
		dragStart() {
			this.isDragging = true;
			this.startToPoint();

			this.$el.dispatchEvent(new Event('move', {
				bubbles: true,
				cancelable: true
			}));
		},
		dragMove({ clientX, clientY }) {
			if (!this.isDragging) {
				this.startPoint.top = clientY;
				this.startPoint.left = clientX;
			}
			
			this.currentPoint.top = clientY;
			this.currentPoint.left = clientX;

		},
		dragStop() {
			this.isDragging = false;
			this.resetPoint();
			
			this.elementAppointed.dispatchEvent(new Event('stop', {
				bubbles: true,
				cancelable: true
			}));
		},
		resetPoint() {
			this.movingComponent = null;
			this.currentPoint.top = 0;
			this.currentPoint.left = 0;
			this.startPoint.top = 0;
			this.startPoint.left = 0;

			clearInterval(this.pointingTimer);
			this.pointingTimer = null;
			this.elementAppointed = this.$el;
		},
		startToPoint() {
			this.pointingTimer = setInterval(() => {
				const { left, top } = this.currentPoint;
				this.$el.style.visibility = 'hidden';

				this.elementAppointed = document.elementFromPoint(left, top);
				this.elementAppointed.dispatchEvent(new Event('appointed', {
					bubbles: true,
					cancelable: true
				}));

				this.$el.style.visibility = 'visible';
			}, 500);
		}
	},
	data() {
		return {
			elementAppointed: this.$el,
			pointingTimer: null,
			isDragging: false,
			startPoint: {
				top: 0,
				left: 0
			},
			currentPoint: {
				top: 0,
				left: 0
			}
		}
	}
}
</script>

<style lang="less">
.demo-h-100 {
	height: 100%;
}

.demo-draggable-handler {
	height: 100%;
	position: relative;
	overflow: hidden;

	&.active {
		z-index: 100;
	}
}

.demo-draggable-mask {
	background: rgba(0, 0, 0, 0.192);
	cursor: move;
	top: 0;
	left: 0;
}

.demo-draggable-top {
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
}
</style>

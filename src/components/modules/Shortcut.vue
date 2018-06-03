<template>
	<b-card class="demo-shortcut">
		<h4 slot="header">
			<font-awesome-icon icon="map-signs" /><a
				class="mx-3">快捷入口</a><em>shortcut</em>
			<b-button class="float-right"><font-awesome-icon
					icon="plus" /></b-button>
		</h4>
		<draggable
			class="row text-center"
			v-model="myArray"
			:options="{group:'people'}"
			@start="drag=true"
			@end="drag=false">
			<b-col cols="3"
				v-for="(element, index) in myArray"
				:key="index"><font-awesome-icon
					class="demo-icon"
					:icon="element.icon" />
					<p>{{element.name}}</p></b-col>
		</draggable>
	</b-card>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import Draggable from 'vuedraggable';

export default {
	components: {
		FontAwesomeIcon,
		Draggable
	},
	data() {
		return {
			myArray: [
				{
					name: 'aaaaa',
					icon: 'handshake'
				},
				{
					name: 'bell',
					icon: 'camera-retro'
				},
				{
					name: 'aaaaa',
					icon: 'bell'
				},
				{
					name: 'bbbbb',
					icon: 'cogs'
				},
				{
					name: 'aaaaa',
					icon: 'diagnoses'
				},
				{
					name: 'aaaaa',
					icon: 'exclamation-circle'
				},
				{
					name: 'aaaaa',
					icon: 'fighter-jet'
				},
			]
		}
	}
}
</script>

<style lang="less">

.demo-shortcut {
	.demo-icon {
		font-size: 60px;
	}

	em {
		text-transform: uppercase;
		font-weight: 300;
		font-size: 80%;
	}
}
</style>

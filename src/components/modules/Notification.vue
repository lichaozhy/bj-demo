<template>
	<b-card no-body>
		<b-tabs card large>
			<b-tab>
				<template slot="title">
					<a>消息提醒</a>
					<b-badge pill variant="danger">1</b-badge>
				</template>
				<b-table striped hover></b-table>
			</b-tab>
			<b-tab>
				<template slot="title">
					<a>通知通告</a>
					<b-badge pill variant="danger">2</b-badge>
				</template>
				<b-table striped hover></b-table>
			</b-tab>
		</b-tabs>
	</b-card>
</template>

<script>
export default {
	
}
</script>

<style lang="less">

</style>

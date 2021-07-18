<template>
	<h1>{{ message }}</h1>
	<h2>{{ message }}</h2>
</template>

<style lang="scss">
h1 {
	color: red;
	+ h2 {
		color: blue;
	}
}
</style>

<script>
export default {
	data() {
		return {
			"message": "Hello World"
		}
	}
}
</script>

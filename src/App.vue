<script setup>
import { setFontSize } from './utils/rem';
// 自动赋值font-size
setFontSize();
window.addEventListener('resize', setFontSize, false);
</script>
<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>
<style scoped>
#app {
	width: 100%;
	height: 100vh;
}
</style>

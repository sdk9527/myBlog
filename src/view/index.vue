<template>
	<!-- 主要结构框架 -->
	<div class="common-layout">
		<el-container>
			<el-header class="header">
				<myHeader></myHeader>
			</el-header>
			<el-main class="main">
				<router-view></router-view>
			</el-main>
			<el-footer class="footer"> Footer content </el-footer>
		</el-container>
	</div>
</template>

<script setup>
import myHeader from './header.vue';
</script>

<style lang="scss">
.common-layout {
	.el-header {
		position: fixed;
		border-bottom: 1px solid #e8e9e7;
		background-color: #ffffff;
		height: 3.8rem;
		width: 100%;
		z-index: 999;
		overflow: hidden;
	}
	.main {
		margin-top: 3.8rem;
		background-color: #f2f3f5;
	}
}
</style>

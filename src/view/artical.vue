<template>
	<div class="art-container">
		<div class="left-content">
			<div class="art-header">
				<div class="title">文章title</div>
				<div class="pub-time">时间</div>
			</div>
			<div class="content"></div>
			<div class="read-more"></div>
			<div class="foot-info"></div>
		</div>
		<div class="right-content"></div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.art-container {
	width: 70rem;
	border: 1px solid red;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: space-between;
	.left-content {
		width: calc(100% - 10rem);
		margin: 1rem;
		.art-header {
			height: 2rem;
			display: flex;
			justify-content: space-between;
			border-bottom: 2px solid #e8e9e7;
			.title {
			}
			.time {
			}
		}
	}
	.right-content {
		width: 10rem;
		margin-left: 2rem;
		background-color: aquamarine;
	}
}
</style>

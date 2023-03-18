<template>
	<!-- 主要结构框架 -->
	<div class="box">
		<div class="container">
			<div
				v-for="item in list"
				:key="item.id"
				class="navi-box"
				@click="showPage(item)"
			>
				{{ item.name }}
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const route = useRouter();
const list = [
	{
		id: 0,
		name: '首页',
	},
	{
		id: 1,
		name: '博客',
	},
	{
		id: 2,
		name: '日志',
	},
	{
		id: 3,
		name: '留言',
	},
	{
		id: 4,
		name: '友链',
	},
];
const showPage = (item) => {
	console.log(item.name);
	switch (item.name) {
		case '首页':
			route.push('/home');
			break;
		case '博客':
			route.push('/layout/articles');
			break;
		case '日志':
			route.push('/layout/diary');
			break;
		case '留言':
			route.push('/layout/message');
			break;
	}
};
</script>

<style lang="scss" scoped>
.box {
	height: 100%;
	.container {
		display: flex;
		justify-content: end;
		align-items: center;
		height: 100%;
		.navi-box {
			height: 100%;
			font-size: 1.2rem;
			line-height: 3.8rem;
			width: 5rem;
			text-align: center;
			&:hover {
				border-bottom: solid 2px #409eff;
				color: #409eff;
			}
		}
	}
}
</style>

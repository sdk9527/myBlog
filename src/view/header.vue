<template>
	<!-- 主要结构框架 -->
	<div class="box">
		<div class="container">
			<div
				v-for="item in list"
				:key="item.id"
				class="navi-box"
				:class="{ active: item.label === activeNav }"
				@click="showPage(item)"
			>
				{{ item.name }}
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
let activeNav = ref('bk');
const route = useRouter();
const list = [
	{
		id: 0,
		name: '首页',
		label: 'sy',
	},
	{
		id: 1,
		name: '博客',
		label: 'bk',
	},
	{
		id: 2,
		name: '日志',
		label: 'rz',
	},
	{
		id: 3,
		name: '留言',
		label: 'ly',
	},
	{
		id: 4,
		name: '友链',
		label: 'yl',
	},
];
const showPage = (item) => {
	console.log(item.name);
	switch (item.name) {
		case '首页':
			activeNav.value = 'sy';
			route.push('/home');
			break;
		case '博客':
			activeNav.value = 'bk';
			route.push('/layout/articles');
			break;
		case '日志':
			activeNav.value = 'rz';
			route.push('/layout/diary');
			break;
		case '留言':
			activeNav.value = 'ly';
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
		.active {
			border-bottom: solid 2px #409eff;
			color: #409eff;
		}
	}
}
</style>

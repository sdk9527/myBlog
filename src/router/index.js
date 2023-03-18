// vue-router3 创建路由写法
import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/home',
		component: () => import('../view/home.vue'),
	},
	{
		path: '/layout',
		component: () => import('../view/index.vue'),
		children: [
			{
				path: 'articles',
				component: () => import('../view/artical.vue'),
			},
			{
				path: 'message',
				component: () => import('../view/message.vue'),
			},
			{
				path: 'diary',
				component: () => import('../view/diary.vue'),
			},
		],
	},
];
const router = createRouter({
	// hash模式
	history: createWebHashHistory(),
	routes,
});
export default router;

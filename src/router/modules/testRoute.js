// 测试模块
export default [
    {
        path: '/test',
        component: () => import(/* webpackChunkName: "login" */ '@/components/pages/TestPage.vue'),
        meta: { title: '登录' }
    }
];

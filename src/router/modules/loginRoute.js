// 登录模块
export default [
    {
        path: '/login',
        component: () => import(/* webpackChunkName: "login" */ '@/components/pages/LoginPage'),
        meta: { title: '登录' }
    }
];

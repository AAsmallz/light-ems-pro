import Vue from 'vue';
import Router from 'vue-router';

import autoRoutes from './routes';
// 安装路由
Vue.use(Router);
// 创建路由实例，并导出
const router = new Router({
    routes: [...autoRoutes]
});

// 前置路由守卫
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    } else {
        document.title = '默认title';
    }
    next(true);
});

export default router;

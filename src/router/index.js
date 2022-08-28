import Vue from 'vue';
import Router from 'vue-router';

import autoRoutes from './routes';
// 安装路由
Vue.use(Router);
// 创建路由实例，并导出
export default new Router({
    routes: [...autoRoutes]
});

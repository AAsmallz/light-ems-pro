import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';

// 全局引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import paginationTextConfig from '@/utils/paginationTextConfig';

// 引入mock接口初始化文件
import '@/mock/index';

Vue.use(ElementUI, { locale: { ...zhLocale, ...paginationTextConfig } });

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');

import Vue from 'vue';
import Vuex from 'vuex';
// 引入store模块
import userStore from './modules/userStore';
// 安装Vuex
Vue.use(Vuex);
// 创建Vuex.store实例
export default new Vuex.Store({
    state: {},
    actions: {},
    mutations: {},
    modules: {
        userStore
    }
});

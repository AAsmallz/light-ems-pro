// 登录用户信息的store模块
export default {
    namespaced: true,
    state: {
        username: 'linda',
        password: '123456'
    },
    actions: {},
    mutations: {
        updateUsername(state, obj) {
            state.username = obj.username;
            state.password = obj.password;
        }
    }
};

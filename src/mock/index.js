import Mock from 'mockjs';

// 登录校验接口
Mock.mock('/api/login/verify', 'post', function (options) {
    const data = JSON.parse(options.body);
    if (data.username === 'admin') {
        if (data.password === '123456') {
            return {
                code: '200',
                msg: '登陆成功',
                data: {
                    token: 'YmFja2VuZDpiYWNrZW5k'
                }
            };
        }
    } else {
        return {
            code: '400',
            msg: '用户名或密码错误，请重新登录'
        };
    }
});

// 日志管理列表数据模拟
const data = Mock.mock({
    'list|10': [
        {
            timestamp: "@date('yyyy-MM-dd HH:mm:ss')",
            user: '@name',
            userName: '@cname',
            module: '用户登录',
            ip: '@url',
            operation: '@cparagraph(1)'
        }
    ]
});

Mock.mock('/api/logManage/list', 'post', function (options) {
    console.log(options);
    return {
        code: '200',
        msg: '请求成功',
        data
    };
});

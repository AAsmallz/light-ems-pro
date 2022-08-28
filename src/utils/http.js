// 1. 配置axios

// 引入axios模块
import axios from 'axios';

// axios请求配置, 创建axios实例
const http = axios.create({
    timeout: 50000, // 设置请求最大时长
    withCredentials: true, // 自动携带cookie
    baseURL: process.env.VUE_APP_MOCK_BASEURL, // 接口地址
    headers: {
        // 对即将被发送的自定义请求头
        'Content-Type': 'application/json;charset=UTF-8'
    },
    validateStatus(status) {
        // 定义对于给定的HTTP 响应状态码是 resolve 或 reject
        return status >= 200 && status < 300;
    }
});

// 请求拦截
http.interceptors.request.use(
    (config) => {
        // 头部如需带上token,在此处配置
        // const token = localStorage.getItem('token');
        // if (token) {
        //     // 如果token存在，就需要在请求头加上 'Bearer ' + token
        //     // 其中 'Bearer ' 前缀是固定写法，可以看作是一种token规定，不能省略
        //     config.headers.authorization = 'Bearer ' + token;
        // }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 响应拦截
http.interceptors.response.use(
    (res) => {
        if (res.status === 200) {
            return res.data;
        }
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 2、封装请求方式
// @param url 接口地址
// @param data 携带参数
// @param file 上传文件对象
// @param auth 是否携带token

// get请求
export function get(url, data) {
    return http.get(url, data);
}
// post请求
export function post(url, data) {
    return http.post(url, data);
}
// put请求
export function put(url, data) {
    return http.put(url, data);
}
// delete 请求
export function del(url, data) {
    return http.delete(url, data);
}
// upload 请求
export function uploader(url, file) {
    let params = new FormData();
    params.append('file', file);
    return http.post(url, params);
}

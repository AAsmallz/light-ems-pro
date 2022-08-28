// 自动归并路由模块
const modulesFiles = require.context('../modules', false, /\.js$/);

const autoRoutes = modulesFiles.keys().reduce((routes, modulePath) => {
    const routeValue = modulesFiles(modulePath).default;
    // 判断路由模块是否为数组，数组使用concat进行拼接，对象使用push推入
    if (Array.isArray(routeValue)) {
        routes = routes.concat(routeValue);
    } else {
        routes.push(routeValue);
    }
    return routes;
}, []);
// 导出路由模块表
export default autoRoutes;

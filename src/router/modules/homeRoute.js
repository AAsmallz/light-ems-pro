// 首页模块+业务功能模块
export default [
    // 重定向到自定义的首页
    {
        path: '/',
        redirect: '/logManage'
    },
    {
        path: '/',
        component: () => import(/* webpackChunkName: "home" */ '@/components/pages/HomePage'),
        meta: { title: '系统框架' },
        children: [
            // 首页
            {
                path: '/xzDashboardHome',
                component: () => import('@/components/business/xzDashboardHome.vue'),
                meta: { title: '首页' }
            },
            // 用户管理
            {
                path: '/accountManage',
                component: () => import('@/components/business/accountManage/accountManage.vue'),
                meta: { title: '账号管理' }
            },
            {
                path: '/roleManage',
                component: () => import('@/components/business/accountManage/roleManage.vue'),
                meta: { title: '岗位角色管理' }
            },
            {
                path: '/organizationManage',
                component: () => import('@/components/business/accountManage/organizationManage.vue'),
                meta: { title: '组织结构管理' }
            },
            // 系统管理
            {
                path: '/dataBackupRecovery',
                component: () => import('@/components/business/systemManage/dataBackupRecovery.vue'),
                meta: { title: '数据备份恢复' }
            },
            {
                path: '/carbonEmission',
                component: () => import('@/components/business/systemManage/carbonEmission.vue'),
                meta: { title: '碳排放源与转化系数' }
            },
            {
                path: '/logManage',
                component: () => import('@/components/business/systemManage/logManage.vue'),
                meta: { title: '日志管理' }
            }
        ]
    }
];

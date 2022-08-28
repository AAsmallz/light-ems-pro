<template>
    <div class="sidebar">
        <div class="title" :class="collapse ? 'min-width' : 'max-width'">
            <img class="title-logo" src="../../assets/logo.jpeg" alt="" />
            <div class="title-text">EMS后台系统</div>
        </div>
        <el-menu
            class="new-el-menu--sidebar"
            :default-active="curRouteIndex"
            :collapse="collapse"
            background-color="#004e9a"
            text-color="#93a7d4"
            active-text-color="#ffffff"
            unique-opened
            router
        >
            <!-- 静态菜单 -->
            <el-menu-item index="xzDashboardHome">
                <i class="el-icon-s-home" style="color: #fff"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="accountManage">
                <template slot="title">
                    <i class="el-icon-place" style="color: #fff"></i>
                    <span>用户管理</span>
                </template>
                <el-menu-item index="accountManage">账号管理</el-menu-item>
                <el-menu-item index="roleManage">岗位角色管理</el-menu-item>
                <el-menu-item index="organizationManage">组织结构管理</el-menu-item>
            </el-submenu>
            <el-submenu index="dataBackupRecovery">
                <template slot="title">
                    <i class="el-icon-coin" style="color: #fff"></i>
                    <span>系统管理</span>
                </template>
                <el-menu-item index="dataBackupRecovery">数据备份恢复</el-menu-item>
                <el-menu-item index="carbonEmission">碳排放源与转化系数</el-menu-item>
                <el-menu-item index="logManage">日志管理</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
import bus from '@/utils/eventBus';
export default {
    name: 'xzSideBar',
    data() {
        return {
            collapse: false
        };
    },
    computed: {
        curRouteIndex() {
            console.log('=', this.$route.path.replace('/', ''));
            return this.$route.path.replace('/', '');
        }
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', (status) => {
            this.collapse = status;
            bus.$emit('collapseStatus', status);
        });
    }
};
</script>

<style lang="scss" scoped>
.sidebar {
    display: block;
    // 绝对定位 继承父元素100%高度
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: #004e9a;
    .title {
        width: 220px;
        height: 60px;
        background: #014d9c;
        color: #fff;
        display: flex;
        flex-wrap: nowrap; //解决折叠文字换行问题
        justify-content: flex-start;
        align-items: center;
        overflow: hidden;
        &-logo {
            width: 32px;
            height: 32px;
            margin-left: 20px;
        }
        &-text {
            margin-left: 15px;
        }
    }
    .min-width {
        width: 64px;
    }
    .max-width {
        width: 220px;
    }
}
// 解决折叠中宽度变化出现滚动条的问题
.sidebar::-webkit-scrollbar {
    width: 0;
}
// 解决侧边栏折叠卡顿的问题
.new-el-menu--sidebar:not(.el-menu--collapse) {
    width: 220px;
}
</style>

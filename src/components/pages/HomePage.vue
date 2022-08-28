<template>
    <div class="wrapper">
        <xz-side-bar></xz-side-bar>
        <div class="xz-container" :class="{ 'container-collapse': collapse }">
            <xz-header></xz-header>
            <div class="xz-main">
                <div class="container">
                    <transition name="move" mode="out-in">
                        <keep-alive :include="cache">
                            <router-view></router-view>
                        </keep-alive>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import xzSideBar from '@/components/business/xzSideBar';
import xzHeader from '@/components/business/xzHeader';
import bus from '@/utils/eventBus';
export default {
    data() {
        return {
            collapse: false,
            // 需要缓存的组件，一般都是列表类，防止每次都请求 很麻烦,注意：缓存的组件都要在自己的页面上加 name,否则不会缓存
            cache: ['accountManage', 'logManage']
        };
    },
    components: {
        xzSideBar,
        xzHeader
    },
    computed: {},
    methods: {},
    created() {
        bus.$on('collapseStatus', (status) => {
            this.collapse = status;
        });
    }
};
</script>

<style lang="scss" scoped></style>

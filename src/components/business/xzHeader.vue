<template>
    <div class="xz-header">
        <!-- 折叠按钮 -->
        <div class="collapse-btn" @click="collapseChange">
            <i v-if="!collapse" class="el-icon-s-fold"></i>
            <i v-else class="el-icon-s-unfold"></i>
        </div>
    </div>
</template>

<script>
import bus from '@/utils/eventBus';
export default {
    name: 'xzHead',
    data() {
        return {
            collapse: false
        };
    },
    methods: {
        // 侧边栏折叠
        collapseChange() {
            this.collapse = !this.collapse;
            bus.$emit('collapse', this.collapse);
        }
    }
};
</script>

<style lang="scss" scoped>
.collapse-btn {
    padding: 0 21px;
    cursor: pointer;
    font-size: 28px;
}
</style>

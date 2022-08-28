<template>
    <div>
        <p>动画属性transition的测试使用</p>
        <div class="box box1"></div>
        <transition name="fade">
            <div v-if="flag" class="box2"></div>
        </transition>
        <el-button type="success" size="small" @click="triggerAnimation">触发第二个box的动画</el-button>
        <br />
        <p>vuex测试使用</p>
        username: {{ username }}
        <br />
        password: {{ password }}
        <br />
        <el-button type="success" size="small" @click="updateUsername(obj)">触发vuex的mutation</el-button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'TestPage',
    data() {
        return {
            obj: {
                username: 'Bob',
                password: '456789'
            },
            flag: false
        };
    },
    computed: {
        ...mapState('userStore', ['username', 'password'])
    },
    methods: {
        ...mapMutations('userStore', ['updateUsername']),
        triggerAnimation() {
            this.flag = !this.flag;
        }
    }
};
</script>

<style lang="scss" scoped>
.box1 {
    width: 300px;
    height: 300px;
    background-color: #42b983;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}

.box1:hover {
    margin-left: 100px;
}

.box2 {
    width: 200px;
    height: 200px;
    background-color: #1280f1;
}

// transition内置组件使用 vue2
.fade-enter {
    width: 0;
    height: 0;
    transform: rotate(360deg); //显示时只能放在enter里面(vue2才有的bug)
}
.fade-enter-active {
    transition: all 1s ease;
}
.fade-enter-to {
    width: 200px;
    height: 200px;
}

.fade-leave {
    width: 200px;
    height: 200px;
}
.fade-leave-active {
    transform: rotate(360deg); //隐藏时只能放在active里面(vue2才有的bug)
    transition: all 1s ease;
}
.fade-leave-to {
    width: 0;
    height: 0;
}
</style>

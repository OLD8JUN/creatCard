import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: { // 存放数据 和data类似
        information:null,
        image:null
    },
    mutations: { // 用来修改state和getters里面的数据
        setImage(state,newval){
            state.image=newval
        },
        setInformation(state,newval){
            state.information=newval
        }
    },
    getters: { // 相当于计算属性
    },
    actions: { // vuex中用于发起异步请求
    },
    modules: {// 拆分模块
    }
})

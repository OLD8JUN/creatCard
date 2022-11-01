import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export const routes = [
    {
        path:'/',
        component:()=>import('@/views/index/index')
    },
    {
        path:'/cardCreatind',
        component:()=>import('@/views/cardCreating/index')
    },
    {
        path:'/cardReplacement',
        component:()=>import('@/views/cardReplacement/index')
    }
]



const router = new VueRouter({
    routes,
    mode: 'history',
    // linkActiveClass: 'is-active',//当前激活的路由的class名字
    scrollBehavior(to, from, savePotion) {
        if (savePotion) {
            return savePotion
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})

export default router

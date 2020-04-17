import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import SimpleDemo from '../pages/simpledemo/SimpleDemo.vue'
import home from '../pages/home/home.vue'
import LifeCycle from "../pages/lifecycle/VueLifecycle.vue";
import Template from "../pages/template/Template.vue"
import CusComponent from "@/pages/cuscomponent/CusComponent.vue";


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'home',
        component: home,
        meta: {
            title: '首页'
        }
    }, {
        path: '/simpledemo',
        name: 'SimpleDemo',
        component: SimpleDemo,
        meta: {
            title: 'simple demo'
        }
    }, {
        path: '/lifeCycle',
        name: 'lifeCycle',
        component: LifeCycle,
        meta: {
            title: '生命周期'
        }
    }, {
        path: '/template',
        name: 'template',
        component: Template,
        meta: {
            title: '模板'
        }
    }, {
        path: '/cuscomponent',
        name: 'cuscomponent',
        component: CusComponent,
        meta: {
            title: '自定义组件'
        }
    }
    // ,
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import SimpleDemo from '../pages/simpledemo/SimpleDemo.vue'
import home from '../pages/home/home.vue'
import LifeCycle from "../pages/lifecycle/VueLifecycle.vue";
import Template from "../pages/template/Template.vue"
import Template2 from "../pages/template2/Template2.vue"
import CusComponent from "@/pages/cuscomponent/CusComponent.vue";
import PullUpLoad from "@/pages/scroll/pullupload/PullUpLoad.vue";
import ScrollDemo from "@/pages/scroll/ScrollDemo.vue";
import UsePullSroller from "@/pages/scroll/userpullscroller/UsePullSroller.vue";
import SimpleJsBridge from "@/pages/jsbridge/simpleJsBridge/SimpleJsBridge.vue";
import OtherJsBridge from "@/pages/jsbridge/otherJsBridge/OtherJsBridge.vue";
import Computed from "@/pages/computed/Computed.vue";
import List from "@/pages/list/List.vue";
import Form from "@/pages/form/Form.vue";
import A from "@/pages/keepalive/a/A.vue";
import B from "@/pages/keepalive/b/B.vue";
import C from "@/pages/keepalive/c/C.vue";

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
        path: '/a',
        name: 'a',
        component: A,
        meta: {
            title: 'A'
        }
    },
    {
        path: '/b',
        name: 'b',
        component: B,
        meta: {
            title: 'B'
        }
    }, {
        path: '/c',
        name: 'c',
        component: C,
        meta: {
            title: 'C'
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
        path: '/template2',
        name: 'template2',
        component: Template2,
        meta: {
            title: '模板2'
        }
    }, {
        path: '/computed',
        name: 'computed',
        component: Computed,
        meta: {
            title: '计算属性'
        }
    }, {
        path: '/cuscomponent',
        name: 'cuscomponent',
        component: CusComponent,
        meta: {
            title: '自定义组件'
        }
    }, {
        path: '/scrolldemo',
        name: 'scrolldemo',
        component: ScrollDemo,
        meta: {
            title: '滚动组件'
        }
    }, {
        path: '/pullupload',
        name: 'pullupload',
        component: PullUpLoad,
        meta: {
            title: '下拉刷新基于betterScroll'
        }
    }, {
        path: '/usepullsroller',
        name: 'usepullsroller',
        component: UsePullSroller,
        meta: {
            title: '下拉刷新基于封装的pullsroller'
        }
    }, {
        path: '/simpleJsBridge',
        name: 'simpleJsBridge',
        component: SimpleJsBridge
    }, {
        path: '/otherJsBridge',
        name: 'otherJsBridge',
        component: OtherJsBridge
    }, {
        path: '/list',
        name: 'list',
        component: List
    }, {
        path: '/form',
        name: 'form',
        component: Form,
        meta: {
            title: '表单输入'
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

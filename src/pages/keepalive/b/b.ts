import {Component, Vue} from "vue-property-decorator";
import {Route} from "vue-router";
import store from "@/store/store";

Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteUpdate',
    'beforeRouteLeave'
]);

@Component
export default class B extends Vue {

    public onGoToCClick(): void {
        this.$router.push({name: "c"});
    }

    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    beforeRouteEnter(to: Route, from: Route, next: () => void): void {
        console.log("beforeRouteEnter");
        console.log(from);
        if(from.name=="a"){
            store.dispatch('addInclude', 'B');
        }
        next();
    }

    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    beforeRouteUpdate(to: Route, from: Route, next: () => void): void {
        console.log("beforeRouteUpdate");
        next();
    }

    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    beforeRouteLeave(to: Route, from: Route, next: () => void): void {
        console.log("beforeRouteLeave");
        if(to.name=="a"){
            store.dispatch("removeInclude",'B')
        }
        next();
    }

}
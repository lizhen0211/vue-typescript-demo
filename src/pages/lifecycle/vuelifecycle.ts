import {Component, Vue} from "vue-property-decorator";
//文档地址：https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90
@Component
export default class VueLifecycle extends Vue {

    public defaultVal: string = "我是一个默认值"

    beforeCreated() {
        console.log("beforeCreated")
    }


    created() {
        console.log("created")
    }


    beforeMount() {
        console.log("beforeMount")
    }

    mounted() {
        console.log("mounted")
    }

    beforeUpdate() {
        console.log("beforeUpdate")
    }

    updated() {
        console.log("updated")
    }

    activated() {
        console.log("activated")
    }

    deactivated() {
        console.log("deactivated")
    }

    beforeDestroy() {
        console.log("beforeDestroy")
    }

    updateVal(): void {
        this.defaultVal = "我已经被修改了"
    }
}
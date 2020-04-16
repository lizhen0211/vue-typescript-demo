import {Component, Vue} from "vue-property-decorator";

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

    beforeDestroy() {
        console.log("beforeDestroy")
    }

    updateVal(): void {
        this.defaultVal = "我已经被修改了"
    }
}
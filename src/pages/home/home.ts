import {Component, Vue} from "vue-property-decorator";
import router from "@/router";

@Component
export default class Home extends Vue {
    /**
     * 此处可以添加注释
     */
    onSimpleDemoClick(): void {
        this.$router.push({name: 'SimpleDemo'});
    }

    onLifeCycleClick(): void {
        this.$router.push({name: 'lifeCycle'});
    }

    onTemplateClick(): void {
        this.$router.push({name: 'template'});
    }

    onTemplate2Click(): void {
        this.$router.push({name: 'template2'});
    }

    onComputedClick(): void {
        this.$router.push({name: 'computed'});
    }

    onListClick(): void {
        this.$router.push({name: 'list'});
    }

    onFormClick(): void {
        this.$router.push({name: 'form'});
    }

    onCusComponentClick(): void {
        this.$router.push({name: 'cuscomponent'});
    }

    onScrollClick(): void {
        this.$router.push({name: 'scrolldemo'});
    }

    onKeepLiveClick():void{
        this.$router.push({path: 'a'});
    }
}
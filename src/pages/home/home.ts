import {Component, Vue} from "vue-property-decorator";
import router from "@/router";

@Component
export default class Home extends Vue {
    /**
     * 此处可以添加注释
     */
    onSimpleDemoClick(): void {
        this.$router.push({name: 'SimpleDemo'})
    }

    onLifeCycleClick(): void {
        this.$router.push({name: 'lifeCycle'})
    }

    onTemplateClick(): void {
        this.$router.push({name: 'template'})
    }
}
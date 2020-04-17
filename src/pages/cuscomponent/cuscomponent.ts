import {Component, Vue} from "vue-property-decorator";

import Hellopanel from "@/components/hello/HelloPanel.vue";

@Component({
    components: {'hello-panel': Hellopanel}
})
export default class Cuscomponent extends Vue {

    /**
     * 父组件数组
     */
    private listItem: Array<string> = ['传入值1', '传入值2', '传入值3'];

    /**
     * 父组件传入title字符串
     */
    private title: string = "我是父组件传进来的字符串";
}
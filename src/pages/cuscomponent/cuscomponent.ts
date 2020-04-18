import {Component, Vue} from "vue-property-decorator";

import Hellopanel from "@/components/prop/PropComponent.vue";

@Component({
    components: {'hello-panel': Hellopanel}
})
export default class Cuscomponent extends Vue {

    /**
     * 父组件数组
     */
    private listItem: Array<string> = ['array[1]', 'array[2]', 'array[3]'];

    /**
     * 父组件传入title字符串
     */
    private title: string = "我是父组件传进来的字符串";
}
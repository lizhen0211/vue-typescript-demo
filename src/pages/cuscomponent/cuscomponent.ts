import {Component, Vue} from "vue-property-decorator";

import Hellopanel from "@/components/prop/PropComponent.vue";

@Component({
    components: {'hello-panel': Hellopanel}
})
export default class Cuscomponent extends Vue {

    /**
     * 父组件数组
     */
    private pagelistItem: Array<string> = ['array[1]', 'array[2]', 'array[3]'];

    /**
     * 父组件传入一个字符串
     */
    private pagetitle: string = "传入一个字符串";

    /**
     * 父组件传入一个数字
     */
    private pagenum: number = 42;
}
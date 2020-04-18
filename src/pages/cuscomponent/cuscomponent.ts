import {Component, Vue} from "vue-property-decorator";

import Hellopanel from "@/components/prop/PropComponent.vue";
import {DefaultObject, ProModel} from "@/components/prop/prop-component";

@Component({
    components: {'hello-panel': Hellopanel}
})
export default class Cuscomponent extends Vue {

    /**
     * 父组件数组
     */
    private pageArray: Array<string> = ['array[1]', 'array[2]', 'array[3]'];

    /**
     * 父组件传入一个字符串
     */
    private pagetitle: string = "传入一个字符串";

    /**
     * 父组件传入一个数字
     */
    private pagenum: number = 42;

    /**
     * 传入一个boolean 值
     */
    private pagebool: boolean = true;

    /**
     * 传入一个对象
     */
    private pageObject!: ProModel;

    /**
     * 必填
     */
    private pageRequired: number = 123;

    /**
     * prop 默认对象
     */
    private pageDefaultObject: DefaultObject;

    private pageCusValidatorField: string;

    constructor() {
        super();
        let name: string = "myname";
        let datas: Array<string> = ["data1", "data2", "data3"];
        this.pageObject = new ProModel(name, datas);
        this.pageDefaultObject = new DefaultObject('姓名已经被覆盖', 22);
        //this.pageCusValidatorField = 'abc'//验证失败
        this.pageCusValidatorField = 'success'//验证成功
    }
}
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class PropComponent extends Vue {

    // https://cn.vuejs.org/v2/guide/components-props.html#%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81
    //单向数据流
    // 注意：
    // 在 JavaScript 中对象和数组是通过引用传入的，所以对于一个数组或对象类型的 prop 来说，在子组件中改变这个对象或数组本身将会影响到父组件的状态。

    private propString!: string;

    private propNum!: number;

    private propBool!: boolean;

    private propArray: string[];

    private propModel: ProModel;

    private propDefault: string;

    private propRequired: number;

    constructor() {
        super();
        this.propString = this.str;
        this.propNum = this.num;
        this.propBool = this.bool;
        this.propArray = this.arrs;
        this.propModel = this.model;
        this.propDefault = this.defaultField;
        this.propRequired = this.requiredField;
    }

    //==========================Prop 传值==========================
    /**
     * 此处为一个字符串值
     */
    @Prop() public str!: string;

    /**
     * 此处传入一个数字
     */
    @Prop() public num!: number;

    /**
     * 此处传入一个boolean值
     */
    @Prop() public bool!: boolean;

    /**
     * 此处为一个数组
     */
    @Prop()
    arrs!: [];

    /**
     * 传入一个对象
     */
    @Prop()
    model!: ProModel;

    //==========================Prop 验证==========================
    /**
     * prop默认字符串
     */
    @Prop({default: '我是子组件里的默认值'})
    defaultField!: string;

    /**
     * prop 必填的数字
     */
    @Prop({required: true})
    requiredField!: number;

    /**
     * prop 给一个默认的对象值
     */
    @Prop({
        default: function () {
            return new DefaultObject('名字', 11);
        }
    })
    defaultObject!: DefaultObject;

    /**
     * 自定义验证函数
     * @param item
     *
     * 注意那些 prop 会在一个组件实例创建之前进行验证，
     * 所以实例的属性 (如 data、computed 等) 在 default 或 validator 函数中是不可用的。
     */
    @Prop({
        validator: function (value) {
            // 这个值必须匹配下列字符串中的一个
            return ['success', 'warning', 'danger'].indexOf(value) !== -1
        }
    })
    cusValidatorFunField!: string;

    onListItemClick(item: string): void {
        console.log(item)
    }


}

export class DefaultObject {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

}

export class ProModel {
    public name: string;
    public data: Array<string>;

    constructor(name: string, options: Array<string>) {
        this.name = name;
        this.data = ['data0', 'data1', 'data2', 'data3'];
    }
}

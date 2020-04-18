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

    constructor() {
        super();
        this.propString = this.str;
        this.propNum = this.num;
        this.propBool = this.bool;
        this.propArray = this.arrs;
        this.propModel = this.model;
    }

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

    onListItemClick(item: string): void {
        console.log(item)
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

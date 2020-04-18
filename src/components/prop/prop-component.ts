import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class PropComponent extends Vue {
    private propString!: string;

    private propNum!: number;

    private list: string[];

    constructor() {
        super();
        this.propString = this.str;
        this.propNum = this.num;
        this.list = this.items;
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
     * 此处为一个数组
     */
    @Prop()
    items!: [];

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

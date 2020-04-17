import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class Hellopanel extends Vue {
    private title: string = "";

    private list: string[];

    constructor() {
        super();
        this.title = this.titleText;
        this.list = this.items;
    }

    /**
     * 此处为一个字符串值
     */
    @Prop() public titleText!: string;

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

import {Component, Vue} from "vue-property-decorator";

@Component
export default class Timepate2 extends Vue {

    /**
     * 在 DOM 中使用模板时 (直接在一个 HTML 文件里撰写模板)，
     * 还需要避免使用大写字符来命名键名，因为浏览器会把 attribute
     * 名全部强制转为小写：
     */
    private attributeName: string = "href";

    private url: string = "https://www.baidu.com";

    private key: string = "";

    private event: string = "click";

    constructor() {
        super();
    }

    public doSomething(): void {
        console.log("doSomething");
    }
}
import {Component, Vue} from "vue-property-decorator";

@Component
export default class Template extends Vue {
    public msg: string = "文本绑定值";
    public rawHtml: string = "<div><input value='我是input'></div>";

    public dynamicId: string = "bindID";
    public isButtonDisabled: boolean = true;

    public seen: boolean = true;

    public url: string = "https://www.baidu.com"
}
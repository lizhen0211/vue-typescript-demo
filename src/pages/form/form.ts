import {Component, Vue} from "vue-property-decorator";

@Component
export default class Form extends Vue {

    private message: string = "";

    private checked: boolean = true;

    private checkedNames: Array<string> = [];

    private picked: string = "";

    private selected: string = "";

    private selected1: string = 'A';

    private options: Array<Object> = [
        {text: 'One', value: 'A'},
        {text: 'Two', value: 'B'},
        {text: 'Three', value: 'C'}
    ];

    //当pick 值 等于 aVal 时，单选按钮被绑定
    private pick: string = "a";
    //动态绑定input 标签值
    private aVal: string = "a";

    private selected2: Object = {"number": 123};

}
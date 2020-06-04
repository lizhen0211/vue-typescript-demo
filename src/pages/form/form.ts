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

}
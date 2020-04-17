import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class Hellopanel extends Vue {
    private title: string = "";

    constructor() {
        super();
        this.title = this.titleText;
    }

    @Prop() public titleText!: string;
}
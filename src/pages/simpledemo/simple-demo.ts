import {Component, Vue} from "vue-property-decorator";

@Component
export default class SimpleDemo extends Vue {
    public name: string = "bob11";
    public age: number = 11;

    constructor() {
        super()
    }

    created() {
        console.log("created")
    }
}
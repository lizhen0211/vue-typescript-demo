import {Component, Vue} from "vue-property-decorator";

@Component
export default class A extends Vue {
    constructor() {
        super();
    }

    public onGoToBClick(): void {
        this.$router.push({name: "b"});
    }
}
import {Component, Vue} from "vue-property-decorator";

@Component
export default class ScrollDemo extends Vue {
    public onPullUploadClick(): void {
        this.$router.push({name: 'pullupload'})
    }
}
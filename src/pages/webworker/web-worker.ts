import {Component, Vue} from "vue-property-decorator";

/**
 * http://www.ruanyifeng.com/blog/2018/07/web-worker.html
 * 参考地址
 */
@Component
export default class WebWorker extends Vue {
    created() {
        console.log("created");
    }

    mounted() {

    }
}
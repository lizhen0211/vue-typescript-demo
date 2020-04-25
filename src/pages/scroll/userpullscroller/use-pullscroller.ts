import BScroll from "@better-scroll/core";

BScroll.use(Pullup)
import {Component, Vue} from "vue-property-decorator";
import PullUpScroller from "@/components/scoller/PullUpScroller.vue";
import Pullup from "@better-scroll/pull-up";

@Component({
    components: {'PullUpScroller':PullUpScroller}
})
export default class UsePullScroller extends Vue {
    private items!: Array<string>;

    /**
     * 下拉加载次数
     */
    private loadNum!: number;

    constructor() {
        super();
        this.items = [];
        this.loadNum = 5;
    }

    mounted() {
        this.getRandomItems();
    }


    public getRandomItems(): void {
        if (this.loadNum > 0) {
            for (let i: number = 0; i < 20; i++) {
                this.items.push(String(Math.random()))
            }
            (this.$refs.pullupscroller as any).initBScroll();

            this.loadNum--;
            (this.$refs.pullupscroller as any).showLoading();
            (this.$refs.pullupscroller as any).finishPullUp();
        } else {
            console.log('showLoadFinish');
            (this.$refs.pullupscroller as any).showLoadFinish();
        }
    }

    public pullingUpHandler(): void {
        console.log('loadNum:' + String(this.loadNum));
        let that = this;
        //模拟请求时间
        window.setTimeout(function () {
            that.getRandomItems();
        }, 1500);
    }
}
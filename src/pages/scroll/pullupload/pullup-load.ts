import {Component, Vue} from "vue-property-decorator";
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup)
@Component
export default class PullUpLoad extends Vue {

    private bscroll!: BScroll;

    private items!: Array<string>;

    /**
     * 下拉加载次数
     */
    private loadNum!: number;

    /**
     * 是否可以下拉加载
     */
    private isShowLoading!: boolean;

    /**
     * 是否加载完成
     */
    private isLoadFinish!: boolean;

    constructor() {
        super();
        this.items = [];
        this.loadNum = 5;
        this.isShowLoading = false;
        this.isLoadFinish = false;
    }

    mounted() {
        this.getRandomItems();
    }

    public getRandomItems(): void {
        if (this.loadNum > 0) {
            for (let i: number = 0; i < 20; i++) {
                this.items.push(String(Math.random()))
            }

            this.initBScroll();

            this.loadNum--;
            this.isShowLoading = true;
            this.isLoadFinish = false;
            this.finishPullUp();
        } else {
            this.isShowLoading = false;
            this.isLoadFinish = true;
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

    private finishPullUp() {
        if (this.bscroll) {
            // 每次触发上拉事件后，在回调函数的最后，都应该调用 finishPullUp() 方法。
            // 在 finishPullUp() 方法调用前不会触发下一次的 pullingUp 事件。
            this.bscroll.finishPullUp();
        }
    }

    private initBScroll() {
        this.$nextTick(() => {
            if (!this.bscroll) {
                this.bscroll = new BScroll(this.$refs.pullupscroll as HTMLElement, {
                    scrollY: true,
                    pullUpLoad: true
                })
                this.bscroll.on('pullingUp', this.pullingUpHandler);
                console.log("bscroll init");
            } else {
                this.bscroll.refresh();
                console.log("bscroll refresh");
            }
        })
    }
}
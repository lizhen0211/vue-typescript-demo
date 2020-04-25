import {Vue} from "vue-property-decorator";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup)

export default class PullUpScroller extends Vue {
    /**
     * 是否可以下拉加载
     */
    public isShowLoading!: boolean;

    /**
     * 是否加载完成
     */
    public isLoadFinish!: boolean;

    public bscroll!: BScroll;

    constructor() {
        super();
        this.isShowLoading = false;
        this.isLoadFinish = false;
    }

    private initBScroll() {
        this.$nextTick(() => {
            if (!this.bscroll) {
                this.bscroll = new BScroll(this.$refs.scroller as HTMLElement, {
                    scrollY: true,
                    pullUpLoad: true
                })
                this.bscroll.on('pullingUp',() =>{
                    console.log(this);
                    this.$emit('pullingUpHandler');
                    console.log('pullingUpHandler');
                });
                console.log("bscroll init");
            } else {
                this.bscroll.refresh();
                console.log("bscroll refresh");
            }
        })
    }

    public showLoading(): void {
        this.isShowLoading = true;
        this.isLoadFinish = false;
    }

    public showLoadFinish(): void {
        this.isShowLoading = false;
        this.isLoadFinish = true;
        this.$forceUpdate();
    }

    /**
     * 每次触发上拉事件后，在回调函数的最后，都应该调用 finishPullUp() 方法。
     * 在 finishPullUp() 方法调用前不会触发下一次的 pullingUp 事件。
     */
    public finishPullUp() {
        if (this.bscroll) {

            this.bscroll.finishPullUp();
        }
    }

    public pullingUpHandler(): void {
        console.log(this);
        this.$emit('pullingUpHandler');
        console.log('pullingUpHandler');
    }
}
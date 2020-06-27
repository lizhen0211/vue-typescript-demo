import {Component, Vue} from "vue-property-decorator";
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup)
@Component
export default class PullUpLoad extends Vue {

    private bscroll!: BScroll;

    private items!: Array<string>;


    constructor() {
        super();
        this.items = [];
    }

    mounted() {
        for (let i: number = 0; i < 20; i++) {
            this.items.push(String(Math.random()))
        }

        this.initBScroll();
    }

    private initBScroll() {
        this.$nextTick(() => {
            if (!this.bscroll) {
                this.bscroll = new BScroll(this.$refs.pullupscroll as HTMLElement, {
                    scrollY: true,
                    pullUpLoad: true
                })
                // this.bscroll.on('pullingUp', this.pullingUpHandler);
                console.log("bscroll init");
            } else {
                this.bscroll.refresh();
                console.log("bscroll refresh");
            }
        })
    }
}
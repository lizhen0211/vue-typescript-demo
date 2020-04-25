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
        this.getRandomItems();

    }

    public getRandomItems(): void {
        for (let i: number = 0; i < 50; i++) {
            this.items.push(String(Math.random()))
        }

        this.$nextTick(() => {
            if (!this.bscroll) {
                this.bscroll = new BScroll(this.$refs.pullupscroll as HTMLElement, {
                    scrollY: true,
                    pullUpLoad: true
                })
                this.bscroll.on('pullingUp', this.pullingUpHandler)
            } else {
                this.bscroll.refresh()
            }
        })
    }


    public pullingUpHandler(): void {
        console.log("pullingUpHandler");
    }
}
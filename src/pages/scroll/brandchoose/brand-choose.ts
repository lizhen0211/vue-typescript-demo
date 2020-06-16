import {Component, Vue, Watch} from "vue-property-decorator";
import BScroll from '@better-scroll/core'

@Component
export default class BrandChoose extends Vue {

    private data!: Array<DataItem>;

    public bscroll!: BScroll;

    private currentIndex: number = -1;

    private naviTouchStartY!: number;
    private naviTouchStartIndex!: number;
    private naviTouchMoveY!: number;
    private naviTouchMoveIndex!: number;
    private scrollY: number = 0;

    /**
     * 是否正在处理navicator 的touch事件，避免navicator的touch事件和 监听的scrollY事件同时触发，渲染currentIndex冲突。
     */
    private touchMoving: boolean = false;

    private sectionIndicators!: Array<SectionIndicator>;

    constructor() {
        super();
        this.data = [];
    }

    mounted() {
        this.initData();
        this.$nextTick(() => {

            this.initSectionIndicator();

            this.bscroll = new BScroll(this.$refs.categoryscroller as HTMLIFrameElement, {
                probeType: 3,
                scrollY: true,
                click: true
            });
            this.bscroll.on('scroll', (pos: any) => {
                if (!this.touchMoving) {//没有处理touch事件时
                    // this.scrollY>0 向上滑动，this.scrollY<0向下滑动
                    this.scrollY = pos.y;
                    // console.log(`Now position is x: ${pos.x}, y: ${pos.y}`)
                }
            });
        });
    }

    /**
     * 初始化指示器
     */
    private initSectionIndicator() {
        this.sectionIndicators = new Array<SectionIndicator>();

        for (let i: number = 0; i < this.data.length; i++) {
            //指示器
            let indicator: SectionIndicator = new SectionIndicator();
            indicator.title = this.data[i].title;
            //指示器区间
            let section: Section = new Section();
            if (i == 0) {//第一个元素，从0开始
                section.begin = 0;
            } else {//不是第一个元素，从上一个的end开始
                section.begin = this.sectionIndicators[i - 1].section.end
            }

            let valuesHeight: number = 0;
            for (let j: number = 0; j < this.data[i].values.length; j++) {
                // @ts-ignore
                valuesHeight += this.$refs[this.data[i].title + j][0].offsetHeight;
            }
            // @ts-ignore
            console.log(this.$refs[this.data[i].title]);
            // @ts-ignore
            section.end = section.begin + this.$refs[this.data[i].title][0].offsetHeight + valuesHeight;

            indicator.section = section;
            this.sectionIndicators.push(indicator);
        }
        console.log(this.sectionIndicators);
    }

    @Watch('scrollY')
    onScrollYChanged(value: number, oldValue: number) {
        // Do stuff with the watcher here.
        for (let i: number = 0; i < this.sectionIndicators.length; i++) {
            let indicator: SectionIndicator = this.sectionIndicators[i];
            console.log(this.sectionIndicators[i]);
            console.log(value);
            //找到当前的scroll落在了哪个字母对应的区间范围
            if (Math.abs(value) >= indicator.section.begin && Math.abs(value) < indicator.section.end) {
                console.log(indicator.title);
                //触发刷新navicator
                this.currentIndex = i;
                break;
            }
        }
    }

    public onNavicatorClick(index: number, e: Event): void {
        this.currentIndex = index;
        let title = this.data[index].title;
        // @ts-ignore
        this.bscroll.scrollToElement(this.$refs[title][0], 500);
    }

    public onNavigatorTouchStart(index: number, e: Event): void {
        console.log("onNavigatorStart" + index);
        // @ts-ignore
        this.naviTouchStartY = e.touches[0].pageY;
        this.naviTouchStartIndex = index;
        this.touchMoving = true;
    }

    public onNavigatorTouchMove(index: number, e: Event): void {
        console.log("onNavigatorTouchMove" + index);

        // @ts-ignore
        this.naviTouchMoveY = e.touches[0].pageY;
        this.naviTouchMoveIndex = index;

        //取第一个元素title
        let firstItemTitle = this.data[0].title;
        //取第一个导航字母的高度（每个导航字母高度相等）
        // @ts-ignore
        let firstNavItemHeight = this.$refs['nav-' + firstItemTitle][0].offsetHeight;
        console.log(firstNavItemHeight);
        //移动总高度/每个字母高度=移动了几个字母
        let detalIndexCount = Math.floor((this.naviTouchMoveY - this.naviTouchStartY) / firstNavItemHeight);
        //算出当前索引
        let targetIndex = this.naviTouchStartIndex + detalIndexCount;
        //控制范围，不要滑出 第一个 和 最后一个
        if (targetIndex >= 0 && targetIndex < this.data.length) {
            this.currentIndex = targetIndex;
            let title = this.data[targetIndex].title;
            // @ts-ignore
            this.bscroll.scrollToElement(this.$refs[title][0], 500);
        }
    }

    public onNavigatorTouchEnd(index: number, e: Event): void {
        console.log("onNavigatorTouchEnd");
        this.touchMoving = false;
    }

    /**
     * 初始化数据
     */
    private initData() {
        for (let i: number = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
            let item: DataItem = new DataItem();
            let title = String.fromCharCode(i);
            item.title = title;
            item.values = [];
            for (let j: number = 0; j < 10; j++) {
                item.values.push(String(j));
            }
            this.data.push(item);
        }
    }
}

/**
 * 区域指示器
 */
class SectionIndicator {
    private _title!: string;
    private _section!: Section;

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get section(): Section {
        return this._section;
    }

    set section(value: Section) {
        this._section = value;
    }
}

/**
 * 开闭区间
 */
class Section {
    /**
     * 开始坐标
     */
    private _begin!: number;

    /**
     * 结束坐标
     */
    private _end!: number;

    get begin(): number {
        return this._begin;
    }

    set begin(value: number) {
        this._begin = value;
    }

    get end(): number {
        return this._end;
    }

    set end(value: number) {
        this._end = value;
    }
}

class DataItem {
    private _title!: string;
    private _values!: Array<string>;

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get values(): Array<string> {
        return this._values;
    }

    set values(value: Array<string>) {
        this._values = value;
    }
}
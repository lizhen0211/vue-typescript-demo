import {Component, Vue} from "vue-property-decorator";
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup)
@Component
export default class PullUpLoad extends Vue {

    private data: number = 20;

    mounted() {

    }
}
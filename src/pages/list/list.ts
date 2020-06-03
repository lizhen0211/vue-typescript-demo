import {Component, Vue} from "vue-property-decorator";

@Component
export default class List extends Vue {

    private items: Array<Object> = [{message: 'Foo'}, {message: 'Bar'}];

    private items1: Array<Object> = [{id: '3', message: 'Foo'}, {id: '1', message: 'Bar'}, {id: '2', message: 'Lou'}];

    private parentMessage: string = "Parent";

    private numbers: Array<number> = [1, 2, 3, 4, 5];

    private sets: Array<Array<number>> = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]];

    private object: Object = {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
    };

    constructor() {
        super();
    }

    /**
     * 创建一个计算属性，来返回过滤或排序后的数组。
     */
    get evenNumbers() {
        return this.numbers.filter(function (number) {
            return number % 2 === 0;
        })
    }

    public even(numbers: Array<number>) {
        return numbers.filter(function (number) {
            return number % 2 === 0
        })
    }
}
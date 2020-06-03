import {Component, Vue, Watch} from "vue-property-decorator";

@Component
export default class Computed extends Vue {

    private message: string = "hello";

    constructor() {
        super();
    }

    // 计算属性的 getter
    get reversedMessage() {
        // `this` 指向 vm 实例
        return this.message.split('').reverse().join('')
    }

    /**
     * 我们可以将同一函数定义为一个方法而不是一个计算属性。
     * 两种方式的最终结果确实是完全相同的。
     * 然而，不同的是计算属性是基于它们的响应式依赖进行缓存的。
     * 只在相关响应式依赖发生改变时它们才会重新求值。
     * 这就意味着只要 message 还没有发生改变，
     * 多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。
     */
    public reversedMessageMethod(): string {
        return this.message.split('').reverse().join('')
    }

    get now() {
        return Date.now();
    }

    public modifyMessageValue(): void {
        this.message = "abc";
    }


    /**
     * Watchers can be created with the @Watch(propertyString, config) decorator.
     */

    /*@Watch('firstName')
    onPropertyChanged(value: string, oldValue: string) {
        // Do stuff with the watcher here.
    }*/
}
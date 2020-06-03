<template>
    <div>
        <ul id="example-1">
            <li v-for="item in items" :key="item.message">
                {{ item.message }}
            </li>
        </ul>
        <hr>
        <p>在 v-for 块中，我们可以访问所有父作用域的 property。v-for 还支持一个可选的第二个参数，即当前项的索引。</p>

        <ul id="example-2">
            <li v-for="(item, index) in items">
                {{ parentMessage }} - {{ index }} - {{ item.message }}
            </li>
        </ul>

        <p>你也可以用 of 替代 in 作为分隔符，因为它更接近 JavaScript 迭代器的语法：</p>
        <p>"<"div v-for="item of items">"<"/div>"</p>
        <br>
        <p>在 v-for 里使用对象</p>
        <p>你也可以用 v-for 来遍历一个对象的 property。</p>
        <ul id="v-for-object" class="demo">
            <li v-for="value in object">
                {{ value }}
            </li>
        </ul>
        <hr>
        <p>你也可以提供第二个的参数为 property 名称 (也就是键名)：</p>
        <div v-for="(value, name) in object">
            {{ name }}: {{ value }}
        </div>
        <hr>
        <p>还可以用第三个参数作为索引：</p>
        <div v-for="(value, name, index) in object">
            {{ index }}. {{ name }}: {{ value }}
        </div>
        <hr>
        <p>维护状态</p>
        <div v-for="item in items1" v-bind:key="item.id">
            {{item.id+":"+item.message}}
        </div>
        <hr>
        <p>数组更新检测</p>
        <p>变更方法</p>
        <p>会变更调用了这些方法的原始数组</p>
        <p>push(),pop(),shift() ,unshift(),splice(),sort(),reverse()</p>
        <hr>
        <p>替换数组</p>
        <p>例如 filter()、concat() 和 slice()</p>
        <p>filter()、concat() 和 slice()</p>
        <p>当使用非变更方法时，可以用新数组替换旧数组：</p>
        <p>example1.items = example1.items.filter(function (item) {
            return item.message.match(/Foo/)
            })</p>
        <p>你可能认为这将导致 Vue 丢弃现有 DOM 并重新渲染整个列表。幸运的是，事实并非如此。
            Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的启发式方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。</p>
        <hr>
        <p>显示过滤/排序后的结果</p>
        <p>有时，我们想要显示一个数组经过过滤或排序后的版本，而不实际变更或重置原始数据。
            在这种情况下，可以创建一个计算属性，来返回过滤或排序后的数组。</p>
        <li v-for="n in evenNumbers">{{ n }}</li>
        <hr>
        <p>在计算属性不适用的情况下 (例如，在嵌套 v-for 循环中) 你可以使用一个方法：</p>
        <ul v-for="set in sets">
            <li v-for="n in even(set)">{{ n }}</li>
        </ul>
        <hr>
        <p>在 v-for 里使用值范围</p>
        <div>
            <span v-for="n in 10">{{ n }} </span>
        </div>
    </div>
</template>

<script lang="ts" src="./list.ts">

</script>

<style scoped>
    @import "./List.css";
</style>
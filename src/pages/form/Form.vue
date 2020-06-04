<template>
    <div>
        <p>文本</p>
        <input v-model="message" placeholder="edit me">
        <p>Message is: {{ message }}</p>
        <hr>
        <p>多行文本</p>
        <span>Multiline message is:</span>
        <p style="white-space: pre-line;">{{ message }}</p>
        <br>
        <textarea v-model="message" placeholder="add multiple lines"></textarea>
        <p>在文本区域插值 ("<"textarea>{{text}}<"/textarea">") 并不会生效，应用 v-model 来代替。</p>
        <hr>
        <p>复选框</p>
        <p>单个复选框，绑定到布尔值：</p>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
        <hr>
        <p>多个复选框，绑定到同一个数组：</p>
        <div id='example-3'>
            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
            <label for="jack">Jack</label>
            <input type="checkbox" id="john" value="John" v-model="checkedNames">
            <label for="john">John</label>
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">Mike</label>
            <br>
            <span>Checked names: {{ checkedNames }}</span>
        </div>
        <hr>
        <p>单选按钮</p>
        <div id="example-4">
            <input type="radio" id="one" value="One" v-model="picked">
            <label for="one">One</label>
            <br>
            <input type="radio" id="two" value="Two" v-model="picked">
            <label for="two">Two</label>
            <br>
            <span>Picked: {{ picked }}</span>
        </div>
        <hr>
        <p>选择框</p>
        <div id="example-5">
            <select v-model="selected">
                <option disabled value="">请选择</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <span>Selected: {{ selected }}</span>
        </div>
        <p>如果 v-model 表达式的初始值未能匹配任何选项，"<"select">" 元素将被渲染为“未选中”状态。
            在 iOS 中，这会使用户无法选择第一个选项。因为这样的情况下，iOS 不会触发 change 事件。因此，更推荐像上面这样提供一个值为空的禁用选项。</p>
        <div id="example-6">
            <select v-model="selected" multiple style="width: 50px;">
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <br>
            <span>Selected: {{ selected }}</span>
        </div>
        <p>用 v-for 渲染的动态选项：</p>
        <select v-model="selected1">
            <option v-for="option in options" v-bind:value="option.value">
                {{ option.text }}
            </option>
        </select>
        <span>Selected: {{ selected1 }}</span>
        <hr>
        <p>值绑定</p>
        <p>对于单选按钮，复选框及选择框的选项，v-model 绑定的值通常是静态字符串 (对于复选框也可以是布尔值)：</p>
        <p>单选按钮</p>
        <input type="radio" v-model="pick" v-bind:value="aVal">
        <p>选择框的选项</p>
        <select v-model="selected2">
            <!-- 内联对象字面量 -->
            <option v-bind:value="{ number: 123 }">123</option>
        </select>
    </div>
</template>

<script lang="ts" src="./form.ts">

</script>

<style scoped>
    @import "./Form.css";
</style>
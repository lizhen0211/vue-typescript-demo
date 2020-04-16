import {Component, Vue} from "vue-property-decorator";

@Component
export default class Lifecycle extends Vue {
    public test :string = '1';
    beforeCreated() {
        // console.log("beforeCreated")
    }


    created() {
        console.log("created")
    }


    beforeMount() {
        console.log("beforeMount")
    }

    beforeUpdate() {
        console.log("beforeUpdate")
    }

    updated() {
        console.log("updated")
    }

    beforeDestroy() {
        console.log("beforeDestroy")
    }

}
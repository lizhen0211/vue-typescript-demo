import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        keepalives: []// 缓存数组
    },
    mutations: {
        addInclude(state, component) {
            // @ts-ignore
            if (!state.keepalives.includes(component)) {
                // @ts-ignore
                state.keepalives.push(component)
            }
        },
        removeInclude(state, component) {
            // @ts-ignore
            const index = state.keepalives.indexOf(component);
            if (index !== -1) {
                state.keepalives.splice(index, 1)
            }
        }
    },
    getters: {
        getKeepalives: state => {
            return state.keepalives;
        }
    },
    actions: {
        addInclude(context, component) {
            context.commit('addInclude', component);
            console.log("context.commit('addInclude')+" + component);
        },
        removeInclude(context, component) {
            context.commit('removeInclude', component);
            console.log("context.commit('removeInclude')+" + component);
        }
    },
    modules: {}
})

export default store;
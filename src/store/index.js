import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 1.state：应用里需要保存在仓库的状态
    state: {
        name: ''
    },
    //2. mutation：更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
    // state: 代表实例的state对象
    // payload: 表示参数
    mutations: {
        setName(state, payload) {
            state.name = payload;
        }
    }
})

export default store
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'

// 插件，mutations修改state时会记录并显示修改日志
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// vuex中的调试工具，比较费性能，只在开发中使用
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

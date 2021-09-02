// 同步方法，修改state的值
import * as types from './mutation-types'

const mutations = {
  [types.SET_FULL_SCREEN](state, singer) {
    state.singer = singer
  }
}

export default mutations

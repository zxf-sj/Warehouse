//actions.js 异步调用修改mutations中的方法
import * as types from './mutation-types'
export const
  setSinger = function ({
    commit
  }, {
    list
  }) {
    commit(types.SET_FULL_SCREEN, true)
  }

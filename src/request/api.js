// api.js用来同意管理接口
import {
  get,
  post
} from './http'

export const apiAddress = p => get('tigge/findLevels', p);

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'

Vue.use(element)
Vue.prototype.$ELEMENT = {
  size: 'small',
  zIndex: 3000
};
Vue.config.productionTip = false //设置为 false 以阻止 vue 在启动时生成生产提示


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

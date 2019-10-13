//入口文件
import 'babel-polyfill'//添加babel-polyfill使得IE高版本可以显示

import Vue from 'vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:6300/api';
Vue.http.options.emulateJSON = true;
Vue.http.options.withCredentials = true;
// Vue.http.options.headers = {
//   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
// }

import  router from './router.js'
import  store from './vuex.js'

import './lib/mui-master/dist/css/mui.css'
import './lib/mui-master/dist/css/icons-extra.css'
import './lib/default.less'
import './lib/iconfont/iconfont.css'

import App from './app.vue'



var vm = new Vue({
	el:'#app',
	data: {},
	methods:{},
	render: c => c(App),
	router,
	store
})

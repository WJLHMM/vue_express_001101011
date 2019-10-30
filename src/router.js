//导入vur-router包
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './app.vue'
import home from './main/home.vue'
import commoditynav from './main/commoditynav.vue'
import mycart from './main/mycart.vue'
import myinfo from './main/myinfo.vue'
import login from './main/login.vue'
import register from './main/register.vue'
import productlist from './main/productlist.vue'
import productdetail from './main/productdetail.vue'
import detailpage from './main/detailpage.vue'
import purchasingorder from './main/purchasingorder.vue'
import catalogynav from './main/subpage/Commoditynav-subpage/catalogynav.vue';
import userinfodbadd from './main/userinfodbadd.vue'
import commoditynavdbadd from './main/Commoditynavdbadd.vue'

var router = new VueRouter({
	routes:[//
		{ path:'/',redirect:'home'},
		{ 
			path:'/home',
			component:home
		},	
		{ 
			path:'/commoditynav',
			component:commoditynav,
			children: [
				{ path:'',redirect:'0/WQR2006'},
				{ path:':paramsid/:cid',component:catalogynav}
			]

		},	
		{ path:'/mycart',component:mycart},	
		{ path:'/myinfo',component:myinfo},	
		{ path:'/login',component:login},
		{ path:'/purchasingorder',component:purchasingorder},	
		{ path:'/register',component:register},	
		{ path:'/userinfodbadd',component:userinfodbadd},
		{ path:'/commoditynavdbadd',component:commoditynavdbadd},	
		{ path:'/productlist',component:productlist},	
		{ path:'/productdetail',component:productdetail},	
		{ path:'/detailpage',component:detailpage},	
	],
	// linkActiveClass:'mui-active'//使用mui-active这个mui定义的高亮，替换默认的router-link-active，从而实现高亮


})

export default router;

<template>
	<div class="headerfixcontainer" >
		<mt-header  
			:title="title" 
			:style="{
				'font-size':'18px',
				'background-color':color,
				'color':textcolor,
				'height':'50px',
				'border-bottom':'1px solid #808080'
			}"
		>
		  <router-link :to="isProductdetail ? ('/productlist?item=' + paritem):'/'" slot="left">
		  <!-- <router-link :to="path" slot="left"> -->
		    <mt-button icon="back" type="default" ></mt-button>
		  </router-link>
		  <mt-button v-show ="isLoginpath" icon="more" slot="right" type="default" ></mt-button>
		</mt-header>
	</div>
</template>

<script >

import Vue from 'vue';
import { Header,Button  } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);

export default {
	data(){
		return {
			title:null,
			color:null,
			textcolor:null,
			isLoginpath:false,
			isProductdetail:false,
			// path:'/',
			item:''
		}
	},
	methods: {
		
	},
	components:{
	},
	created(){ 
		this.item = this.paritem
		if(this.$route.fullPath.indexOf('mycart')!=-1) {
			this.title = '购物车',
			this.color = '#fff',
			this.textcolor= '#000'
		}else if(this.$route.fullPath=='/login'){
			this.title = '登录页面',
			this.color = '#fff',
			this.textcolor= '#000',
			this.isLoginpath=true
		}else if(this.$route.fullPath=='/register'){
			this.title = '注册页面',
			this.color = '#fff',
			this.textcolor= '#000',
			this.isLoginpath=true
		}else if(this.$route.fullPath.indexOf('myinfo')!=-1){
			this.title = '我的信息',
			this.color = '#fff',
			this.textcolor= '#000'
		}else if(this.$route.fullPath.indexOf('productdetail')!=-1){
			this.title ='', 
			this.color = '#fff',
			this.textcolor= '#000'
			this.isProductdetail=true
			// this.path = '/productlist?item=' + this.item
		}
	},
	props:['paritem'],
	// watch: {
	//     '$route.path': function(to, from) {
 //       	// console.log(this.$route.path)
 //       	// console.log(to)
	//     // 深度观察监听
	//     deep: true
	//   }
	// },
}
</script>

<style scoped lang='less'>
	.headerfixcontainer {
		position: fixed;
		top: 0;
		width: 100%;
		max-width: 638px;
		background-color: #fff;
		z-index: 10;
		border:1px solid #808080;
	}






</style>
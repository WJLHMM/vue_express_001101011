
<template>
	<div class="mycart">
		<appheader></appheader>
		<cart 
		>
		</cart>
  <br><br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
	</div>
</template>

<script>
import appheader from './components/header.vue';
import cart from './subpage/mycart-subpage/cart.vue';

import Vue from 'vue'
// import { Toast } from 'mint-ui';
// Vue.component(Toast.name, Toast);

export default {
	data(){
		return {
			userloginedinpurchasingorder:{}

		}
	},
	methods: {
		// getshopcartlist() {
		// 	this.$http.post('cartinfo',{"username":this.$route.query.username}).then(res=> {
				
		// 		if(res.body) {
		// 			if(res.body){
		// 				this.cartlist=[...res.body]
		// 				this.isEmptyshow = false
		// 			}
		// 			if(res.body.statuscode==0){
		// 				mui.toast(
		// 					`${res.body.msg}`,
		// 					{ duration:900, type:'div' }
		// 				)
		// 			}
		// 			if(res.body.statuscode==10){
		// 				this.emptyshow = `${res.body.msg}`
		// 				this.isEmptyshow=true
		// 			}
		// 		}
				
		// 	}, (e) => {
		// 		console.log(e)
		// 	})
		// },
		// getlatestdbdat() {
		// 	this.getshopcartlist()
		// }

	},
	components: {
		appheader,
		cart,
	},
	created(){

		this.userloginedinpurchasingorder.username = this.$route.query
		console.log(this.userloginedinpurchasingorder)
		console.log(this.$route.query)
	},
    computed: {

    },
	mounted(){
		mui('.mui-input-row input').input(); 
		
	}

}
</script>

<style scoped lang='less'>
	.emptyshow {
		top: 200px;
		width: 100%;
		height: 100px;
		position: absolute;
		text-align:center; 
		color: red;
		font-size: 20px; 
		line-height: 20px;
	}
	
</style>
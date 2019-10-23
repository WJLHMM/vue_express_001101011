
<template>
	<div class="mycart">
		<appheader></appheader>
		<actionsheet></actionsheet>
		<cart :parcartlist ="cartlist" :parunitedselllist="unitedselllist" ></cart>
		<settlementfooter :parlastestcartlist=lastestcartlist></settlementfooter>
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
import actionsheet from './subpage/mycart-subpage/actionsheet.vue';
import settlementfooter from './subpage/mycart-subpage/settlementfooter.vue';

import Vue from 'vue'
import { Toast } from 'mint-ui';
Vue.component(Toast.name, Toast);

export default {
	data(){
		return {
			selfselllist:[],
			unitedselllist:[],
			cartlistkey:[],
			cartlist:[],
			username:''
		}
	},
	methods: {
		getshopcartlist() {
			this.$http.post('cartinfo',{"username":this.$route.query.username}).then(res=> {
				if(res.body) {
					this.cartlist=[...res.body]
					// console.log(this.cartlist)
				}else {
					Toast({
						message: '读取数据失败',
						position: 'middle',
						duration: 3000
					});
				}
			}, (e) => {
				console.log(e)
			})
		},

	},
	components: {
		appheader,
		actionsheet,
		cart,
		settlementfooter
	},
	created(){
		

		this.getshopcartlist()
	},
    computed: {
        lastestcartlist() {
            return this.$store.state.storecartlist
        }
    }
}
</script>

<style scoped lang='less'>
	
	
</style>

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
			cartlist:[]
		}
	},
	methods: {
		getshopcartlist() {
				this.$http.get('cartinfo').then(res=> {
				if(res.body.success) {
					this.selfselllist=[...res.body.data.cartproinfo.selfsell]
					// this.unitedselllist=[...res.body.data.cartproinfo.united]
				// 	console.log(this.unitedselllist)
					this.cartlistkey = JSON.parse(localStorage.getItem('cartlist')||'[]');

					this.selfselllist.filter((item,index)=>{
						for(let i=0;i<this.cartlistkey.length;i++)
						{
							if(item.producmodel == this.cartlistkey[i])
							{
								this.cartlist.unshift(item)
								// console.log(item)
								return item

							}
						}
						return this.selfselllist
					});
						// console.log(this.selfselllist)
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
		if(this.$route.fullPath=='/mycart') {
			this.title = '购物车'
		}
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

<template>
	<div class="mycart">
		<appheader></appheader>
		<actionsheet></actionsheet>
		<cart 
			:parcartlist ="cartlist" 
			:parunitedselllist="unitedselllist" 
			:parprepickedlist="prepickedlist"
			@refresdbdata = "getlatestdbdat"
		>
		</cart>
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
// import { Toast } from 'mint-ui';
// Vue.component(Toast.name, Toast);

export default {
	data(){
		return {
			selfselllist:[],
			unitedselllist:[],
			cartlistkey:[],
			cartlist:[],
			username:'',
			prepickedlist:[]
		}
	},
	methods: {
		getshopcartlist() {
			this.$http.post('cartinfo',{"username":this.$route.query.username}).then(res=> {
				
				if(res.body) {
					this.cartlist=[...res.body]
					this.cartlist.forEach(item=> {
						if(item.picked){
							this.prepickedlist.push(item.proname)
						}
					})
				}
				// Toast({
				// 	message: `${res.body.msg}`,
				// 	position: 'middle',
				// 	duration: 1000
				// });
				if(res.body.statuscode==0){
					mui.toast(
						`${res.body.msg}`,
						{ duration:900, type:'div' }
					)
				}
				
			}, (e) => {
				console.log(e)
			})
		},
		getlatestdbdat() {
			this.getshopcartlist()
		}

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
    },
	mounted(){
		mui('.mui-input-row input').input(); 
		
	}

}
</script>

<style scoped lang='less'>
	
	
</style>
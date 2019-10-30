
<template>
	<div class="mycart">
		<appheader></appheader>
		<actionsheet></actionsheet>
		<div class="emptyshow" v-if="isEmptyshow" >{{emptyshow}}</div>
		<cart 
			:parcartlist ="cartlist" 
			:parunitedselllist="unitedselllist" 
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
			cartlistlength:0,
			emptyshow:'',
			isEmptyshow:false

		}
	},
	methods: {
		getshopcartlist() {
			this.$http.post('cartinfo',{"username":this.$route.query.username}).then(res=> {
				
				if(res.body) {
					if(res.body){
						this.cartlist=[...res.body]
						this.isEmptyshow = false
					}
					if(res.body.statuscode==0){
						mui.toast(
							`${res.body.msg}`,
							{ duration:900, type:'div' }
						)
					}
					if(res.body.statuscode==10){
						this.emptyshow = `${res.body.msg}`
						this.isEmptyshow=true
					}
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
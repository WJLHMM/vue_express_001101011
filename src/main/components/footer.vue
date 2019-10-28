
<template>
<div class="muibarfixedcontainer">
	<nav class="mui-bar mui-bar-tab" >
		<router-link to='/home'class="mui-tab-item mui-active" >
			<span class="mui-icon mui-icon-home"></span>
			<span class="mui-tab-label">首页</span>
		 </router-link>
	
		<router-link to='/commoditynav'class="mui-tab-item" >	
			<span class="mui-icon mui-icon-list"></span>
			<span class="mui-tab-label">分类</span>
		</router-link>

		<router-link 
			:to= "footer_isLogin ? '/mycart?username='+ username :'/login'"
			class="mui-tab-item" 
		>
			<i class="iconfont cart-iconfont">&#xe618;
				<span class="mui-badge cart-badge" v-if="footer_isLogin">{{cartlistlengthfromvuex}}</span>
				<span class="mui-badge cart-badge"  v-if="!footer_isLogin" >0</span>
			</i>
			<span class="mui-tab-label cart-text">购物车</span>
		</router-link>

		<router-link :to="!footer_isLogin?'/login':'/myinfo'"class="mui-tab-item" >
			<span class="mui-icon mui-icon-contact"></span>
			<span class="mui-tab-label" v-text="footer_isLogin?'我的':'登录'"></span>
		</router-link>	
	</nav>
</div>
</template>

<script >

export default {
	data(){
		return {
			// username:JSON.parse(localStorage.getItem('userlogined')).username||' '
		}
	},
	methods: {
		checkisLogined(footer_isLogin) {
			if(footer_isLogin){
				this.$router.push({
					path:'/mycart',
					query: this.userloginedfromvuex
				}) 
					
			}else{
				mui.toast(
					`${请您先登录}`,
					{ duration:900, type:'div' }
				)
				setTimeout(()=> {	
					this.$router.push({
						path:'/login'
					}) 
				},1000)
			}

		}
	},
	created(){
		// let username = JSON.parse(localStorage.getItem('userlogined'))||''
		// console.log('use',username)
	},
    computed: {
        footer_isLogin:{
        	get(){
        		// console.log(this.$store.state.storeisLogin||JSON.parse(localStorage.getItem('isLogin')),'footer')
            	return this.$store.state.storeisLogin||JSON.parse(localStorage.getItem('isLogin'));
        	},
        	set(){}
        }, 
        cartlistlengthfromvuex:{
        	get(){
    			return this.$store.state.storecartlistlength||JSON.parse(localStorage.getItem('cartlistlengthfromvuex'))||'0';
        	},
        	set() {
        		
        	}
        }, 
        username:{
        	get(){
    			return this.$store.state.storeuserlogined.username||JSON.parse(localStorage.getItem('userlogined')).username||' ';
        	},
        	set() {
        		
        	}
        },
    },
    updated(){
    	localStorage.setItem('cartlistlengthfromvuex',window.JSON.stringify(this.cartlistlengthfromvuex))
    },

    props:['']

}
</script>

<style scoped lang='less'>

.muibarfixedcontainer {
	position:fixed;
	width: 100%;
	height:50px;
	bottom:0;
	z-index: 100;
	border-right: 1px solid #888;
	.mui-bar-tab {
		display:flex;
		max-width: 638px;
		justify-content: space-around;
		position: absolute;
		left:0;
		.mui-tab-item {
			flex:1;
			display:flex;
			flex-direction: column;
			justify-content: space-around;
			.mui-icon {
				width:100%;
				justify-content: center;
			}
			.cart-iconfont {
				position:relative;
				.cart-badge {
					position: absolute;
					top:-1px;
					left: 50%;
					background-color: rgba(255, 0, 0, 0.897);
					font-size:10px;
					color:#fff;
				}
			}
			.cart-text {
				font-size: 12px;
			}
		}	
	}
}
</style>
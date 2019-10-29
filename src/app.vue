
<template>
	<div 
		class="container"
	>
		
		<router-view></router-view>
	
		<appfooter v-show='isFooterShow'></appfooter>
	</div>
</template>

<script>
	
	
	import appfooter from './main/components/footer.vue';

	import mui from './lib/mui-master/dist/js/mui.min.js';

	export default {
		data(){
			return {
				
				// isRouterAlive:true
				
			}
		},
		methods: {
			handleScroll () {
				let scrolltop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				this.$store.commit('updatescrolltop',scrolltop);
			},
		},
		// provide(){
		// 	return {
		// 		reload:this.reload
		// 	}
		// },
		components: {
			appfooter
		},
		computed: {//this.$route.path
			isFooterShow() {
				if(this.$route.fullPath.indexOf('mycart')!=-1||this.$route.fullPath==='/login'||this.$route.fullPath.indexOf('productdetail')!=-1) {
					return isFooterShow=false
				}else {
					return isFooterShow=true
				}
				
			},
	        // footercartlistlength() {
	        //     return this.$store.state.storecartlistlength
	        // },
	        userlogined:{
	        	get(){
	    			return this.$store.state.storeuserlogined||JSON.parse(localStorage.getItem('userlogined'))||'0';
	        	},
	        	set() {
	        		
	        	}
	        }
		},
		created(){
		},
		mounted(){
			window.addEventListener('scroll', this.handleScroll,{ passive: false })
			mui('body').on('click','a',function(){document.location.href=this.href;});
			mui('body').on('tap','a',function(){document.location.href=this.href;});
		},
		destroyed () {
  			window.removeEventListener('scroll', this.handleScroll)
		}

	}
</script>

<style lang='less'>

html, body {
	* { touch-action: pan-y; } 
	border:0;
	/* touch-action: manipulation;  */
	.container {
		display:flex;
		/* height: 100%; */
		/* height: 667px; */
		border-left: 1px solid #888;
		border-right: 1px solid #888;
		/* border-bottom: 1px solid #888; */
		flex-direction:column;
		justify-content: space-between;
	}
	.mui-toast-container {
		bottom: 50% !important;
		.mui-toast-message {
			background:#93FF93;
			/* opacity: 0.9;  */
			font-size: 16px;
			color: #ff7575; 
			height: 100px;
			width: 180px; 
			text-align: center;
			display: box;
			box-pack:center;
			box-orient:vertical;
			display: -webkit-box;
			-webkit-box-pack:center;
			-webkit-box-orient:vertical;
			padding: 0px 5px 0px 5px;
			/* border: dashed 1px #000; */
		}  
	}  
	
}
	
</style>
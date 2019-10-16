
<template>
	<div class="register">
		<appheader></appheader>
		<div class="inputfidld">
			<form class="mui-input-group">
				<div class="mui-input-row">
					<input 
						ref="username" 
						type="text" 
						class="mui-input-clear" 
						placeholder="用户名"
					
					>
				</div>
				<div class="mui-input-row mui-password">
					<input 
						ref="password" 
						type="text" 
						class="mui-input-clear mui-input-password"
						placeholder="请输入密码"
					
					>
					<!-- <span class="mui-icon mui-icon-eye">|</span> -->
					
				</div>
				<div class="mui-button-row">
					<button type="button" class="mui-btn  mui-btn-danger"  @click = 'register'>提交</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import appheader from './components/header.vue'

export default {
	data(){
		return {
			isLogin:false,
			userlogininfo:[],
			userlogined:{}
		}
	},
	methods: {
		register(){

			let username = this.$refs.username.value
			let password = this.$refs.password.value

			this.$http.post('register',{ username,password },{})
				.then((response)=>{
					mui.toast(
						`${response.body.msg}`,
						{ duration:900, type:'div' }
					)
					if(response.body.statuscode===1) {
						setTimeout(()=> {	
							this.$router.push({path:'/login'}) 
						},1000)
					}
				
				},(response)=>{
					console.log('noconnect',response.data)
				})
		}
	},
	components: {
		appheader
	},
	created(){
		
	},
	mounted(){
		mui('.mui-input-row input').input(); 
		
	}
}
</script>

<style scoped lang='less'>

.register {
	width: 100%;
	display: table;
	overflow: hidden;
	.inputfidld {
		width:100%;
		margin-top: 200px;
		.mui-input-group {
			width:100%;
			.mui-input-row {
				height: 60px;
				line-height:1;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			.mui-password {
				width: 100%;
				position: relative;
				.mui-input-password {
					width: 70%;
				}
				.mui-icon-eye {
					height: 100%;
					top: 0;
					right: 66px;
					text-align: center;
					line-height: 60px;
				}
				button {
					height:100%;
					border: 0;
				}
			}
			.mui-button-row {
				width: 100%;
				height: 110px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				margin-top: 30px;
				.mui-btn {
					display: inline-block;
					padding: 0;
					height: 50px;
					width: 320px;
					line-height: 50px;
					border-radius: 25px;
					border: 1px solid #dd524d;
				}


			}

		}
	}	

}
</style>
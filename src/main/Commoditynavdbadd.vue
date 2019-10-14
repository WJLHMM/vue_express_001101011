
<template>
	<div class="register">
		<appheader></appheader>
		<div class="inputfidld">
			<form class="mui-input-group">
				<div class="mui-input-row">
					<input 
						ref="dataObj" 
						type="text" 
						class="mui-input-clear" 
						placeholder="dataObj"
					>
				</div>

				<div class="mui-button-row">
					<button type="button" class="mui-btn  mui-btn-danger"  @click = 'dbadd'>提交</button>
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
		dbadd(){
			
			// let dataObj =JSON.parse(this.$refs.dataObj.value)
			let dataObj =JSON.parse(window.JSON.stringify(this.$refs.dataObj.value))
			// console.log(dataObj)
	
			this.$http.post('catalistdataadd',dataObj,{})
			.then((response)=>{
				console.log(response)
				// mui.toast(
				// 	`${response.body.msg}`,
				// 	{ duration:900, type:'div' }
				// )				
			},(response)=>{
				console.log('noconnect',response.data)
			})
			
			// this.$http.post('productcata',dataObj,{})
			// .then((response)=>{
			// 	console.log(response)
			// 	// mui.toast(
			// 	// 	`${response.body.msg}`,
			// 	// 	{ duration:900, type:'div' }
			// 	// )				
			// },(response)=>{
			// 	console.log('noconnect',response.data)
			// })
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
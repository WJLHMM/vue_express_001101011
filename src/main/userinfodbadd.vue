<!-- 此页面为register  myinfo 向数据库中添加数据 客户端 -->
<template>
	<div class="register">
		<appheader></appheader>
		<div class="inputfidld">
			<form class="mui-input-group">
				<!-- <div class="mui-input-row">
					<input 
						ref="username" 
						type="text" 
						class="mui-input-clear" 
						placeholder="username"
					>
				</div>
				<div class="mui-input-row">
					<input 
						ref="cid" 
						type="text" 
						class="mui-input-clear" 
						placeholder="cid"
					>
				</div>	
				<div class="mui-input-row">
					<input 
						ref="nickname" 
						type="text" 
						class="mui-input-clear" 
						placeholder="nickname"
					>
				</div>	
				<div class="mui-input-row">
					<input 
						ref="grade" 
						type="text" 
						class="mui-input-clear" 
						placeholder="grade"
					>
				</div>	
				<div class="mui-input-row">
					<input 
						ref="creditpoint" 
						type="text" 
						class="mui-input-clear" 
						placeholder="creditpoint"
					>
				</div>	
				<div class="mui-input-row">
					<input 
						ref="jdmoneypoint" 
						type="text" 
						class="mui-input-clear" 
						placeholder="jdmoneypoint"
					>
				</div>	 -->
				<!-- <div class="mui-input-row">
					<input 
						ref="title" 
						type="text" 
						class="mui-input-clear" 
						placeholder="title"
					>
				</div>	 -->
		<!-- 		<div class="mui-input-row">
					<input 
						ref="company" 
						type="text" imgUrl
						class="mui-input-clear" 
						placeholder="company"
					>
				</div> -->
				<div class="mui-input-row">
					<input 
						ref="productname" 
						type="text" 
						class="mui-input-clear" 
						placeholder="productname"
					>
				</div>
				<div class="mui-input-row">
					<input 
						ref="cid" 
						type="text" 
						class="mui-input-clear" 
						placeholder="cid"
					>
				</div>
				<div class="mui-input-row">
					<input 
						ref="imgUrl" 
						type="text" 
						class="mui-input-clear" 
						placeholder="imgUrl"
					>
				</div>		
				<div class="mui-input-row">
					<input 
						ref="imgUrlbg" 
						type="text" 
						class="mui-input-clear" 
						placeholder="imgUrlbg"
					>
				</div>	
				<!-- <div class="mui-input-row">
					<input 
						ref="imgUrl2" 
						type="text" 
						class="mui-input-clear" 
						placeholder="imgUrl2"
					>
				</div>	
				<div class="mui-input-row">
					<input 
						ref="imgUrl3" 
						type="text" 
						class="mui-input-clear" 
						placeholder="imgUrl3"
					>
				</div>	
				<div class="mui-input-row">
					<input 
						ref="imgUrl4" 
						type="text" 
						class="mui-input-clear" 
						placeholder="imgUrl4"
					>
				</div> -->
				<!-- <div class="mui-input-row">
					<input 
						ref="text1" 
						type="text" 
						class="mui-input-clear" 
						placeholder="text1"
					>
				</div>
				<div class="mui-input-row">
					<input 
						ref="text2" 
						type="text" 
						class="mui-input-clear" 
						placeholder="text2"
					>
				</div> -->	
		<!-- 		<div class="mui-input-row">
					<input 
						ref="cprice" 
						type="text" 
						class="mui-input-clear" 
						placeholder="cprice"
					>
				</div>
				<div class="mui-input-row">
					<input 
						ref="oprice" 
						type="text" 
						class="mui-input-clear" 
						placeholder="oprice"
					>
				</div>	 -->

				<div class="mui-input-row">
					<input 
						ref="protast" 
						type="text" 
						class="mui-input-clear" 
						placeholder="protast"
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

			
			let dataObj = {}
			// let title = this.$refs.title.value
			// if(title){dataObj.title = title }
			// let username = this.$refs.username.value
			// if(username){ dataObj.username = username}
			// let company = this.$refs.company.value
			// if(company){ dataObj.company = company}
			let productname = this.$refs.productname.value
			if(productname){ dataObj.productname = productname}
			let cid = this.$refs.cid.value
			{ dataObj.cid = cid}
			// let nickname = this.$refs.nickname.value
			// if(nickname){ dataObj.nickname = nickname}
			// let grade = this.$refs.grade.value
			// if(grade){dataObj.grade = grade}
			// let creditpoint = this.$refs.creditpoint.value
			// if(creditpoint){dataObj.creditpoint = creditpoint}
			// let jdmoneypoint = this.$refs.jdmoneypoint.value
			// if(jdmoneypoint){dataObj.jdmoneypoint = jdmoneypoint}
			let imgUrl = this.$refs.imgUrl.value
			if(imgUrl){dataObj.imgUrl = imgUrl }
			let imgUrlbg = this.$refs.imgUrlbg.value
			if(imgUrlbg){dataObj.imgUrlbg = imgUrlbg }
			// let imgUrl2 = this.$refs.imgUrl2.value
			// if(imgUrl2){dataObj.imgUrl2 = imgUrl2 }
			// let imgUrl3 = this.$refs.imgUrl3.value
			// if(imgUrl3){dataObj.imgUrl3 = imgUrl3 }
			// let imgUrl4 = this.$refs.imgUrl4.value
			// if(imgUrl4){dataObj.imgUrl4 = imgUrl4 }
			// let text1 = this.$refs.text1.value
			// if(text1){dataObj.text1 = text1 }
			// let text2 = this.$refs.text2.value
			// if(text2){dataObj.text2 = text2 }
			// let cprice = parseFloat(this.$refs.cprice.value).toFixed(2)
			// if(cprice){dataObj.cprice = cprice }
			// let oprice = parseFloat(this.$refs.oprice.value).toFixed(2)
			// if(oprice){dataObj.oprice = oprice }
			let protast = this.$refs.protast.value
			if(protast){dataObj.protast = protast }
			
			// this.$http.post('userinfo',dataObj,{})
			// 	.then((response)=>{
			// 		console.log(response)
			// 		mui.toast(
			// 			`${response.body.msg}`,
			// 			{ duration:900, type:'div' }
			// 		)
			// 		// if(response.body.statuscode===1) {
			// 		// 	setTimeout(()=> {	
			// 		// 		this.$router.push({path:'/login'}) 
			// 		// 	},1000)
			// 		// }
				
			// 	},(response)=>{
			// 		console.log('noconnect',response.data)
			// 	}),

			// this.$http.post('indswpier',dataObj,{})
			// 	.then((response)=>{
			// 		console.log(response)
			// 		mui.toast(
			// 			`${response.body.msg}`,
			// 			{ duration:900, type:'div' }
			// 		)				
			// 	},(response)=>{
			// 		console.log('noconnect',response.data)
			// 	}),

			// this.$http.post('indbrandshow',dataObj,{})
			// 	.then((response)=>{
			// 		console.log(response)
			// 		mui.toast(
			// 			`${response.body.msg}`,
			// 			{ duration:900, type:'div' }
			// 		)				
			// 	},(response)=>{
			// 		console.log('noconnect',response.data)
			// 	}),

			// this.$http.post('boxlist',dataObj,{})
			// 	.then((response)=>{
			// 		console.log(response)
			// 		mui.toast(
			// 			`${response.body.msg}`,
			// 			{ duration:900, type:'div' }
			// 		)				
			// 	},(response)=>{
			// 		console.log('noconnect',response.data)
			// 	}),

			// this.$http.post('indscrollnewstext',dataObj,{})
			// 	.then((response)=>{
			// 		console.log(response)
			// 		mui.toast(
			// 			`${response.body.msg}`,
			// 			{ duration:900, type:'div' }
			// 		)				
			// 	},(response)=>{
			// 		console.log('noconnect',response.data)
			// 	}),

			// this.$http.post('sksection',dataObj,{})
			// .then((response)=>{
			// 	console.log(response)
			// 	mui.toast(
			// 		`${response.body.msg}`,
			// 		{ duration:900, type:'div' }
			// 	)				
			// },(response)=>{
			// 	console.log('noconnect',response.data)
			// }),

			// this.$http.post('newyearprolist',dataObj,{})
			// .then((response)=>{
			// 	console.log(response)
			// 	mui.toast(
			// 		`${response.body.msg}`,
			// 		{ duration:900, type:'div' }
			// 	)				
			// },(response)=>{
			// 	console.log('noconnect',response.data)
			// }),
			this.$http.post('newyearprolist2',dataObj,{})
			.then((response)=>{
				console.log(response)
				mui.toast(
					`${response.body.msg}`,
					{ duration:900, type:'div' }
				)				
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
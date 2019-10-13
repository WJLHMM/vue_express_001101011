<template>
	<div class="editmyinfo">
	    <h1 class="editmyinfoheader">编辑账号信息</h1>
		<div class="mui-input-row usernameinfo" >
			<label>用户名</label>
			<input
				ref = "username" 
				type="text" 
				class="mui-input-clear" 
				:value= 'parusername'
				disabled
			>
		</div>
		<p>用户名不可以修改</p>
	    <div class="mui-input-row">
	    	<label>昵称</label>
			<input 
				ref="nickname" 
				type="text" 
				class="mui-input-clear" 
				placeholder="nickname"
			>
		</div>
		<p>最大长度20</p>
		<div class="mui-button-row">
			<button type="button" class="mui-btn  mui-btn-success" @click = 'stopchangenickname'>取消</button>
			<button type="button" class="mui-btn  mui-btn-danger" @click = 'changenickname' >确认</button>
		</div>
		
		
	</div >

</template>

<script>
	
export default {

	data() {

		return {
			usernamedata:this.parusername
		}
	},

	methods: {
		stopchangenickname() {
			this.$emit('quitmyinfopageinmyinfo',false)
		},

		changenickname() {
			let username = this.$refs.username.value
			let nickname = this.$refs.nickname.value
			// console.log(username,nickname)
			this.$http.post('editmyinfo',{username,nickname},{})
				.then((response)=>{
					console.log(response)
					mui.toast(
						`${response.body.msg}`,
						{ duration:900, type:'div' }
					)
				},(response)=>{
					console.log('noconnect',response.data)
			    })
			this.$emit('quitmyinfopageinmyinfo',false)
		}

	},

	computed: {
	   
	},
	props:['parusername'],
	created() {
	},
	updated() {

	}
}
</script>

<style scoped lang="less">
	.editmyinfo {
		top:30%;
		left:10%;
		z-index:102;
		width: 300px;
		height:500p;
		position: absolute; 
		border:1px solid green;
		text-align: center;
		padding:10px 20px;
		background: #fff;
		font-size: 14px;
		.editmyinfoheader {
			color:#0f0f0f;
			margin-bottom: 10px;
			font-size: 16px;
			padding-bottom: 6px;
			border-bottom: 1px solid #ccc;

		}
		.usernameinfo {
			background-color: #ccc;
		}
		p{
			margin-bottom: 10px;
			text-align: left;
		}
		.mui-input-row {
			border:1px solid #ccc;

			input {
				border-left: 1px solid #ccc;
			}
			input::-webkit-input-placeholder {
				padding-left:30px;
				opacity:0.5;
			}
			margin-bottom: 10px;
		}
		.mui-button-row {
			.mui-btn {
				margin-right: 30px;
			}
		}

	}
</style>
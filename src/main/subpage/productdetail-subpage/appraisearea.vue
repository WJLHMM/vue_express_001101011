<template>	
<div class="appraiseareawrapper">
	<div class="appraisetitle">
		<p class="left">
			<span class="appraisename">评价</span>
			<span class="goodappaise">好评 {{parappraiseinfoitem.goodappraiseratio}}</span>
		</p>
		<p class="right">
			<span class="totalappaise">共 {{parappraiseinfoitem.goodappraisenum}}万+ 条</span>
			<span class="mui-icon mui-icon-arrowright"></span>
		</p>
	</div>
	<ul class="appraiseareagrade">
		<li class="goodappaise">好评（{{parappraiseinfoitem.goodappraisenum}}万+）</li>
		<li class="middleappaise">中评（{{parappraiseinfoitem.neuappraisenum}}+）</li>
		<li class="badappaise">差评（{{parappraiseinfoitem.badappraisenum}}+）</li>
		<li class="group">有圈({{parappraiseinfoitem.momentsnum}}万+)</li>
	</ul>
	<div class="appraisearea" v-for="item in parappraiseinfoitem.commentinfo">
		<div class="userinfo">
			<p class="username">
				<span >{{item.nickname|usernameomit}}</span>
				<span 
					class="mui-icon mui-icon-star-filled" 
					v-for="i in item.commentstars"
					:data-index="i"

				></span>
				
			</p>
			<p class="appraisedate">{{item.commendate}}</p>
		</div>
		<div class="appraisecontent">
			{{item.commentcontent}}
		</div>
	</div>
	<div class="appraiseareaothers">
		<button class="checkall">查看全部评价</button>
	</div>
</div>
</template>

<script>
import Vue from 'vue'
Vue.filter('usernameomit',function(filtermsg){
	//这里注意各种字符串API，有些事直接修改str,例如charAt()，而有些是返回一个截取的字符串，或数组，本案中采取后一种的api
	return filtermsg.substr(0,1)+'***'+filtermsg.substr(-1,1)
});	
export default {
	data() {
		return {
		}
	},
	props:['parappraiseinfoitem'],
	methods: {

	},
	created(){
		// console.log(this.parappraiseinfoitem)
	}

}
</script>

<style scoped lang="less">
.appraiseareawrapper {
	width:100%;
	
	padding-bottom: 10px;
	.appraisetitle {
		width:100%;
		height:46px;
		border-bottom:1px solid #e8e8ed;
		padding:0 10px;
		display: flex;
		justify-content: space-between; 
		align-items: center;
		.left {
			font-weight: 400;
			span:nth-child(1){
				font-size: 16px;
				color:#333;
			};
			span:nth-child(2){
				font-size: 12px;
				color:#e4393c;;
			};
		}
		.right {
			font-size:12px;
			font-weight: 400;
		}
	}
	.appraiseareagrade {
		width:100%;
		height:46px;
		display: flex; 
		justify-content: space-around; 
		align-items: center;
		font-size: 12px;
		padding:0 10px;
		li {
			background: #fdf0f0;
			height:26px;
			text-align: center;
			line-height: 26px;
		}
	}
	.appraisearea {
		width: 100%; 
		display:flex;
		flex-direction: column; 
		align-items: center; 
		justify-content: space-between;
		padding:0 10px;
		border-bottom:1px solid #e8e8ed;
		margin-bottom:20px;   
		.userinfo {
			width:100%;
			height:20px;
			display: flex; 
			justify-content: space-between; 
			align-items: center;
			margin-bottom:6px;
			span {
				font-size: 12px; 
				color:#ff9600;
				height: 100%;
				line-height: 100%;
			}
			span:nth-child(1){
				display: inline-block;
				color:#999;
				width: 40px; 
				// overflow: hidden;
				// white-space: nowrap;
				// text-overflow: ellipsis; 
			};

			.appraisedate {
				color:#999;
				font-size: 12px;
			}
		}
		.appraisecontent {
			width: 100%; 
			height:45px;
			line-height: 15px;
			color:#000;
			font-size: 14px;
			display: -webkit-box;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			text-overflow: -o-ellipsis-lastline; 
		}
	}
	.appraiseareaothers{
		margin-top: 40px;
		width:100%;
		position:relative;
		.checkall {
 			position: absolute;
            top: 50%;
            left: 50%;
            transform:translate(-50%, -50%);
            border-radius:16px;
		}
	}

}
</style>
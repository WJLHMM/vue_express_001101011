
<template>
	<div class="productshowcontainer">
		<div class="mui-card">
			<!-- 注意属性v-if如果不加，尽管页面可以渲染显示，但是会不断报错backend.js:1 GET http://localhost:3100/undefined 404 (Not Found) -->
			<div 
				class="mui-card-header mui-card-media" 
				:style="{
					'height':'375px',
					'background-image':'url('+ parproductitem.imgurl +')'
				}"
				v-if="parproductitem.imgurl"
			>
				
			</div>
			<div class="productbreif">
				<div class="productbreifleft">
					<img :src="parproductitem.isselfselling" alt="">
					<span class="productbreiflefttext">
						{{parproductitem.productbreif}}
					</span>
				</div>
				<div class="productbreifright">
					<span class="mui-icon-extra mui-icon-extra-heart"></span>
					<p>关注</p>
				</div>
			</div>
			<div class="giftremind">
				
			</div>
			<div class="pricewrap">
				<div class="priceinfo">
					<span class="currency">￥</span>
					<span class="pricedata1">{{parproductitem.price}}</span>
					<span class="pricedata2">.00</span>
				</div>
				<button class="pricedownshow">降价提醒</button>
			</div>
			<div class="easebuy">
				<div class="easebuyleft">
					<div class="easybuyimg">
						<span class="mui-icon-extra mui-icon-extra-heart"></span>
						<span  class="easybuytext">自营放心购</span>
					</div>
				    <span class="easereturn">&nbsp;免举证退换货</span>
				</div>
				<button type="button" class="btnmore">···</button>
			</div>
			<div class="promotion">
					<div class="promotiontitle">促销</div>
					<ul class="promotioncontent">
						<li class="gift" v-show="parproductitem.possiblegift">
							<span class="giftimg">赠品</span>
							<span class="giftcontent">{{parproductitem.possiblegift}}</span>
						</li>
						<li class="changpro" v-show="parproductitem.changepro">
							<span class="changproimg">换购</span>
							<span class="changprocontent">{{parproductitem.changepro}}</span>
						</li>
						<li class="voucher">
							<span class="vouchertitle">满额返券</span>
							<span class="vouchercontent">{{parproductitem.fullreplacement}}</span>
						</li>
						<li class="promotionpackage" v-show="parproductitem.promotionpackagecontent">
							<span class="promotionpackagetitle">优惠套餐</span>
							<span class="promotionpackagecontent">{{parproductitem.promotionpackagecontent}}</span>
						</li>
					</ul>
					<button class="promotionmore">···</button>
			</div>
			
			<div class="goodsinfoselected">
				<div class="goodsinfoselectedtitle">已选</div>
				<div class="goodsinfoselectedwrap">
					<span class="goodsinfo">{{parproductitem.goodsinfo}}</span>
					<span class="goodsservice">{{parproductitem.goodsservice}}</span>
				</div>
				<button class="goodsinfoselectedmore">···</button>
			</div>	
			<div class="detail_gap"></div>
			<div class="deliveryaddress">
				<div class="address">
					<span class="title">送至</span>
					<span class="address">{{parproductitem.address}}</span>
					<button >···</button>
				</div>
				<div class="deliveryinfo">
					<span class="goodstitle"></span>
					<p class="goodsstatus">
						<span class="status">现货</span>
						<span>23:00前下单,预计<b>明天({{tomorrowdate|tomorrowdateform}})</b>送达</span>
					</p>
					<button type=""></button>
				</div>
				<div class="goodsweight" v-show="parproductitem.weight">
					<span class="goodsweighttitle">重量</span>
					<p class="goodsweightstatus">
						{{parproductitem.weight}}
					</p>
					<button></button>
				</div>
			</div>
			<div class="detail_gap"></div>
		</div>

	</div>
</template>

<script>
import Vue from "vue"
Vue.filter('tomorrowdateform',function(date){
		let MonthNum = date.getMonth()+1
		let DayNum = date.getDate()
		if(MonthNum<10) {
			MonthNum = '0' + MonthNum
		}
		if(DayNum<10) {
			DayNum = '0' + DayNum
		}
		// 奇怪下面的表达show typeError: date.getDate(...) is not a function，改成正常的if else没有问题
		// (MonthNum<10)&&(MonthNum = '0' + MonthNum)
		// (DayNum<10)&&(DayNum = '0' + DayNum)
		return `${MonthNum}月${DayNum}日`
		// return date.toLocaleDateString() //如果需要简单直接使用内置Api
});	

export default {
	data(){
		return {
			// tomorrowdate:new Date().setDate(new Date().getDate()+1)
			tomorrowdate:new Date()
		}
	},
	methods: {
		
	},
	components: {
		

	},
	created(){
		//确定明天的时间数据
		this.tomorrowdatedd = this.tomorrowdate.setDate(this.tomorrowdate.getDate()+1)
	},
	props:['parproductitem']
}
</script>

<style scoped lang='less'>
	.productshowcontainer {
		margin-top: 50px;
		padding:0 6px;
		width: 100%;
		background: #e8e8ed;
		.mui-card {
			margin: 0;
			padding:0;
			width:100%;
			.mui-card-header {
				width: 100%; 
				height: 100%;
				background-size: contain;
				background-repeat: no-repeat;
			}
			.productbreif {
				width: 100% ;
				height: 76px;
				padding: 12px 10px 10px 10px;
				display: flex;
				justify-content: space-between;
				-ms-align-items: center;
				align-items: center;
				.productbreifleft {
					width: 82%; 
					line-height: 18px;
					img {
						width: 25.7px;
						height: 15px;
					}
					span {
						width: 100%;
						font-size: 16px;
					}
			    }	
		    }
			.pricewrap {
				display: flex; 
				justify-content: space-between;  
				align-items: center;
				height: 24px;  
				padding: 0px 10px;
				.priceinfo {
					color:red;
					height: 24px; 
					display: flex; 
					align-items: center;
					span:nth-child(2){
						font-size: 18px;
						font-weight:400;
					}
				}
				.pricedownshow {
					height: 20px;
					width: 60px;
					font-size: 12px;
					text-align: center;
					line-height: 20px;
					display:inline-block;
					padding: 0;
				}
			}
			.easebuy {
				width: 100%;
				display: flex;
				justify-content: space-between; 
				align-items: center;
				height: 35px;
				padding: 0px 10px;
				background: #fbf0fd;
				.easebuyleft{
					width: 90%; 
					height: 100%;
					display: flex;
					align-items: center;
					.easybuyimg {
						height: 35px;
						display: flex;
						align-items: center;
						color: #e93b3d;
						.mui-icon-extra-heart {
							font-size: 18px;
						}
						.easybuytext {
							height: 35px;
							line-height: 35px;
					}
					}
					.easereturn {
						color: #e93b3d;
						line-height: 35px;
						font-size: 12px;
						height: 35px;
					}

				}
				.btnmore {
					width: 10%;  
					height: 35px;
					border: none;
					color: #e93b3d; 
					line-height: 35px; 
					font-size: 30px;
					padding: 0;
					background: #fbf0fd;
				}

			}
			.promotion {
				width: 100%;  
				height: 94px;
				display: flex;
				justify-content: space-between;  
				align-items: flex-start;
				padding: 4px 10px;
				.promotiontitle {
					width: 10%;
					font-size: 12px;
					color: #333;
					padding-top: 8px;
				}
				.promotioncontent {
					width: 80%;
					height: 100%;
					display: flex;
					flex-direction: column; 
					align-items: center;
					justify-content: space-around;
					.gift,.voucher,.promotionpackage{
						height: 16px;
						width: 100%;
						padding-right: 4px;
						display: flex; 
						align-items: center;
						margin-bottom: 4px;
						span:nth-child(1) {
							color: #e93b3d;
							border: 1px solid #e93b3d;
							font-size: 12px;
							font-weight: 400;
							height: 16px;
							line-height: 16px;
							padding: 0 2px;
							text-align: center;
							display: block;
							margin-right: 4px; 
							white-space: nowrap;

						}
						span:nth-child(2) {
							font-size: 12px;
							overflow: hidden;
							text-overflow:ellipsis;
							white-space: nowrap;
							height: 16px;
							line-height: 16px;
							color: #333;
						}
					}
				}
				.promotionmore{
					padding: 0;
					border: 0;
					font-size: 30px;

				}
			}
			.detail_gap {
			    padding-top: 10px;
			    background: #e8e8ed;
			    margin: -1px 0;
			    position: relative;
			    z-index: 2;
			}
			.goodsinfoselected{
				height: 64px;
				width: 100%;
				display: flex;
				justify-content: flex-start; 
				align-items: center;
				padding: 0px 10px;
				.goodsinfoselectedtitle {
					width: 10%;
					color:#333;
					font-size: 12px;
					height: 50%;
				}
				.goodsinfoselectedwrap{
					width: 80%;
					display: flex;
					flex-direction: column; 
					justify-content: space-around;
					span {
						overflow: hidden; 
						white-space: nowrap; 
						text-overflow: ellipsis;
						line-height: 20px;
						font-size: 12px;
						color:#333;
						
					}

				}
				.goodsinfoselectedmore{
					width: 10%;
					font-size: 30px;
					border: 0;
					padding: 0;
					height: 100%;
					vertical-align: top;
				}
			}
			.deliveryaddress {
				display: flex; 
				flex-direction: column;
				width: 100%; 
				height: 94px;
				padding: 10px 10px;
				.address,.deliveryinfo,.goodsweight {
					display: flex; 
					justify-content: space-between; 
					line-height: 20px;
					font-size: 12px;
					color: #333;
					span:nth-child(1){
						width: 10%;
						display: inline-block; 
					}
					.address,.goodsstatus,.goodsweightstatus {
						width: 80%;
						.status {
							color:#e93b3d; 
						}

					}
					.address{
						font-size: 14px;
					}
					button {
						width: 10%;
						border: 0;
						padding: 0;
						font-size:30px;
						height: 20px;
						display: inline-block;
						line-height: 20px;
					}
				}
			}
			
		}
	}
</style>
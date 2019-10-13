<template>
	<router-link to="/productdetail" tag="a">
		<div class="productctlistitem" v-for="item in parproductlist" :key="item.id">
			<div class="proimg">
				<img class="proimgdetail" :src="item.imgurl">
			</div>
			<div class="prodescwrapper">
				<div class="prodesc">
					<p class="proname">{{item.productbreif}}</p>
				</div>
				<div class="prosize">
					<span class="memory_size1">{{item.memory_size1}}</span>
					<span class="memory_size2">{{item.memory_size2}}</span>
					<span class="prosize">{{item.prosize}}</span>
				</div>
				<div class="uprice">
					<span class="currency">￥</span>
					<span class="price">{{item.price}}<small>.00</small></span>
					<div class="possiblegift" v-show="item.possiblegift">
						<img :src="item.possiblegift">
					</div>
				</div>
				<div class="prosellerinf">
					<div class="isselfselling" v-show="item.isselfselling">
						<img :src="item.isselfselling">
					</div>
					<div class="easebuy" v-show="item.easebuy">
						<img :src="item.easebuy">
					</div>
					<div class="stockinf" v-show="item.stockinf">
						<img :src="item.stockinf">
					</div>
					<div class="proappraise">
						<span class="appraisevolume">{{item.appraisevolume}}</span>
						<span class="goodapprasise" v-show="item.appraisevolume">{{item.appraisevolume}}</span>
					</div>
				</div>
				<div class="sellerinfo">
					<p class="proseller">{{item.proseller}}<span class="mui-icon mui-icon-forward"></span></p>
					<p class="secondhandpro">同款二手
						<span class="mui-icon mui-icon-forward"></span>
					</p>
				</div>
			</div>
		</div>
	</router-link >

</template>

<script>
	
export default {

	data() {

		return {

		}
	},

	methods: {


	},

	computed: {
	   
	},
	props:['parproductlist'],
	created() {
		
	}
}
</script>

<style scoped lang="less">

.productctlistitem {
	width: 100%;
	height:144px;
	margin-top:130px;
	display: flex;
	justify-content: space-between; 
	align-items: center;
	.proimg {
		width:120px;
		height:120px;
		.proimgdetail {
			width:120px;
			height:120px;
		}
	}
	.prodescwrapper {
		width:100%;
		height:100%;
		display: flex;
		flex-direction: column; 
		align-items: center; 
		justify-content: center;
		padding-right: 8px;
		border-bottom: 1px solid #f2f2f7;
		.prodesc {
			width:100%;
			height:40px;
			.proname {
				width:100%;
				height:38px;
				color: #333;
				line-height:19px;
				font-size:14px;
				display: -webkit-box;
				text-overflow:ellipsis;
				overflow: hidden;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				text-overflow: -o-ellipsis-lastline;
			}
		}
		.prosize {
			width:100%;
			height:15px;
			font-size: 12px;
			span {
			    color: #999;
    			background-color: #f2f2f7;
			}
		}
		.uprice {
			display: flex;
			width:100%;
			height:20px;
			margin:8px 0 4px 0;
			justify-content: flex-start;
			align-items: center;
			.currency {
				color:red;
				font-size: 12px;
			}
			.price {
				color:red;
				font-size: 18px;
				margin-right: 10px;
				small {
					font-size: 12px;
				}
			}
			.possiblegift {
				width: 14px;
				height:14px;
				img {
					width: 14px;
					height:14px;
				}
			}
		}
		.prosellerinf {
			display: flex; 
			width:100%;
			height:20px;
			justify-content: flex-start;
			align-items: center;
			margin-bottom: 8px;
			div {
				margin-right:6px;
			}
			.isselfselling {
				width: 24px; 
				height:14px; 

				img{
					width: 24px; 
					height:14px;
				}
			}
			.easebuy,.stockinf {
				width: 34px; 
				height:14px;   
				img{
					width: 34px; 
					height:14px;
				}
			}
			.proappraise {
				width: 100%; 
				height:14px; 
				font-size: 12px;
			}

		}
		.sellerinfo {
			display: flex; 
			width:100%; 
			font-size: 12px;
			justify-content: space-between;
			align-items: center;
			p {
				display: flex; 
				align-items: center;
				span {
					font-size: 12px;
				}
			}
		}
	}
		
		
	
		
	
	
	

}
	
</style>
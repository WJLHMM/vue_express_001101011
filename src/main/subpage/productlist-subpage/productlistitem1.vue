<template>
	<router-link to="/productdetail" class="productctlistitem" tag="div">
		<div class="proimg">
			<img class="proimgdetail" src="https://img14.360buyimg.com/mobilecms/s316x316_jfs/t1/15900/19/5542/358122/5c4122caEefdb3f68/613efa2b16afc230.jpg!q70.dpg.webp">
		</div>
		<div class="prodescwrapper">
			<div class="prodesc">
				<p class="proname">荣耀8X 千元屏霸 91%屏占比 2000万AI双摄 6GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待</p>
			</div>
			<div class="prosize">
				<span class="memory_size1">6GB</span>
				<span class="memory_size2">64GB</span>
				<span class="prosize">6.5英寸</span>
			</div>
			<div class="uprice">
				<span class="currency">￥</span>
				<span class="price">1599<small>.00</small></span>
				<div class="possiblegift">
					<img src="//img11.360buyimg.com/jdphoto/s28x28_jfs/t13501/220/748441324/1050/f2add5a2/5a128a72N857b1c57.png">
				</div>
			</div>
			<div class="prosellerinf">
				<div class="isselfselling">
					<img src="//img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png">
				</div>
				<div class="easebuy">
					<img src="//img11.360buyimg.com/jdphoto/s68x28_jfs/t28474/79/699858248/2214/bced3f94/5bfb58faNfdbaaf9e.png">
				</div>
				<div class="stockinf">
					<img src="//img11.360buyimg.com/jdphoto/s68x28_jfs/t7507/91/1460204614/1824/e64a9c4b/599cf570Ncd27b2f9.png">
				</div>
				<div class="proappraise">
					<span class="appraisevolume">128万条评价</span>
					<span class="goodapprasise"v-show="false">好评率98%</span>
				</div>
			</div>
			<div class="sellerinfo">
				<p class="proseller">荣耀京东自营旗舰店<span class="mui-icon mui-icon-forward"></span></p>
				<p class="secondhandpro">同款二手
					<span class="mui-icon mui-icon-forward"></span>
				</p>
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
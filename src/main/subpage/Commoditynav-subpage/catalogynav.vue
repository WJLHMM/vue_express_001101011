<template>
	<div class="catalogycontainer">
		<div class="catalogynavheader">
			<span>{{parcatalogynavheader}}</span>
		</div>
		<div class="catalogynavdeteils">
			<ul class="catalogynavitemwrap">
				
				<router-link :to="'/productlist?item=' + item.productname"
					tag="li"
					class="catalogyitem" 
					v-for="(item,index) in parcatalogyListdetail" 
					:key="item.cid"
				>
					<img :src="item.imgurl">
					<span>{{item.productname}}</span>
				</router-link>
			</ul>
		    
		</div>

	</div>

</template>

<script>

export default {
	data() {
		return {
			// catalogynavheader:null
		}
	},
	
	props:['parcatalogyListdetail','parcatalogynavheader'],
	updated(){

	}

}
</script>

<style lang="less" soped>
	.catalogycontainer {
		width: 78%;
		//对于固定定位，实际宽度是按照全屏考虑比例
		max-width:550px;
		font-size: 14px;
		position:fixed;
		display:table;
		.catalogynavheader {
			height:46px;
			width: 100%;
			line-height:46px;
		  	background-color: #fff;
			border-right:1px solid #f2f2f2;
			border-bottom:1px solid #f2f2f2;
			border-top:1px solid #f2f2f2;
			//为防止bug 需要在fixed下面来一个绝对定位，脱离fixed文档
			position:absolute;
			left:86px;
			span {
				width: 550px;
				padding-left:10px;
			}
		}
		.catalogynavdeteils {
			width: 100%;
			padding-left:10px;
			padding-top:10px;
			margin-top: 46px;
			position:absolute;
			left:86px;
			.catalogynavitemwrap {
				width:100%;;
				display: flex;
				flex-wrap: wrap;
				position:relative;
				.catalogyitem {
					width:33%;
					height:107px;
					display: flex;
					flex-direction: column;
					align-items: center;
					img {
						width: 70px;
						height:70px;
					}
				}
			}
		}

	}
</style>
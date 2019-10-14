
<template>
	<div class="mainadv">
		<div class="indbrandshow1" v-for="item in parindbrandshow " :key="item._id">
			<div class="indbrandshow1img1" >
	  			<img :src="item.imgUrl" class="brandshowimg"/>
	  		</div>
	  		<div class="indbrandshow1img1" >
	  			<img :src="item.avaterurl2" class="brandshowimg"/>
	  		</div>
	  		<div class="indbrandshow1img1" >
	  			<img :src="item.avaterurl3" class="brandshowimg"/>
	  		</div>
	
	  	</div>
	  	<div class="indbrandshow2">
	  		<div class="indbrandshow2img1">
	  			<img src="https://m.360buyimg.com/mobilecms/s750x230_jfs/t1/21479/21/4911/48057/5c35b55aE3faf9dd0/d7c425cce2bdffb7.png!q70.jpg.dpg" class="brandshowimg2"/>
	  		</div>
	  	</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			indswpier:[]
		}
	},
	methods: {
	
	},
	props:['parindbrandshow'],
	created(){
		
	}
}
</script>

<style scoped lang='less'>
.mainadv{
	height: 150px;
	width: 100%;
	display:flex;
	flex-direction:column;
	.indbrandshow1 {
		width:100%;
		height:66%;
		display: flex;

		.indbrandshow1img1 {
			width:33.33%;
			height:100%;
			.brandshowimg {
				width: 100%;
				height:100%;
			}
		}

	}
	.indbrandshow2 {
		width: 100%;
		height: 34%;
		.indbrandshow2img1{
			width: 100%;
			height:100%;
			.brandshowimg2 {
				width: 100%;
				height:100%;
			}
		}
	}
}
	
</style>
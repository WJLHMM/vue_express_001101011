
<template>
<div class="newyearbordpro2">
	<div 
		class="newyearbordproitem newyearbordproitem0" 
		v-for="(item,index) in parnewyearprolist2" 
		:key="index"
		:style="{'background':'url(' + item.imgUrlbg +')','background-size': 'contain','background-position':'center center'}"
	>
		<div class="itempiccon">
			<img class="itempic" :src="item.imgUrl"/>
		</div>
		<div class="proname">{{item.proname}}</div>
		<div class="protast">{{item.protast}}</div>
	</div>
</div>
</template>

<script>
export default {

    data(){
		return {
			
		}
	},
	methods: {
	
	},
	props:['parnewyearprolist2'],
	created(){
		
	}
}
</script>

<style scoped lang='scss'>


.newyearbordpro2 {
	width:100%;
	height:124px;
	display:flex;
	padding-top: 4px;
	justify-content:space-between;
	flex-wrap:wrap;
	.newyearbordproitem {
		width:24%;
		height:120px;
		display:flex;
		flex-direction:column;
		align-items:center;
		margin-bottom: 4px;
	  	background-size: contain;
	  	background-position:center center;
		.itempiccon {
			width:100%;
			height:80px;
			.itempic {
				width:100%;
				height:80px;
			}
		}
		.proname {
			width:100%;
			height:14px;
			color:#fff;
			line-height:14px;
			text-align:center;
			font-size:13px;
			margin-top: 6px;
		}
		.protast {
			width:100%;
			height:13px;
			color:#fff;
			line-height:13px;
			text-align:center;
			font-size:10px;
		}
	}
}


	
</style>

<template>
	<div class="newyearbordpro">
		<div class="newyearbordproitem" v-for="(item,index) in parnewyearprolist" :key="index">
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
	props:['parnewyearprolist'],
	created(){
		
	}
}
</script>

<style scoped lang='scss'>
.newyearbordpro {
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
		background:url("https://m.360buyimg.com/mobilecms/s261x360_jfs/t1/10914/10/8294/2143/5c34a802E26f1448e/1aa7c91c4f4fcd87.png!q70.jpg");
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
			margin-top: 6px;
			width:100%;
			height:14px;
			color:#fff;
			line-height:14px;
			text-align:center;
			font-size:13px;
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
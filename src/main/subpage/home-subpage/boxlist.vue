
<template>
	<ul class="boxlist" >
		<li class="boxlistitem"  v-for="item in parboxlist" :key="item.id" >
			<img class="boxlistimg" :src="item.imgUrl" />
			<div class="boxlisttitle">{{item.title}}</div>
		</li>
	</ul> 
</template>

<script>
export default {
	data(){
		return {
			
		}
	},
	methods: {
	
	},
	props:['parboxlist'],
	created(){
		
	}
}
</script>

<style scoped lang='less'>
.boxlist {
	width:100%;
	height:162px;
	display:flex;
	flex-wrap:wrap;
	justify-content: space-between;
	align-items: center;
	.boxlistitem{
		width:20%;
		height:40%;
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.boxlistimg {
			width: 60%;
			height:60%;
		}
		.boxlisttitle {
			margin-top:6px;
			text-align: center;
			font-size: 12px;
		}
	}

}
	
</style>
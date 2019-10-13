
<template>
	<div class="sksection">
		<div class='skpro'>
			<div class="skprolist" v-for="item in parsksection" :key="item.id">
				<div class="skprolistitem">
					<img :src="item.imgUrl">
				</div>
				<div class="cprice">￥{{item.cprice}}</div>
				<div class="oprice">￥{{item.cprice}}</div>
			</div> 
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
	props:['parsksection'],
	created(){
		
	}
}
</script>

<style scoped lang='scss'>
.sksection{
	.skpro {
		width:100%;
		height:100px;
		display:flex;
		align-items:center;
		padding-top:3px;
		.skprolist {
			width:20%;
			height:100px;
			display:flex;
			flex-direction:column;
			align-items:center;
			.skprolistitem{
				width:100%;
				height:70px;
				img {
					width:100%;
					height:70px;
				}
			}
		}

		.cprice {
			color:red;
			font-size:16px;
			font-weight:bold;
		}
		.oprice {
			font-size:12px;
			text-decoration:line-through;
		}
	}
}

	

	
</style>
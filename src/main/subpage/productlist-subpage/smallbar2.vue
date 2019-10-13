
<template>
	<div class="sortbarwrapper">
		<ul class="sortbar">
			<li class="sortitem">
				<span>新品</span>
			</li>
			<li class="sortitem">
				<span>品牌<span class="mui-icon mui-icon-arrowdown"></span></span>
				
			</li>
			<li class="sortitem">
				<span>分辨率<span class="mui-icon mui-icon-arrowdown"></span></span>
				
			</li>
			<li class="sortitem">
				<span>网络制式<span class="mui-icon mui-icon-arrowdown"></span></span>
				
			</li>
		</ul>
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
	components: {
	},
	created(){
		
	}
}
</script>

<style scoped lang='less'>
	.sortbarwrapper {
		position: fixed;
		top: 90px;
		width: 100%;
		height: 40px;
		background: #fff;
		border-bottom: 1px solid #808080;
		max-width: 636px;
		.sortbar {
			position: absolute;
			left: 0;
			display: flex;
			justify-content: space-around; 
			align-items: center;
			width: 100%;
	      	height: 40px;
			.sortitem {
				width: 78px; 
				height: 26px;
				flex: 1;
				line-height: 26px;
				text-align: center;
				span {
					display: inline-block;
					background: #f0f0f0;
					
				}
				
			}
		}
	}
</style>
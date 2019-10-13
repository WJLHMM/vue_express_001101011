
<template>
	<div class="sortbarwrapper" 
		:style="{
			'top':topheightset,
			'z-index':zindexset,
			'width':widthset,
			'border-bottom':borderbottomset,
			'max-width':maxwidthset
		}"
			
	>
		<ul class="sortbar" 
		
		>
			<li class="sortitem" v-for="item in datalist" :key="item.title">
				{{item.title}}
				<span :class="'mui-icon' + ' ' + item.icon">
					
				</span>
			</li>
			
		</ul>
	</div>
</template>

<script>


export default {

	data(){
		return {
			datalist:[],
			topheightset:'',
			zindexset:'',
			widthset:'',
			borderbottomset:'',
			leftset:'',
			maxwidthset:''
		}
	},
	methods: {
		
	},
	components: {
	},
	created(){
		if((this.$route.fullPath).indexOf('productlist')){
			this.datalist = [
				{title:'综合',icon:'mui-icon mui-icon-arrowdown'},
				{title:'销量',icon:''},
				{title:'服务',icon:'mui-icon mui-icon-arrowdown'},
				{title:'筛选',icon:'mui-icon-extra mui-icon-extra-filter'}
			],
			this.topheightset = '50px',
			this.maxwidthset='636px'
		}else if(this.$route.fullPath=='/productdetail'){
			this.datalist =[
				{title:'商品',icon:'mui-icon mui-icon-location-filled'},
				{title:'评价',icon:''},
				{title:'详情',icon:''},
				{title:'推荐',icon:''}

			],
			this.topheightset = '6px',
			this.zindexset =100,
			this.widthset ='63%',
			this.borderbottomset =0
			this.leftset ='140px',
			this.maxwidthset='470px'
		}
		
	}
}
</script>

<style scoped lang='less'>
	.sortbarwrapper {
		position: fixed;
		top: 50px;
		width: 100%;
		height: 40px;
		background: #fff;
		border-bottom: 1px solid #808080;
		left:0;
	    right:0;
	    bottom:0;
		margin-left: auto;
		margin-right: auto;
		.sortbar {
			position: absolute;
			left: 0;
			display: flex;
			justify-content: space-around; 
			align-items: center;
			width: 100%;
	      	height: 40px;
	      	padding: 0 10px;
			.sortitem {
				width: 100%; 
				height: 100%;
				flex: 1;
				line-height: 40px;
				text-align: center;
				span {
					font-size: 14px;
				}
			}
		}
	}
</style>
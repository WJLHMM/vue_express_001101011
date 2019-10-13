
<!-- 本菜单为单向向上的菜单 -->
<template>
	<div class="totalmenu">
		<ul class="itemswrapper" >
			<router-link :to="'/commoditynav/' + index + '/' + item.cid" tag='li'
				v-for="(item,index) in parcatalogyList" 
				class="item"
				:key="item.cid"
				@click.native="menushow(index)" 
			>
				{{item.name}}
			</router-link>
		</ul>
	</div>
</template>

<script>


export default {

	data(){
		return {
			itemtopest:0
			
		}
	},
	methods: {
		menushow(i){
			//确定ul的相对位置，本案是以header的下沿为基准。
			//1.确定ul li的dom节点
			let itemlist = document.getElementsByClassName('item')
			let itemswrapper = document.getElementsByClassName('itemswrapper')
			// 2对于选中item的节颜色，背景，左边框高亮，同时其余item变成正常，同时确定此刻在基准位置item的索引号
			// 2.1其余item变成正常
			for(let i=0;i<itemlist.length;i++){
				itemlist[i].style.color='#333'
				itemlist[i].style.backgroundColor='#f2f2f2'
				itemlist[i].style.borderRight='#f2f2f2'
				// 2.2确定此刻在基准位置item的索引号
				if(itemlist[i].getBoundingClientRect().top==50){
					this.itemtopest = i
				}
			}
			// 2.3对于选中item的节颜色，背景，左边框高亮
			itemlist[i].style.color='red'
			itemlist[i].style.backgroundColor='#fff'
			itemlist[i].style.borderRight='#fff'
			// console.log(`translateY(${itemswrapper[0].getBoundingClientRect().top-50-(i-this.itemtopest)*46}px)`)
			// 3.ul菜单的移动。 以header吧下沿为基准，每次变动的距离为(i-itemtopest)*46,及，item之间间隔数量与item高之积
			if(i<28){//当ul向上移动大于最后一屏幕高度时候，保持菜单ul的移动
			// 3.1故绝对距离变为ul与下沿的差值itemswrapper[0].getBoundingClientRect().top-50 减去变动距离
				itemswrapper[0].style.transform=`translateY(${itemswrapper[0].getBoundingClientRect().top-50-(i-this.itemtopest)*46}px)`
			}else {//当ul向上移动剩余最后一屏幕高度时候，停止菜单ul的移动
				itemswrapper[0].style.transform=`translateY(-1242px)`
			}
			itemswrapper[0].style.transition="all 0.5s ease"
		}
	},
	props:['parcatalogyList'],
	components: {
		
	},
	created(){
	}
}
</script>

<style scoped lang='less'>
.totalmenu {
	width: 86px;
	height: 1846px;
	/* background: blue; */
	padding: 0;
	.itemswrapper {
		width: 86px;
		height: 1846px;
		/* 注意定位一直是relative 到这层改为ab,所以防止错位 top,left 要设置 */
		top: 0;
		left: 0;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items:center; 
		white-space: wrap;
		margin: 0;
		padding: 0;
		.item {
			display: inline-block;
			width: 86px;
			height: 46px;
			color: #333;
			text-align: center;
			line-height: 46px;
			padding: 0;
			background-color:#f2f2f2;
			border-bottom: 1px solid #888;
			border-right: 1px solid #888;
		}
		li:nth-child(1){
			color: red;
		}
	}
	
}
	
</style>
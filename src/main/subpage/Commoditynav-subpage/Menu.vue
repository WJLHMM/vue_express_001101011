
<!-- 本菜单为以中间为中心的菜单一移动 -->
<template>
	<div class="totalmenu">
		<ul class="itemswrapper" >
			<router-link :to="'/commoditynav/' + index + '/' + item.cid" tag='li'
				v-for="(item,index) in parcatalogyList" 
				class="item"
				:key="item.cid"
				@click.native.stop.prevent="menushow(index,$event)" 
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
			itemtopest:0,
			menumove:null//设置为点击定时器，
		}
	},
	methods: {
		menushow(i,e){
			//确定ul的相对位置，本案是以屏幕中心基准top326（50+6*46）。
			//1.确定ul li的dom节点
			let itemlist = document.getElementsByClassName('item')
			let itemswrapper = document.getElementsByClassName('itemswrapper')
			let scrolldis = document.documentElement.scrollTop||document.body.scrollTop
		 	let itemswrappertop = itemswrapper[0].getBoundingClientRect().top
		 	let itemlisttop =itemlist[i].getBoundingClientRect().top
			// 2对于选中item的节颜色，背景，左边框高亮，同时其余item变成正常，同时确定此刻在基准位置item的索引号
			// 2.1其余item变成正常
			for(let i=0;i<itemlist.length;i++){
				itemlist[i].style.color='#333'
				itemlist[i].style.backgroundColor='#f2f2f2'
				itemlist[i].style.borderRight='1px solid #888'

				// 2.2确定此刻在基准位置item的索引号 
				// if(itemlist[i].getBoundingClientRect().top==326){
				// 	this.itemtopest = i
				// }
			}
			// 2.3对于选中item的节颜色，背景，左边框高亮
			itemlist[i].style.color='red'
			itemlist[i].style.backgroundColor='#fff'
			itemlist[i].style.borderRight='1px solid #fff'
			
			// 3.ul菜单的移动。 以中间为基准，如果该item在此之上，则向下移动，如果在此之下向上移动，每次变动的距离为，(itemlist[i].getBoundingClientRect().top-326)
			
			if(i<33&&i>6){//当ul向上移动大于最后一屏幕高度时候，保持菜单ul的移动
			// 3.1故绝对距离变为ul与视图上沿的差值(ul起点)itemswrapper[0].getBoundingClientRect().top-50 减去变动距离
				clearTimeout(this.menumove)
	   			this.menumove= setTimeout(()=>{
					itemswrapper[0].style.transform=`translateY(${scrolldis+itemswrappertop-50-(itemlisttop-326)}px)`
					itemswrapper[0].style.transition="all 0.3s ease-out"
					
				},200)
			}
			else if(i>=0&&i<=6){//当ul第一屏幕高度时候，停止菜单ul的移动1~6item
				clearTimeout(this.menumove)
	    		this.menumove= setTimeout(()=>{
					itemswrapper[0].style.transform=`translateY(${scrolldis}px)`
				},200)
			}
			else if(i>=33&&i<=38){//当ul向上移动剩余最后一屏幕高度时候，停止菜单ul的移动33~38
				clearTimeout(this.menumove)
	   			this.menumove= setTimeout(()=>{
					itemswrapper[0].style.transform=`translateY(${scrolldis-1224}px)`
				},200)
			}
			// itemswrapper[0].style.transition="all 0.5s ease-out"
			// 快速点击会出现itemtop无法确定，使得运动速度过快的问题。故设置setTimeout定时器，即使消除。transition的过渡时间短一点
			// 但是還是無法消除itemtop无法确定问题，故，直接以中间326为基准，移动距离变为i item的高度同326的差，
			// 同时如果scroll变动，需要加上scrolltop的距离。
		}
	},
	props:['parcatalogyList'],
	components: {
		
	},
	created(){
		
	},
	updated(){
		//监听touchmove事件，防止ul 高度大于50，小于-1224
		window.addEventListener("touchmove", function(e){
			let itemswrapper = document.getElementsByClassName('itemswrapper')
		    let itemswrappertop = itemswrapper[0].getBoundingClientRect().top 

		    if( (itemswrappertop>50&&e.cancelable)||(itemswrappertop<-1224&&e.cancelable)){
		    	
		    	e.preventDefault()
		    	e.stopPropagation();
		    	// itemswrapper[0].style.touchAction = 'none'
		    }
		  
		 //    console.log(itemswrapper[0].getBoundingClientRect().top,'click RECTTOP')
			// console.log(itemswrapper[0].offsetTop,'click offsetTop')
			// console.log(document.documentElement.scrollTop||document.body.scrollTop,'click scrollTop')
		}, { passive: false });
	},
	destroyed(){
		window.removeEventListener("touch", function(e){
		},false);
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
		font-size: 14px;
		overflow: hidden;
		
		.item {
			display: inline-block;
			width: 86px;
			height: 46px;
			color: #333;
			text-align: center;
			line-height: 46px;
			padding: 0;
			background-color:#f2f2f2;
		}
		li:nth-child(1){
			color: red;
		}
		li:nth-child(39){
			color: red;
			border-bottom: 1px solid #888;
			background-color:#fff;
		}
	}
	
}
	
</style>

<template>
<div class="scrollnewscontainer">
	<div class="scrollnewsleft">
		<img src="https://m.360buyimg.com/mobilecms/jfs/t14752/82/2574581467/6535/c8158ace/5aa8935bN94e31ff6.jpg.dpg" class="scrollnewsleftimg">
	</div>
	<!-- <div class="scrollnewsmiddle" ref='scrollnews' v-bind:style="{'height':'16px','transform':'translateY(0px)','transition':'all .3s'}"> -->
	<div class="scrollnewsmiddle">
		<transition-group appear>
			<div  class="scrollswipitem" v-for="(item,index) in parindscrollnewstext" :key="item.text2" v-show="index==scrollswiperindex">
				<span class="scrollnewstext1">{{item.text1}}</span>
				<span class="scrollnewstext2">{{item.text2}}</span>
			</div>
		</transition-group>
	</div>
	<div class="scrollnewsright">
		<p>|</p>
		<span>更多</span>
	</div>
</div>
	
</template>

<script>

export default {
	data(){
		return {
			scrollswiperindex:0	
		}
	},
	methods:{
		
	},
	props:['parindscrollnewstext'],
	created(){
    	setInterval( ()=> {
			this.scrollswiperindex++;
			if(this.scrollswiperindex==3){
				this.scrollswiperindex =0;
			}
		},3000)
	},
}
</script>

<style scoped lang='scss'>
.scrollnewscontainer {
	width:100%;
	height:30px;
	display:flex;
	justify-content:space-between;
	align-items: center;
	padding-left:6px;
	padding-right:6px;
	
	.scrollnewsleft {
		width:20%;
		height:16px;
		.scrollnewsleftimg {
			width:100%;
			height:100%;
		}

	}
	.scrollnewsmiddle {
		width:68%;
		display:flex;
		flex-wrap:wrap;
		flex-direction: column;
		align-items: flex-start;
		// .v-enter,.v-leave-to {
		// 	opacity: 0;
		// }

		// /* v-enter-active 【入场时间的动画段】*/
		// /* v-leave-active 【离场时间的动画段】*/

		// .v-enter-active,.v-leave-active {
		// 	transition: all 0.4s ease;
		// }
		.scrollswipitem {
			width:100%;
			padding-left:6px;
			transition: all 0.4s ease in;
			.scrollnewstext1 {
				color:red;
				font-size: 14px;
			} 
			.scrollnewstext2 {
				font-size: 10px;
			} 
		}
	}
	.scrollnewsright {
		width:12%;
		height:100%;
		display:flex;
		justify-content: space-around;
		align-items: center;
		p {
			font-size: 14px;
			color:#a0a0a0;
		}
		span {
			font-size:10px;
			line-height: 1;
			text-align: center;
		}
	}

}
	
</style>
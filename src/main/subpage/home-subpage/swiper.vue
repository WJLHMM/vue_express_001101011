
<template>

	<mt-swipe :auto="4000" vertical="true">
		<mt-swipe-item v-for="item in parindswpier" :key="item._id">
			<img :src="item.avaterurl" alt="homepic" class="swiperimg">
		</mt-swipe-item>
		
	</mt-swipe>
	
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
	data(){
		return {
			
		}
	},
	methods: {
	},
	props:['parindswpier'],
	created(){
	}
}
</script>

<style scoped lang='less'>
.mint-swipe {
	height: 180px;
	width: 100%;
	.mint-swipe-items-wrap{
		.mint-swipe-item {
			width:100%;
			height:100%;
			img {
				width:100%;
				height:180px;
			}
		}
	}
	
}
	
</style>
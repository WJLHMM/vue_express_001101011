
<template>
	<div class="actionSheetcontainer">
		<div class="operationpanel" 
			:style="{'border-bottom':'1px solid #808080'}"
			v-if="(searchscrolltop<50)"
		>
			<mt-button 
				type="default" 
				:style="{
					'font-size':'14px',
					'background':'#fff',
					'border':'1px solid #fff',
					'box-shadow': '0 0 1px #fff',
					'z-index':1
				}"
				@click="actionSheet"
			>
				<a id="icon-location">
					<span class="mui-icon mui-icon-location" :style="{'font-size':'14px'}">
					</span>
				</a>
				上海市浦东新区
			</mt-button>
			<mt-button 
				type="default" 
				:style="{
					'font-size':'14px',
					'color':'red',
					'background':'#fff',
					'border':'1px solid #fff',
					'box-shadow': '0 0 1px #fff',
					'z-index':2
				}"
			>
				编辑商品
			</mt-button>
		</div>
		<mt-actionsheet
			:actions= "data"
	        v-model="sheetVisible"
		>
		</mt-actionsheet>
	</div>
</template>

<script >
import Vue from 'vue';
import { Actionsheet } from 'mint-ui';
Vue.component(Actionsheet.name, Actionsheet);


export default {
data() {
	return {

		// action sheet 选项内容
		data: [{
			name: '收货地址一',
			method : this.getCamera	// 调用methods中的函数
			}, {
			name: '收货地址二', 
			method : this.getLibrary	// 调用methods中的函数
		}],
		// action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
		sheetVisible:false
	}
},
methods: {
    actionSheet: function(){
    	// 打开action sheet
		this.sheetVisible = true;
    },
	setaddress1: function(){
		
	},
	setaddress2: function(){
		
	}

},
components:{
},
created(){


},
computed: {
    searchscrolltop() {
        return this.$store.state.storescrollTop
    }
}
}
</script>

<style scoped lang='less'>
.operationpanel {
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-between;
	-ms-align-items: center;
	align-items: center;
	margin-top: 50px;
}


</style>
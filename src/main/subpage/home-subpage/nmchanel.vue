
<template>
	<div class="nmchanel">
		<div class="nmchanelimg1">
			<img src="https://m.360buyimg.com/mobilecms/jfs/t1/24056/17/2005/80908/5c186655E14dc7cf2/820a7029a2540e25.jpg!q70.jpg.dpg">
		</div>
		<div class="nmchanelimg2">
			<img src="https://m.360buyimg.com/mobilecms/jfs/t1/26685/26/1930/47992/5c186663Ee07857b2/533b3a90ad7aa17b.jpg!q70.jpg.dpg">
		</div>
		<div class="nmchanelimg3">
			<img src="https://m.360buyimg.com/mobilecms/jfs/t1/27089/22/2030/53621/5c186677Ebbaa20af/bd39d47042dccbaf.jpg!q70.jpg.dpg">
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
	props:[''],
	created(){
		
	}
}
</script>

<style scoped lang='less'>
.nmchanel{
	display: flex;
	width:100%;
	height:100px;
	justify-content: space-between;
	.nmchanelimg1 {
		width: 40%;
		height:100%;
		img {
			width: 100%;
			height:100%;
		}
	}
	.nmchanelimg2 {
		width: 28%;
		height:100%;
		img {
			width: 100%;
			height:100%;
		}
	}
	.nmchanelimg3 {
		width: 28%;
		height:100%;
		img {
			width: 100%;
			height:100%;
		}
	}

}
	
</style>
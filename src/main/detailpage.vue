
<template>
	<div class="detailpage">
		<appheader></appheader>
		<div class="title">
			这里是{{section}}------{{id}}广告
			
		</div>

	</div>
</template>

<script>

import appheader from './components/header.vue'


export default {

	data(){
		return {
			section:'',
			id:''
		}
	},
	methods: {
	
	},
	components: {
		appheader,
	},
	created(){
		this.section=this.$route.query.section,
		this.id =this.$route.query.id
		console.log(this.section,this.id)
		
	},
	
	destroyed() {
		
	}
}
</script>

<style scoped lang='less'>
.detailpage{
	margin-top: 300px;
	width: 100%;
	height: 100%;
	.title {
		color: greenyellow;
		font-size: 24px;
		text-align: center;
	}
}

</style>
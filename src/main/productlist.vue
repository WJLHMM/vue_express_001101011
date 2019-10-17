
<template>
	<div class="productlist">
		<search></search>
		<smallnavbar></smallnavbar>
		<smallbar2></smallbar2>
		<productlistitem :parproductlist=productlist></productlistitem>
		<br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
	</div>
</template>

<script>
import search from './components/search.vue'
import smallnavbar from './components/smallnavbar.vue'
import productlistitem from './components/productlistitem.vue'
import smallbar2 from './subpage/productlist-subpage/smallbar2.vue';

export default {

	data(){
		return {
			productlist:{},
			productlistname:''
		}
	},
	methods: {
		getproductlistdata() {
			this.$http.post('productlist',{"cid":this.productlistname}).then(res=> {
				if(res.body.success) {
					this.productlist=[...res.body.data[this.productlistname]]
				}else {
					Toast({
					message: '读取数据失败',
					position: 'middle',
					duration: 3000
					});
				}
			}, (e) => {
				console.log(e)
			})
		}

	},
	components: {
		search,
		smallnavbar,
		smallbar2,
		productlistitem
	},
	created(){
		this.productlistname = this.$route.query.item
		this.getproductlistdata()
	},
	destroyed() {
		this.productlist={},
		this.productlistname=''
	}

}
</script>

<style scoped lang='less'>

</style>
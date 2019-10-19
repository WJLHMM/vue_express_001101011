
<template>
	<div class="productdetail">
		<appheader :paritem=item></appheader>
		<smallnavbar></smallnavbar>	
		<productshow :parproductitem=productitem></productshow>	
		<seller :parselleritem=selleritem></seller>
		<divgap></divgap>
		<appraisearea 
			:parappraiseinfoitem = appraiseinfoitem
			:parappraiseinfoitem1 = appraiseinfoitem1
		></appraisearea>
		<operationbar :parproname=proname></operationbar>
 		<br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>

	</div>
</template>

<script>

import appheader from './components/header.vue'
import divgap from './components/divgap.vue'
import smallnavbar from './components/smallnavbar.vue'
import productshow from './subpage/productdetail-subpage/productshow.vue';
import seller from './subpage/productdetail-subpage/seller.vue';
import appraisearea from './subpage/productdetail-subpage/appraisearea.vue';
import operationbar from './subpage/productdetail-subpage/operationbar.vue';

export default {

	data(){
		return {
			// 如果初始值为null，会报（warnError in render: "TypeError: Cannot read property 'imgurl' of null）"
			// 所以相关item先设为{}
			sellerlist:[],
			selleritem:{},
			productdetail:[],
			productitem:{},
			appraiseinfo:[],
			appraiseinfoitem:[],
			appraiseinfoitem1:{},
			item:'',
			proname:''

		}
	},
	methods: {
		getproductdetaillist() {
			this.$http.post('productdetaillist',{"proname":this.proname}).then(res=> {
				
				if(res.body.success) {
					this.productitem=res.body.data[0]
					this.appraiseinfoitem1.goodappraiseratio = this.productitem.goodappraiseratio
					this.appraiseinfoitem1.goodappraisenum = this.productitem.goodappraisenum
					this.appraiseinfoitem1.neuappraisenum = this.productitem.neuappraisenum
					this.appraiseinfoitem1.badappraisenum = this.productitem.badappraisenum
					this.appraiseinfoitem1.momentsnum = this.productitem.momentsnum
					this.proname = this.productitem.proname
					this.item = this.productitem.cid
					this.selleritem=this.productitem.sellerinfo[0]
					this.appraiseinfoitem = this.productitem.appraiseinfo

				}else	
				    {
					 	Toast({
						message: '读取数据失败',
						position: 'middle',
						duration: 3000
						});
					}
			}, (e) => {
				console.log(e)
			})
		},
	},
	components: {
		appheader,
		smallnavbar,
		productshow,
		seller,
		divgap,
		appraisearea,
		operationbar

	},
	created(){
		this.proname = this.$route.query.proname
		this.getproductdetaillist()
		// this.getsellerlist()
		// this.getappaiseinfo()
	},
	mounted(){
	},
	updated(){

	},
	destroyed() {
		this.sellerlist=[],
		this.selleritem={},
		this.productdetail=[],
		this.productitem={}
	}
}
</script>

<style scoped lang='less'>

</style>

<template>
	<div class="productdetail">
		<appheader :paritem=item></appheader>
		<smallnavbar></smallnavbar>	
		<productshow :parproductitem=productitem></productshow>	
		<seller :parselleritem=selleritem></seller>
		<divgap></divgap>
		<appraisearea :parappraiseinfoitem = appraiseinfoitem></appraisearea>
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
			appraiseinfoitem:{},
			item:'',
			proname:''

		}
	},
	methods: {
		getproductdetaillist() {
			// console.log(this.proname)
			this.$http.post('productdetaillist',{"proname":this.proname}).then(res=> {
				
				if(res.body.success) {
					this.productitem=res.body.data[0]
					this.proname = this.productitem.proname
					this.item = this.productitem.cid
					this.selleritem=[...this.productitem.sellerinfo]
					console.log(this.selleritem)
					this.appraiseinfoitem = [...this.productitem.appraiseinfo]
					console.log(this.appraiseinfoitem)
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
		// getsellerlist() {
		// 	this.$http.get('sellerlist').then(res=> {
		// 	if(res.body.success) {
		// 		this.sellerlist=[...res.body.data]
		// 		this.sellerlist.some((item,index)=> {
		// 			// 在数组的some方法中，如果return true;就会立刻终止这个数组的循环
		// 			if(this.proname==item.proname){
		// 				this.selleritem =this.sellerlist[index]
		// 				return true;
		// 			}
		// 		})
				
		// 	}	
		// 	else 
		// 	{
		// 			Toast({
		// 				message: '读取数据失败',
		// 				position: 'middle',
		// 				duration: 3000
		// 		   });
		// 	}
		// 	}, (e) => {
		// 		console.log(e)
		// 	})
		// },
		// getappaiseinfo() {
		// 	this.$http.get('appraiseinfo').then(res=> {
		// 		if(res.body.success) {
		// 			this.appraiseinfo = [...res.body.data]
		// 			this.appraiseinfo.some((item)=>{
		// 				if(this.proname===item.proname){
		// 					this.appraiseinfoitem = item
		// 					// console.log(this.appraiseinfoitem)
		// 				}
		// 			})
		// 		}
		// 	}),
		// 	(e)=>{
		// 		console.log(e)
		// 	}
		// }
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
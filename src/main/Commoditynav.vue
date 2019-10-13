=
<template>
	<div class="commoditynav" 
		onmousewheel="return false;"
	>
		<search></search>
		<totalmenu :parcatalogyList="catalogyList"></totalmenu>
		<router-view 
			:parcatalogyListdetail=catalogyListdetail
			:parcatalogynavheader=catalogynavheader
		></router-view>
	</div>
</template>

<script>
import search from './components/search.vue';
import totalmenu from './subpage/Commoditynav-subpage/menu.vue';
// import catalogynav from './subpage/Commoditynav-subpage/catalogynav.vue';


export default {

	data(){
		return {
			catalogyList:[],
			catalogyListdetail:[],
			catalogynavheader:'',
			id:'',
			cid:''
			
		}
	},
	methods: {
		getcatalogyList() {
			this.$http.get('searchbycatagrorty').then(res=> {
			if(res.body.success) {
				this.catalogyList=[...res.body.data.catalogyList]
				this.catalogyListdetail=[...res.body.data.catalogyList[0].WQR2006]
				this.catalogynavheader=res.body.data.catalogyList[0].name
			}	
			else {Toast({
				message: '读取数据失败',
				position: 'middle',
				duration: 3000
				});
			}
		}, (e) => {
			console.log(e)
		})
		},
		getcatalogyList2() {
			this.$http.get('searchbycatagrorty').then(res=> {
			if(res.body.success) {
				this.catalogyListdetail=[...res.body.data.catalogyList[this.id][this.cid]]
				this.catalogynavheader=res.body.data.catalogyList[this.id].name
				// console.log(this.catalogyListdetail)
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
		totalmenu,
		// catalogynav
	},
	created(){
		this.getcatalogyList()
	},
	watch: {
	  $route: {
	    handler: function(val, oldVal){
	      this.id = val.params.id;
	      this.cid = val.params.cid;
	   	  this.getcatalogyList2()

	    },
	    // 深度观察监听
	    deep: true
	  } 
	},
	destroysed(){
		this.catalogyList=[],
		this.catalogyListdetail=[],
		this.catalogynavheader='',
		this.id='',
		this.cid=''
	}
}
</script>

<style scoped lang='less'>
	.commoditynav {
		margin-top: 50px;
		display: flex;
		justify-content: space-between;
	}
	
</style>
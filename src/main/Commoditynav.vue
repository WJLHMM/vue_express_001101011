<!-- 此页面为Commoditynav向数据库中添加数据 客户端 -->

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
import totalmenu from './subpage/Commoditynav-subpage/Menu.vue';
// import catalogynav from './subpage/Commoditynav-subpage/catalogynav.vue';


export default {

	data(){
		return {
			catalogyList:[],
			catalogyListdetail:[],
			catalogynavheader:'',
			paramsid:'',
			cid:''
			
		}
	},
	methods: {

		getcatalogyList() {
			this.paramsid = this.$route.params.paramsid
			this.cid = this.$route.params.cid
			let { paramsid,cid } = this.$route.params
			this.$http.post('searchbycatagrorty',{paramsid,cid},{}).then(res=> {
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
			this.paramsid = this.$route.params.paramsid
			this.cid = this.$route.params.cid
			let { paramsid,cid } = this.$route.params
			this.$http.post('searchbycatagrorty',{paramsid,cid},{}).then(res=> {
			  if(res.body.success) {
				this.catalogyListdetail=[...res.body.data.catalogyList[this.paramsid][this.cid]]
				this.catalogynavheader=res.body.data.catalogyList[this.paramsid].name
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
	      this.paramsid = val.params.paramsid;
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
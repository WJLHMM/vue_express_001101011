
<template>
	<div class="homecontainer">
		<search></search>
		<swiper :parindswpier='indswpier'></swiper>
		<mainadv :parindbrandshow='indbrandshow'></mainadv>
		<boxlist :parboxlist='boxlist'></boxlist>
		<scrollnews :parindscrollnewstext='indscrollnewstext' ></scrollnews>
		<nmchanel></nmchanel>
		<sktitle></sktitle>
		<sksection :parsksection='sksection' ></sksection>
		<newyearbordstart></newyearbordstart>
		<newyearbordpro :parnewyearprolist='newyearprolist'></newyearbordpro>
		<newyearboardend></newyearboardend>
		<newyearbordpro2 :parnewyearprolist2='newyearprolist2'></newyearbordpro2>
	</div>
</template>

<script>
import search from './components/search.vue';
import swiper from './subpage/home-subpage/swiper.vue';
import mainadv from './subpage/home-subpage/mainadv.vue';
import boxlist from './subpage/home-subpage/boxlist.vue';
import scrollnews from './subpage/home-subpage/scrollnews.vue';
import nmchanel from './subpage/home-subpage/nmchanel.vue';
import sktitle from './subpage/home-subpage/sktitle.vue';
import sksection from './subpage/home-subpage/sksection.vue';
import newyearbordstart from './subpage/home-subpage/newyearbordstart.vue';
import newyearbordpro from './subpage/home-subpage/newyearbordpro.vue';
import newyearboardend from './subpage/home-subpage/newyearboardend.vue';
import newyearbordpro2 from './subpage/home-subpage/newyearbordpro2.vue';

import Vue from 'vue'	
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default {

	data(){
		return {
			indswpier:[],
			indbrandshow:[],
			boxlist:[],
			indscrollnewstext:[],
			sksection:[],
			newyearprolist:[],
			newyearprolist2:[]
		}
	},
	methods: {
		getmjdindexlist() {
				this.$http.get('mjdindex').then(res=> {
					if(res.body.success) {
						this.indswpier=[...res.body.data.indswpier],
						this.indbrandshow=[...res.body.data.indbrandshow]
						this.boxlist=[...res.body.data.boxlist]
						this.indscrollnewstext=[...res.body.data.indscrollnewstext]
						this.sksection=[...res.body.data.sksection]
						this.newyearprolist=[...res.body.data.newyearprolist]
						this.newyearprolist2=[...res.body.data.newyearprolist2]
						// console.log(this.newyearprolist2)
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
			swiper,
			mainadv,
			scrollnews,
			nmchanel,
			sktitle,
			sksection,
			boxlist,
			newyearbordstart,
			newyearbordpro,
			newyearboardend,
			newyearbordpro2
		},
	created(){
		this.getmjdindexlist()
		
	},
	destroyed () {
		this.indswpier=[],
		this.indbrandshow=[],
		this.boxlist=[],
		this.indscrollnewstext=[],
		this.sksection=[],
		this.newyearprolist=[],
		this.newyearprolist2=[]
	}
}
</script>

<style scoped lang='less'>
	.homecontainer {
		display:flex;
		flex-direction:column;
		justify-content: space-between;
		
	}
	
</style>
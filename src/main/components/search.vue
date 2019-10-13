
<template>
<div class="fixedcontainer"> 
    <div 
        class="searchcontainer" 
        :style="{'background':((searchscrolltop>30) ? '#FD0135':''),'border-bottom':isShowbb ? '1px solid #888':''}"
    >
        <div 
            class="scandibarcode" 
            :style="{'background':((searchscrolltop>30) ? '':'#808080')}"
        >
            <span class="mui-icon-extra mui-icon-extra-sweep"></span>
            <span class="mui-tab-label">扫啊扫</span>
        </div>
        <div class="mui-input-row mui-search">
            <input type="search" class="mui-input-clear" placeholder="" data-input-clear="1" data-input-search="1">
            <span class="mui-icon mui-icon-clear mui-hidden"></span>
            <span class="mui-placeholder">
                <span class="mui-icon mui-icon-search"></span>
                <span></span>
            </span>
        </div>
        <div class="lastestnews" :style="{'background':((searchscrolltop>30) ? '':'#808080')}"> 
            <span class="mui-icon mui-icon-chatbubble"></span>
            <span class="mui-tab-label">消息</span>
        </div>
       
    </div>
</div>

	
</template>

<script>
    
	export default {
		data(){
			return {
				isShowbb:false
			}
		},
		methods: {
			
		},
		components: {
			
		},
		created(){
            if((this.$route.fullPath).indexOf('commoditynav')||(this.$route.fullPath).indexOf('productlist')){
                this.isShowbb = true 
            }

		},
        computed: {
            searchscrolltop() {
                return this.$store.state.storescrollTop
            }
        }
	}
</script>

<style scoped lang='less'>
.fixedcontainer {
    position:fixed;
    width: 100%;
    height:50px;
    z-index:10;
    top: 0;
    background: #fff;
    .searchcontainer{
        position:absolute;
        width: 100%;
        height:50px;
        max-width: 638px;
        left:0;
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 2px;
        padding-right:2px;
        .scandibarcode {
            width:40px;
            height:40px;
            /* border:1px solid #808080; */
            border-radius: 50%;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* background: #808080; */
            .mui-icon-extra-sweep{
                font-size: 18px;
                color:#fff;
            }
            .mui-tab-label {
                font-size: 12px;
                height: 20%;
                width:100%;
                transform: scale(0.50);
                color:#fff;
            }
        }
        .mui-search {
            width: 80%;
            height:30px;
            max-width:508px;
            border-radius: 15px;
            background: #888;
            padding-top:2px;
            border: 1px solid #888;
            .mui-input-clear {
                height: 100%;
            }
            .mui-placeholder {
                // top:-3px;
                padding-left:6px;
                text-align: left;
                background: #fff;
            }
        }
        .lastestnews {
            width:40px;
            height:40px;
            /* border:1px solid #808080; */
            border-radius: 50%;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* background: #808080; */
            .mui-icon-chatbubble{
                font-size: 18px;
                color:#fff;
            }
            .mui-tab-label {
                font-size: 12px;
                height: 10%;
                transform: scale(0.50);
                color:#fff;
            }
        }
    }
}
</style>
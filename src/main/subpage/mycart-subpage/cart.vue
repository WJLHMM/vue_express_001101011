<template>
	<div class="cart">
		<div class="selfselling" >
			<div class="selfsellingtitelfixedcontainer"
				:style="{
					'position':((searchscrolltop<50)?'':'fixed'),
					'top':((searchscrolltop<50)?'':'50px'),
					'z-index':100
				}"
			>
				<div class="selfsellingtitle" 
					:style="{
						'position':((searchscrolltop<50)?'':'absolute'),
						'left':((searchscrolltop<50)?'':'0px'),
						'z-index':100
					}"

				>
					<input 
						class="selfsellingtotal" 
						type="checkbox" 
						v-model="picked" 
						@click="selectallitem(picked)"
					>
					<span class="selfsellingtitlename">自营产品</span>
					<span class="selfsellingtitlename" @click='test'>自营产品1</span>
				</div>
			</div>
			<div class="selfsellingpro" v-for="(item,index) in parcartlist" :key="item._id">
				<div class="proitemradiowrap">
					<input 
						class="proitemradio" 
						type="checkbox" 
						:value="item.proname" 
						v-model="pickedlist"
						@click="selectitem(item.proname,index)"
					>
				</div>
				<div class="selfsellingproinf" >
					<div class="proimgdesc">
						<div class="proimg">
							<img class="proimgdetail" :src="item.cartimgurl1">
						</div>
						<div class="prodesc">
							<p class="proname">{{item.productbreif}}</p>
							<button class="proselection">
								<span class="proselectiontext">{{item.proselectiontext}}</span>
								<span class="mui-icon mui-icon-arrowdown"></span>
							</button>
						</div>
					</div>
					<div class="propayinfoamount">
						<div class="propayprompt" v-if="item.payinfo">{{item.payinfo}}</div>
						<div class="price"><small>{{item.currency}}</small>{{item.price}}<small>.00</small></div>
						<div class="pronumbox">
							<div class="mui-numbox" data-numbox-min='1' data-numbox-max='10'>
								<button 
									class="mui-btn mui-btn-numbox-minus" 
									type="button"
								>-
									<!-- @click="gettotalsettmentnumminus(item.proname,index)" -->
								</button>
								<input 
									id="test" 
									ref="setnumber"
									class="mui-input-numbox" 
									type="number" 
									:value="item.number"
									@change="getnumber(item.proname,index)" 
								/>
									<!-- :value="index"  -->
								<button 
									class="mui-btn mui-btn-numbox-plus" 
									type="button" 
								>+
									<!-- @click="gettotalsettmentnumplus(item.proname,index)" -->
								</button>
							</div>
						</div>
					</div>
					<div class="prootheroperation">
						<div class="profocus">移入关注</div>
						<div class="prodel" @click="deletecartitem(index,item.proname)">删除</div>
					</div>
					<div class="prosever" v-if="item.sevice">
						<div class="proseverwrap">
							<p>服务</p>
							<p>{{item.sevice}}</p>
						</div>
						<span class="mui-icon mui-icon-arrowright"></span>
					</div>
					<div class="propromotion" v-if="item.promotionpackagecontent
">
						<div class="propromotionwrap">
							<p>促销</p>
							<p >{{item.promotionpackagecontent
}}</p>
						</div>
						<div>
							<span>2种选择</span>
							<span class="mui-icon mui-icon-arrowdown"></span>
						</div>
					</div>
				</div>

			</div>
		</div>
		
	</div>

</template>

<script>
//对于第三方js可以在webpack里面配置，这里隐去
// import mui from '../../../lib/mui-master/dist/js/mui.min.js';
export default {
	// inject:['reload'],
	data() {
		return {
			isCheckall:true,
			pickedlist: [],
			number:[],
			totalsettmentnum:0,
			totalsettmentamount:0,
			cartlistfromoperationbar:[],
			picked:null
		}
	},
	methods: {
		test(){
			console.log('test_pickedlist',this.pickedlist)
			console.log('test_picked',this.picked)
		},
		//全选checkbox 点击全部选中，取消全部不选中。使用 v-modoel 中picked切换，
		//1.所有item前的checkbox全部选中，将所有item对应数据 input中value值 进入v-model="pickedlist"数组中，
		//2 所有item前checkbox全部取消，picklist清空。 每个item中数量，由change事件监听，装入number数组中。
		selectallitem(picked) {
			// 对于全选  点击checkbox,picked值取反,如果true，将pickedlist全部加满，及所有item.proname全选中
			// 反之 取消checkbox 将pickedlist清空
			
			picked=!picked
			console.log('selectallitem',picked)
			this.$http.post('cartinfodbadd',{'picked':picked,"source":"selectallitem"}).then(res=> {
				if(res.body.statuscode===1){
					this.$emit('refresdbdata')
					mui.toast(
						`${res.body.msg}`,
						{ duration:900, type:'div' }
				    )
					if(picked){
						this.parcartlist.forEach((item)=> {
							if(!this.pickedlist.includes(item.proname)){
								this.pickedlist.push(item.proname)
							}
							this.totalsettmentnum += parseInt(item.number)
							this.totalsettmentamount += parseInt(item.number)*parseInt(item.price)
					    });
						
					}else {
						this.pickedlist = []
						this.totalsettmentnum =0
						this.totalsettmentamount =0
					}
				}
				//父组件刷新数据，获得最新数据库数据，渲染页面,更新到vuex中
				localStorage.setItem('picked',window.JSON.stringify(this.picked))
				this.$store.commit('updatepicked',this.picked)
				localStorage.setItem('pickedlist',window.JSON.stringify(this.pickedlist))
				this.$store.commit('updatepickedlist',this.pickedlist)
				localStorage.setItem('totalsettmentnum',window.JSON.stringify(this.totalsettmentnum))
				localStorage.setItem('totalsettmentamount',window.JSON.stringify(this.totalsettmentamount))
				this.$store.commit('updatetotalsettmentnum',this.totalsettmentnum)
				this.$store.commit('updatetotalsettmentamount',this.totalsettmentamount)

			}, (e) => {
				console.log(e)
			})
		
			
		},
		//单选，全选操作，选中的item，进入picklist数组中，落选的从中清除。如果所有都选中，则，全选checklist picked变温true
		selectitem(itemname,index){
			// console.log(this.pickedlist.indexOf(itemname)==-1)

			this.$http.post('cartinfodbadd',{"proname":itemname,"isPicked":this.pickedlist.indexOf(itemname)==-1,"source":"selectitem"})
			.then(res=> {
				if(res.body.statuscode==1){
					this.$emit('refresdbdata')
				    if(this.pickedlist.indexOf(itemname)==-1) {
				    	
				    	this.totalsettmentnum =this.totalsettmentnum - parseInt(this.parcartlist[index].number)
				    	this.totalsettmentamount =this.totalsettmentamount - parseInt(this.parcartlist[index].number)*parseInt(this.parcartlist[index].price)
				    }else{
				    
				    	this.totalsettmentnum =this.totalsettmentnum + parseInt(this.parcartlist[index].number)
				    	this.totalsettmentamount =this.totalsettmentamount + parseInt(this.parcartlist[index].number)*parseInt(this.parcartlist[index].price)
				    }
					localStorage.setItem('totalsettmentnum',window.JSON.stringify(this.totalsettmentnum))
					localStorage.setItem('totalsettmentamount',window.JSON.stringify(this.totalsettmentamount))
					this.$store.commit('updatetotalsettmentnum',this.totalsettmentnum)
					this.$store.commit('updatetotalsettmentamount',this.totalsettmentamount)
				
					if(this.pickedlist.length!=0) {
						if(this.pickedlist.length==this.parcartlist.length){
							this.picked=true
						}else{
							this.picked = false
						}
					}else {
						this.picked = false
					}
					localStorage.setItem('picked',window.JSON.stringify(this.picked))
					this.$store.commit('updatepicked',this.picked)
					localStorage.setItem('pickedlist',window.JSON.stringify(this.pickedlist))
					this.$store.commit('updatepickedlist',this.pickedlist)

					mui.toast(
						`${res.body.msg}`,
						{ duration:900, type:'div' }
				    )
				}

				}, (e) => {
					console.log(e)
			})
			
		},
		//获取每个numbox的值，发送到指定位置
		getnumber(itemname,index){
			if(this.$refs.setnumber) {
				let number = this.$refs.setnumber[index].value
				// console.log(`${itemname}一共${number}`)	
				this.$http.post('cartinfodbadd',{"proname":itemname,"number":number,"source":"getnumber"})
				.then(res=> {
					if(res.body.statuscode===1){
						this.$emit('refresdbdata')
						// if(this.pickedlist.includes(itemname)){
						// 	console.log('getnumber',this.pickedlist.includes(itemname))
						// 	this.totalsettmentnum = 0
						// 	this.totalsettmentamount = 0
						// 	this.parcartlist.forEach((item)=> {
						// 		if(item.picked){
						// 			this.totalsettmentnum += item.number
						// 			this.totalsettmentamount += item.number*item.price
						// 		}
						// 	})
						// 	localStorage.setItem('totalsettmentnum',window.JSON.stringify(this.totalsettmentnum))
						// 	localStorage.setItem('totalsettmentamount',window.JSON.stringify(this.totalsettmentamount))
						// 	this.$store.commit('updatetotalsettmentnum',this.totalsettmentnum)
						// 	this.$store.commit('updatetotalsettmentamount',this.totalsettmentamount)

						// }
						this.totalsettmentnum = 0
						this.totalsettmentamount = 0
						// for(let i=0;i<this.$refs.setnumber.length;i++) {
						// 	if(this.$refs.setnumber[i].value!=this.number[i]){
						// 		this.number[i]=parseInt(this.$refs.setnumber[i].value)
						// 	}
						// }
						//获取picklist中所有item的数量，及总金额
						this.parcartlist.forEach((item,index)=>{
							if(this.pickedlist.includes(item.proname)){
								this.totalsettmentnum += parseInt(this.$refs.setnumber[index].value)
								this.totalsettmentamount += parseInt(this.$refs.setnumber[index].value)*parseInt(item.price)
							}
						})
						

						// localStorage.setItem('number',window.JSON.stringify(this.number))
						localStorage.setItem('totalsettmentnum',window.JSON.stringify(this.totalsettmentnum))
						localStorage.setItem('totalsettmentamount',window.JSON.stringify(this.totalsettmentamount))

						this.$store.commit('updatetotalsettmentnum',this.totalsettmentnum)
						this.$store.commit('updatetotalsettmentamount',this.totalsettmentamount)
						mui.toast(
							`${res.body.msg}`,
							{ duration:900, type:'div' }
					    )
					}

				}, (e) => {
					console.log(e)
				})			
			}

		},
		// 获取被选中的件数
		// 1.pickedlist中的存储值就是parcarlist中的item.proname，
		// 改变数据的地方包括 numbox的+-button,总选和每个单选input checklist
		// 由于mui numbox的bug 及在最大或最小值前一，button失效，但是input。value任有效，两个函数放弃使用，直接使用input change事件来监听数据，
		gettotalsettmentnumplus(itemname,i){
		
		},
		gettotalsettmentnumminus(itemname,i){
	
		},
		//删除item，首先考虑删除的顺序：数量，金额，依赖的number，parcartlist，以及是否被选中，
		
		deletecartitem(i,itemname){

			this.$http.post('cartinfodbadd',{"proname":itemname,"source":"deletecartitem"})
			.then(res=> {
				if(res.body.statuscode==1){
				     // 1.所以先行减去总数量，总金额,但是如果没有被选中，不需要减去数量及总金额。
				    if(this.pickedlist.includes(itemname)) {
						this.totalsettmentamount = this.totalsettmentamount - parseInt(this.parcartlist[i].price)*parseInt(this.number[i])
						this.totalsettmentnum = this.totalsettmentnum - parseInt(this.number[i])
				    }

				    // 2.删除对应列表item 
					this.parcartlist.splice(i,1)
		            //对应于parcartlist的变动，相应由父组件对应过来的cartlistkey数组（item.proname）,也需要更改，为方便使用this。cartlistfromoperationbar
		            //来变动localstore
					this.parcartlist.forEach((item)=>{
						this.cartlistfromoperationbar.push(item.proname)
					})

					// 3.如果picklist中包含该item，删除
					this.pickedlist.forEach((item)=>{
						if(this.pickedlist.indexOf(itemname)!=-1){
							this.pickedlist.splice(this.pickedlist.indexOf(itemname),1)
						}
					})
					// 4.删除number数组中对应item数量
					this.number.splice(i,1)


					// localStorage.setItem('number',window.JSON.stringify(this.number))
					localStorage.setItem('totalsettmentamount',window.JSON.stringify(this.totalsettmentamount))
					localStorage.setItem('totalsettmentnum',window.JSON.stringify(this.totalsettmentnum))
					localStorage.setItem('cartlistkey',window.JSON.stringify(this.cartlistfromoperationbar))

					localStorage.setItem('cartlistlength',window.JSON.stringify(this.cartlistfromoperationbar.length))
					localStorage.setItem('pickedlist',window.JSON.stringify(this.pickedlist))

					this.$store.commit('updatetotalsettmentnum',this.totalsettmentnum)
					this.$store.commit('updatetotalsettmentamount',this.totalsettmentamount)
					this.$store.commit('updatecartlistlength',this.cartlistfromoperationbar.length)
					this.$store.commit('updatecartlistkey',this.cartlistfromoperationbar)

					//history.go(0)
					// self.reload()
					// location.reload()s
				}
			},(e) => {
					console.log(e)
			})	



		}
	},
	computed: {
	    searchscrolltop() {
	        return this.$store.state.storescrollTop
	    }, 
	},
	props:['parcartlist','parunitedselllist'],
	created() {
		this.pickedlist = this.$store.state.storepickedlist||JSON.parse(localStorage.getItem('picked'))
		this.picked = this.$store.state.storepicked||JSON.parse(localStorage.getItem('picked'))
		this.totalsettmentnum = this.$store.state.storetotalsettmentnum||JSON.parse(localStorage.getItem('totalsettmentnum'))
		this.totalsettmentamount = this.$store.state.storetotalsettmentamount||JSON.parse(localStorage.getItem('totalsettmentamount'))
		// this.picked = JSON.parse(localStorage.getItem('picked'))||true
		// this.pickedlist = JSON.parse(localStorage.getItem('pickedlist'))||[]
		// this.totalsettmentnum = JSON.parse(localStorage.getItem('totalsettmentnum'))||0
		// this.totalsettmentamount = JSON.parse(localStorage.getItem('totalsettmentamount'))||0

	},
	updated() {
		// 注意在v-for的情况下，初始化，以及dom的选择放在updated钩子函数中，
		mui('.mui-numbox').numbox();
		
		// 注意在selectitem方法中发生的picklist的变化，需要在updated中存储到localStroage
	

		//同理 在v-for情况下对于input.value赋值，无法通过:value="number["+index+"]"来实现，所以通过ref操作来实现
		//读取存储1.读取本地内存设置number数组
		// this.number = JSON.parse(localStorage.getItem('number'))||[]
		
		//第二步 将number数组中的值分配到相对应的input value中,注意过分布添加的过程中，会出现，列表数大于number数
		//的情况，此时直接给number添加缺少数量的1
		// if(this.$refs.setnumber){
		// 	for(let i=0;i<this.$refs.setnumber.length;i++) {
		// 		if(this.$refs.setnumber.length>this.number.length){
		// 			for(let k=0;k<(this.$refs.setnumber.length-this.number.length);k++) {
		// 				this.number.push(parseInt(1))
		// 			}
		// 		}
		// 		this.$refs.setnumber[i].value=this.number[i]
		// 	}

		// }
		//本地储存number
		// localStorage.setItem('number',window.JSON.stringify(this.number))
		// localStorage.setItem('totalsettmentnum',window.JSON.stringify(this.totalsettmentnum))
		// localStorage.setItem('totalsettmentamount',window.JSON.stringify(this.totalsettmentamount))

		//注意当购物车被清空后，务必清除相对应localstorage，否则数据混乱
		if(this.parcartlist.length==0) {
			localStorage.removeItem('totalsettmentnumfromvuex')
			localStorage.removeItem('totalsettmentnum')
			localStorage.removeItem('totalsettmentamountfromvuex')
			localStorage.removeItem('totalsettmentamount')
			localStorage.removeItem('pickedlist')
			localStorage.removeItem('picked')
			localStorage.removeItem('number')
			localStorage.removeItem('cartlistlengthfromvuex')
			localStorage.removeItem('cartlistlength')
			localStorage.removeItem('cartlist')
		}

	},
	mounted() {
		this.picked = JSON.parse(localStorage.getItem('picked'))
		this.pickedlist = JSON.parse(localStorage.getItem('pickedlist'))
	}

}
</script>

<style scoped lang="less">
.cart {
	width: 100%;
    touch-action: none; 
	.selfselling {
		width:100%;
		border-bottom:1px solid #808080;
		margin-bottom:10px;
		.selfsellingtitelfixedcontainer {
				width:100%;
				max-width: 636px;
				height:40px;
				// overflow-y:scroll
			.selfsellingtitle {
				width:100%;
				height:40px;
				line-height: 40px;
				opacity:1.0;
				background-color: #fff;
				border-bottom: 1px solid #808080;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				.selfsellingtotal {
					width:20px;
					height:20px;
					margin-left:10px;
				}
				.selfsellingtitlename {
					font-size: 18px;
					padding-left:6px;
					font-weight: bold;
				}
			}
		}
		.selfsellingpro {
			width:100%;
			display:flex;
			justify-content: flex-start;
			align-items: center;
			margin-top:10px;
			margin-bottom:10px;
			.proitemradiowrap {
				width:10%;
				height:100%;
				margin-bottom:80px;
				padding-left:10px;
				// border-right: 1px solid #888888;
				.proitemradio {
					width:20px;
					height:20px;
				}
			}
			.selfsellingproinf {
				width:90%;
				height:100%;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: center;
				font-size: 10px;
				padding-right: 10px;
				.proimgdesc {
					width:100%;
					height:44%;
					display: flex;
					.proimg {
						width:25%;
						height:90%;
						.proimgdetail {
							width:100%;
							height:100%;
						}
					}
					.prodesc {
						width:75%;
						height:100%;
						padding-top:14px;
						padding-left:10px;
						.proname {
							width:100%;
							height:44px;
							color: #333;
							line-height: 22px;
							font-size:14px;
							display: -webkit-box;
							text-overflow:ellipsis;
							// white-space:nowrap;
							overflow: hidden;
							// word-break: break-all;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
							text-overflow: -o-ellipsis-lastline;
						}
						.proselection {
							width:100%;
							height:24px;
							display:flex;
							justify-content: space-between;
							align-items: center;
							.proselectiontext {
								width:80%;
								height:100%;
								line-height: 1;
								font-size: 12px;
								white-space:nowrap;
								text-overflow:ellipsis;
								overflow: hidden;
								text-overflow: -o-ellipsis-lastline;
								text-align: left;
							}
							.mui-icon-arrowdown {
								font-size: 12px;
							}
						}
					}
				}
				.propayinfoamount {
					width:100%;
					height:20%;
					display:flex;
					justify-content: space-between;
					align-items: center;
					.propayprompt {
						width:24%;
						height:100%;
						color:#fff;
						// line-height: 50%;
						font-size:10px;
						text-align: center;
						padding:10px 14px;
						background: rgba(233,59,61,.7);
					}
					.price {
						font-weight: bold;
						font-size: 18px;
						color:red;
						small{
							font-size: 12px;
							
						}
					}
					.pronumbox {
						// .mui-numbox {
						// 	.mui-btn{
	     //                      touch-action: none; 
						// 	}
						// }
					}
				}
				.prootheroperation {
					width:100%;
					height:10%;
					display: flex;
					justify-content: flex-end;
					align-items: center;
					font-size: 14px;
					.profocus {
						margin-right:30px;
					}
					.prodel {
						cursor:pointer;
						border:1px solid #fff;
						&:hover {
							background-color: red;
							color:#fff;
							border:1px solid red;
						}
					}
				}
				.prosever,.propromotion {
					width:100%;
					height:15%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 14px;
					color: #8f8f94;
					background: #f7f5f3;
					padding: 10px;
					.proseverwrap,.propromotionwrap {
						display: flex;
						justify-content: flex-start;
						align-items: center;
						p {
							margin-right: 10px;
						}
					}
					span {
						font-size: 12px;
					}
				}
			}
		}
	}
}
	
</style>
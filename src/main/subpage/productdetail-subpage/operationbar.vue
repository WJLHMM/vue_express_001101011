
<template>
	<div class="operationfixcontainer">
		<div class="operationbar">
			<div class="contactcs">
				<span class="mui-icon-extra mui-icon-extra-custom"></span>
				<span>联系客服</span>
			</div>
			<div class="entershopper">
				<span class="mui-icon mui-icon-home-filled"></span>
				<span>进店</span>
			</div>
			<router-link 
				:to= "footer_isLogin ? '/mycart?username='+ userlogined :'/login'" 
				class="cart" tag="div" 
			>
				<span class="mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-badge mui-badge-danger" ref="cartbadge">{{cartlistlength}}</span>
				<span>购物车</span>
			</router-link>
			<div class="buttongroup">
				<button class="addtocart" @click.self='addcart(parproname)'>加入购物车</button>
				<transition
					@before-enter="beforeEnter"
					@enter="Enter"
					@after-enter="afterEnter"
				>	
					<div class="buyball" v-show="isBallshow" ref="ball">
						<p class="buybally" ref="bally"></p>
					</div>
				</transition>
				<button class="buynow">立即购买</button>
			</div>
		
		</div>
	</div>

</template>

<script >
import Vue from 'vue'
import { Toast } from 'mint-ui';
Vue.component(Toast.name, Toast);

export default {
	data() {
		return {
			cartlist:[],
			cartlistlength:0,
			isBallshow:false
		}
	},
	methods: {
		addcart(parproname) {
			// 注意carlist获取本地存储的位置，该数组的作用是记录购物车中的关键词
			this.$http.post('cartinfo',{parproname}).then(res=> {
				console.log(res)

			})
			this.cartlist = JSON.parse(localStorage.getItem('cartlist')||'[]');
			if(!this.cartlist.includes(parproname)){
				this.cartlist.unshift(parproname);
				this.isBallshow =!this.isBallshow;
			}else {
				Toast({
					message: '该产品已经加入购物车',
					position: 'middle',
					duration: 1000
				});
			}
			
			// 注意给operationbar中的徽章数字延迟变化，延迟时间等同于小球抛物线到购物篮的时间。注意由于setTimeout是异步的，相对应的
			// localstorage $store.commit 均要放在setTimeout中，否则会出现localstorage，vuex数据不能同步更新
			setTimeout(()=>{
				this.cartlistlength = this.cartlist.length
				localStorage.setItem("cartlistlength",window.JSON.stringify(this.cartlistlength))//这里不加window.老报错
				this.$store.commit('updatecartlistlength',this.cartlistlength)
			},400)

			localStorage.setItem("cartlist",window.JSON.stringify(this.cartlist))//这里不加window.老报错
			
			this.$store.commit('updatecartlist',this.cartlist)
		},
		beforeEnter(el){
			// 获取ball的位置
			let rect = el.getBoundingClientRect()
			el.style.transform = "translateX("+ rect.x +"px)"

			//获取bally的位置
			let recty = this.$refs.bally.getBoundingClientRect()
			this.$refs.bally.transform = `translateY($(recty.y)px)`

		},
		Enter(el,done){
			let rect = el.getBoundingClientRect()
			let cartbadge = this.$refs.cartbadge.getBoundingClientRect()//本案在同一组件中可以如此获得dom，否则直接原生js获取dom
			let recty = this.$refs.bally.getBoundingClientRect()

			let xdis = cartbadge.x-rect.x
			let ydis = cartbadge.y-recty.y
			el.offsetWidth;
			el.style.transform = `translate(${xdis}px,${ydis}px)`;
			// el.style.transform = `translateX(${xdis}px,0,0)`;
			// this.$refs.bally.style.transform = `translateY(0,${ydis}px,0)`;

			el.style.transition="all 0.5s cubic-bezier(.19,.3,.26,1)";
			// this.$refs.bally.style.transition="all 0.5s linear";


			// el.getElementsByClassName('buybally')[0].style.transform="translate3d(-79px,11px,0)"
			// el.getElementsByClassName('buybally')[0].style.transition="all 2s cubic-bezier(0.49, -0.29, 0.75, 0.41)";

			done();
		},
		afterEnter(el){
			this.isBallshow =!this.isBallshow;
		},
	},

	created(){
		this.cartlistlength = JSON.parse(localStorage.getItem('cartlistlength'))||'0';
	},
	props:['parproname'],
	computed: {
        footer_isLogin:{
        	get(){
        		// console.log(this.$store.state.storeisLogin||JSON.parse(localStorage.getItem('isLogin')),'footer')
            	return this.$store.state.storeisLogin||JSON.parse(localStorage.getItem('isLogin'));
        	},
        	set(){}
        }, 
        userlogined:{
        	get(){
    			return this.$store.state.storeuserlogined||JSON.parse(localStorage.getItem('userlogined'))||'0';
        	},
        	set() {
        		
        	}
        }
    },
	watch: {
		'cartlistlength':function(newValue,oldValue) {
			// setTimeout(()=>{
			// 	this.cartlistlength = newValue
			// },400)
				
		}
	},
	updated(){

	}
}
</script>
<style>
/* 全局样式 */
.mint-toast {
  background-color: red !important;
}
</style>
<style scoped lang='less'>
.operationfixcontainer {
	position: fixed;
	bottom: 0;
	max-width: 636px;
	height: 60px;
	width: 100%;
	z-index: 10;
	.operationbar {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top:1px solid #000 ;
		background-color: #fff;
		left: 0;
		.contactcs,.entershopper,.cart {
			display: flex; 
			flex-direction: column;
			justify-content: space-around; 
			align-items: center;
			color: #333;
			span {
				font-size: 12px;
			}
			span:nth-child(1){
				font-size: 28px;
			}
		}
		.cart {
			position: relative;
			.mui-badge-danger {
				position: absolute;
				top: 0px;
				right: 2px;

			}
			/* .v-enter,.v-leave-to {
				opacity: 0;
			}
			.v-enter-active,.v-leave-active {
				transition: all 0.4s ease;
			} */
		}
		.buttongroup {
			height: 100%;
			display: flex; 
			justify-content: flex-end;
			align-items: center;
			position: relative;
			button {
				padding: 0;
				margin: 0;
				height: 100%;
				width: 108px;
				border: 0;
				color: #fff;
				font-size: 16px;
			}
			.addtocart {
				background: #ff9600;
			}
			.buyball {
				position: absolute;
				top: -18px;
				left: 70px;
				width: 16px;
				height: 16px;
				border-radius: 50%;
				background: #dd524d;
				transition-timing-function: "all 0.5s cubic-bezier(.19,.3,.26,1)";
				.buybally{
					width: 16px;
					height: 16px;
					border-radius: 50%;
					background: #dd524d;
					transition-timing-function: "all 0.5s linear";
				} 
			}
			.buynow {
				background: #e4393c;
			}
		}

	}
}

</style>
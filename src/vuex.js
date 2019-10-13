// vuex数据中心
// 
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


var store = new Vuex.Store({
	state:{
		storescrollTop:null,
		storeisLogin:false,
		storecartlist:[],
		storecartlistlength:0,
		storetotalsettmentnum:0,
		storetotalsettmentamount:0,
		storeuserlogined:{}
	},
	mutations: {
		updatescrolltop(state,scrollTopfromapp){
			state.storescrollTop = scrollTopfromapp
		},
		updateisLogin(state,isLoginfromloginormyifo){
			state.storeisLogin = isLoginfromloginormyifo
			// console.log(state.storeisLogin,'vuex')
			localStorage.setItem('isLogin',window.JSON.stringify(state.storeisLogin))
		},
		updatecartlist(state,carlistfromoperationbar){
			state.storecartlist.concat(carlistfromoperationbar)
		},	
		updatecartlistlength(state,carlistlengthfromoperationbar){
			state.storecartlistlength = carlistlengthfromoperationbar
			localStorage.setItem('cartlistlengthfromvuex',window.JSON.stringify(state.storecartlistlength))
		},
		updatetotalsettmentnum(state,totalsettmentnumfromcart){
			state.storetotalsettmentnum = totalsettmentnumfromcart
			localStorage.setItem('totalsettmentnumfromvuex',window.JSON.stringify(state.storetotalsettmentnum))
		},
		updatetotalsettmentamount(state,totalsettmentamountfromcart){
			state.storetotalsettmentamount = totalsettmentamountfromcart
			localStorage.setItem('totalsettmentamountfromvuex',window.JSON.stringify(state.storetotalsettmentamount))
		},
		updateuserlogined(state,updateuserloginedfromlogin){
			state.storeuserlogined = updateuserloginedfromlogin
		}
	},
	getters:{}
	
})

export default store;
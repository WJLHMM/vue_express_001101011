// vuex数据中心
// 
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


var store = new Vuex.Store({
	state:{
		storescrollTop:null,
		storeisLogin:false,
		storecartlistkey:[],
		storecartlistlength:0,
		storetotalsettmentnum:0,
		storetotalsettmentamount:0,
		storeuserlogined:{},
		storepickedlist:[],
		storepicked:null

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
		updatecartlistkey(state,cartlistkeyfromoperationbar){
			state.storecartlistkey.concat(cartlistkeyfromoperationbar)
		},	
		updatecartlistlength(state,carlistlengthfromoperationbar){
			state.storecartlistlength = carlistlengthfromoperationbar
			localStorage.setItem('cartlistlengthfromvuex',window.JSON.stringify(state.storecartlistlength))
		},
		updatepicked(state,pickedfronsource){
			state.storepicked= pickedfronsource
			localStorage.setItem('picked',window.JSON.stringify(state.storepicked))
		},
		updatepickedlist(state,pickedlistfronsource){
			state.storepickedlist= pickedlistfronsource
			localStorage.setItem('pickedlist',window.JSON.stringify(state.storepickedlist))
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
			localStorage.setItem('userlogined',window.JSON.stringify(state.storeuserlogined))
		}
	},
	getters:{}
	
})

export default store;
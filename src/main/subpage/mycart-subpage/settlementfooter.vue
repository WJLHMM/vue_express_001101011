
<template>
	<div class="settlementfixcontainer">
		<div class="settlementfooter">
			<div class="checklist">
				<div class="checkradio">
					<input type="radio" name="">
				</div>
				<p class="crtext">全选</p>
			</div>
			<div class="settlement">
				<div class="listamount">
					<div class="laupper">
						<span class="lauppertext">
							总计：
						</span>
						<span class="current">
							￥
						</span>
						<span class="amount">{{totalsettmentamountfromvuex}}</span>
					</div>
					<div class="labelow">
						<div class="totalamount">
							<span class="tlbelowtext">
							 	总额：
							</span>
							<span class="current">
								￥
							</span>
							<span class="tlbelowamount">{{totalsettmentamountfromvuex}}</span>
						</div>
						<div class="totalreduction">
							<span class="trbelowtext">
							 	立减：
							</span>
							<span class="current">
								￥
							</span>
							<span class="trbelowamount">100</span>
						</div>
					</div>
				</div>
				<button class="settleclick">
					<span class="text1">去结算</span>
					<span>({{totalsettmentnumfromvuex}}件)</span>
				</button>
			</div>
		</div>
	</div>

</template>

<script >


export default {
	data() {
		return {
			
			
		}
	},
	methods: {
	   

	},

	created(){
	},
	computed: {
        footer_isLogin() {
            return this.$store.state.storeisLogin
        }, 
        totalsettmentnumfromvuex:{
        	get() {
        		return this.$store.state.storetotalsettmentnum||JSON.parse(localStorage.getItem('totalsettmentnumfromvuex'))||0
        	}
        },  
        totalsettmentamountfromvuex:{
        	get() {
        		return this.$store.state.storetotalsettmentamount||JSON.parse(localStorage.getItem('totalsettmentamountfromvuex'))||0
        	}
        }
    },
	props:['parlastestcartlist'],
	updated() {
	}
}
</script>

<style scoped lang='less'>
.settlementfixcontainer {
	position: fixed;
	bottom: 0;
	max-width: 636px;
	height: 60px;
	width: 100%;
	.settlementfooter {
		position: absolute;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top:1px solid #000 ;
		background-color: #fff;
		left: 0;
		.checklist {
			width: 20%;
			height: 100%;
			padding-top: 10px;
			.checkradio {
				width: 100%;
				height: 50%;
				line-height: 1;
				display: flex;
				justify-content: flex-start;
				align-items: center; 
				padding-left: 10px;
				input{
					width: 20px;
					height: 20px;
				}

			}
			.crtext {
				width: 100%;
				height: 50%;
				line-height: 1;
				text-align: left;
				padding-left: 8px;
				font-size: 10px;
				
			}
		}
		.settlement {
			width: 80%;
			height: 100%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			span{
				margin: 0;
				padding: 0;
			}
			.listamount {
				display: flex;
				padding-top: 10px;
				flex-direction: column;
				text-align: right;
				.laupper {
					width: 100%;
					height: 25px;

				}
				.labelow {
					width: 100%;
					height: 25px;
					font-size: 10px;
					display: flex;
					.totalamount {
						
					}
					.totalreduction{

					}
				}

			}
			.settleclick {
				height: 60px;
				background-color: red;
				font-size: 18px;
				color: #fff;
			}

		}
	}
}

</style>
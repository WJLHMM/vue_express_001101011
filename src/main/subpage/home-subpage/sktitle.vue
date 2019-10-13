
<template>
	<div class="sktitle">
		<div class="sksectionleft">
			<span class="sksectionlefttext1">京东秒杀</span>
			<span class="sksectionlefttext2">{{skroundtitle}}</span>
			<div class="skhour">{{hoursnumber}}:</div>
			<div class="skmin">{{minutesnumber}}:</div>
			<div class="sksec">{{secondsnumber}}</div>
		</div>
		<div class="sksectionright">
			<span>更多秒杀</span>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			skround:["0点场","6点场","8点场","10点场","12点场","14点场","16点场","18点场","20点场","22点场"],
			intervaltime:[6,2,2,2,2,2,2,2,2,2],
			currenttime:null,
			hoursdata:null,
			minutesdata:null,
			secondsdata:null,
			skroundtitle:null,
			intervaltimenumber:null,
			hoursnumber:null,
			minutesnumber:null,
			secondsnumber:null,
			lefttimetimer:null,
			i:null
		}
	},
	methods: {
		getcurrenttime(){
			// 确定进场时间段
			this.currenttime = new Date();
			this.hoursdata = this.currenttime.getHours();
			this.minutesdata = this.currenttime.getMinutes();
			this.secondsdata = this.currenttime.getSeconds();
			if((this.hoursdata==0)||(this.hoursdata==1)||(this.hoursdata==2)||(this.hoursdata==3)||(this.hoursdata==4)||(this.hoursdata==5)){ this.i=0;}
			else if((this.hoursdata==6)||(this.hoursdata==7)){ this.i=1;}
			else if((this.hoursdata==8)||(this.hoursdata==9)){ this.i=2;}
			else if((this.hoursdata==10)||(this.hoursdata==11)){ this.i=3;}
			else if((this.hoursdata==12)||(this.hoursdata==13)){ this.i=4;}
			else if((this.hoursdata==14)||(this.hoursdata==15)){ this.i=5;}
			else if((this.hoursdata==16)||(this.hoursdata==17)){ this.i=6;}
			else if((this.hoursdata==18)||(this.hoursdata==19)){ this.i=7;}
			else if((this.hoursdata==20)||(this.hoursdata==21)){ this.i=8;}
			else if((this.hoursdata==22)||(this.hoursdata==23)){ this.i=9;}
			// console.log(this.i)
			//确定是什么场次
			this.skroundtitle = this.skround[this.i];
			//进一步确定场次间隔时间
			this.intervaltimenumber = parseInt(this.skroundtitle)+this.intervaltime[this.i]-1;
			//计算每个场次的小时，分钟 秒的剩余时间
			if ((this.intervaltimenumber-this.hoursdata)<10){//如果是个位数，前面加一个零
				this.hoursnumber = '0' + (this.intervaltimenumber-this.hoursdata).toString()
			}else {
				this.hoursnumber =  (this.intervaltimenumber-this.hoursdata).toString()
			}

			if ((59-this.minutesdata)<10){
				this.minutesnumber = '0' + (59-this.minutesdata).toString()
			}else {
				this.minutesnumber =  (59-this.minutesdata).toString()
			}

			if ((59-this.secondsdata)<10){
				this.secondsnumber = '0' + (59-this.secondsdata).toString()
			}else {
				this.secondsnumber =  (59-this.secondsdata).toString()
			}
		
		},
	},
	props:[''],
	created(){
		if(this.lefttimetimer==null) {
			this.lefttimetimer = setInterval(this.getcurrenttime,1000)
			
		}else {
			clearInterval(this.lefttimetimer)
			this.lefttimetimer = setInterval(this.getcurrenttime,1000)
		}
	},
	destroyed() {
		clearInterval(this.lefttimetimer)
	}
		
	
}
</script>

<style scoped lang='scss'>
.sktitle{
	width:100%;
	height:34px;
	display:flex;
	padding-left:1%;
	padding-right:1%;
	align-items:center;
	justify-content:space-between;
	.sksectionleft {
		display:flex;
		align-items:center;
		.sksectionlefttext1 {
			color:red;
			font-size:20px;
			font-weight:bold;
		}
		.sksectionlefttext2 {
			font-size:10px;
			margin-right:2px;
		}
		.skhour,.skmin,.sksec {
			font-size:10px;
			margin-right:2px;
			color: #fff;
			background-color:#e4393c;
		}
	}
	.sksectionright {
		padding-right:2%;
		color:red;
		font-size:16px;
	}
}

	

	
</style>
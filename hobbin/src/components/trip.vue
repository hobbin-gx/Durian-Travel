<template>
	<div>
		<span class="join" @click="hha">加入行程</span>
		<span class="history" @click="handleClick">历史行程</span>
		
		<historytrip v-show ="isShow" v-model = "isShow"></historytrip>


	</div>
</template>

<script>

import HistoryTrip from '@/components/historytrip'

export default {

  name: 'trip',



  data () {
    return {
    	isShow : false
    };
  },

  methods : {
  	hha(){
  		// console.log(222);
  	},
  	handleClick(){
  		this.isShow = !this.isShow;
  	}
  },

  mounted () {
  	this.isLogin();
  },

  components : {
  	'historytrip' : HistoryTrip
  }
};
</script>

<style lang="scss" scoped>
	body,html{
		height:100%;
	}
	div{
		position: fixed;
		top:0;
		left:0;
		width:100%;
		height:100%;
		background:url('../assets/trip-empty.png') no-repeat center top;
		background-size:100% 75%;
		span{
			position: fixed;
			bottom : 1rem;
			font-size:0.2rem;
			border-radius : 0.1rem;
		}
		.join{
			left:0.5rem;
			padding:0.1rem 0.2rem;
			border:1px solid #fff;
			background:#000;
			color:#fff;
		}
		.history{
			right:0.5rem;
			padding:0.1rem 0.2rem;
			border:1px solid #000;
		}
	}
</style>
<template>
	<transition name="myanimation">
		<div class="his">
			<h2><span @click="handleClick"> × </span>历史行程</h2>
			<div>
				<p>亲，您暂无历史行程奥</p>
			</div>
		</div>
	</transition>
</template>

<script>
export default {

  name: 'historytrip',

  porps : ['value'],

  data () {
    return {

    };
  },

  methods : {
  	handleClick(){
  		this.$emit('input',false)
  	}
  }
};
</script>

<style lang="scss" scoped>
	html,body{
		height:100%;
	}
	div.his{
		position: fixed;
		top:0;
		left:0;
		height:100%;
		width:100%;
		background:url('../assets/empty.png') no-repeat center 1rem;
		background-color:#eee;
		p{
			font-size: 0.2rem;
			margin-top:2rem;
		}	
		h2{
			height:0.4rem;
			font-size:0.15rem;
			line-height: 0.4rem;
			text-align: center;
			font-weight: 100;
			background-color:#fff;
			// background-color: #f00;
			span{
				float: left;
				font-size:0.2rem;
				margin-left:0.1rem;
			}
		}
	}

	.myanimation-enter-active{
		animation: trans .2s 1 ;
	}
	.myanimation-leave-active{
		animation: trans .2s 1 reverse;
	}
	@keyframes trans{
		from{
			transform: translateY(100%);
			opacity: 0;
		}
		to{
			transform: translateY(0px);
			opacity: 1;
		}
	}
</style>
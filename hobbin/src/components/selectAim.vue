<template>
	<transition name = "myanimation">
		<div class="selectaim" v-show="value">
			<h2>选择目的地</h2>
			<ul>
				<li>厦门</li>
				<li>丽江</li>
				<li>大理</li>
				<li>成都</li>
				<li>重庆</li>
				<li>桂林</li>
			</ul>
		</div>
	</transition>
</template>

<script>
export default {

  name: 'selectAim',

  props : ['value'],

  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
	.selectaim{
		width:100%;
		height:100%;
		z-index: 2;
		position: fixed;
		left:0;
		top:0;
		background:#ff0;

	}
	h2{
		height:1rem;
		font-size:0.3rem;
		border-bottom:1px solid #ccc;
		line-height: 1rem;
		margin-bottom: 0.2rem;
	}
	ul{
		width:100%;
		li{
			width:50%;
			float: left;
			font-size:0.2rem;
			list-style: none;
			line-height: 0.5rem;
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
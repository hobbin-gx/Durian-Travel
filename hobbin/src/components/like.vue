<template>
	<div>
		<h2>喜欢</h2>
		<div class="empty">

			<p>您还没有喜欢的商品呦~</p>
		</div>
	</div>
</template>

<script>
export default {

  name: 'like',

  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
	html,body{
		height:100;
	}
	h2{
		height:0.4rem;
		line-height: 0.4rem;
		font-size:0.25rem;
		color:#f00;
		font-weight: 100;
	}
	div.empty{
		// background-color:#fff;
		position: fixed;
		height:100%;
		width:100%;
		top:0.4rem;
		left:0;
		background:url('../assets/empty.png') center 1rem no-repeat;
		background-color:#eee;
		// background: url('../assets/login_bg.jpg') no-repeat ;

		p{
			font-size:0.15rem;
			color:#999;
			margin-top:2.5rem;
		}
	}
</style>
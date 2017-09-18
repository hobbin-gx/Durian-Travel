<template>
	<ul class="underbar">
		<router-link to="/aim" tag="li">目的地</router-link>
		<router-link to="/like" tag="li">喜欢</router-link>
		<router-link to="/trip" tag="li">行程</router-link>
		<router-link to="/mine" tag="li">我的</router-link>
	</ul>
</template>

<script>
export default {

  name: 'underbar',

  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
	.underbar{
		position: fixed;
		bottom : 0;
		left:0;
		height:0.5rem;
		width:100%;
		background:#f00;
		z-index: 100;
		li{
			width:25%;
			height:100%;
			font-size:0.15rem;
			line-height: 0.5rem;
			text-align: center;
			list-style: none;
			float: left;
			color:#fff;
		}
	}
</style>
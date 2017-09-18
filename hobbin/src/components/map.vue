<template>
	<div @click = "handleClick">
		<b>map</b>
	</div>
</template>

<script>
export default {

  name: 'ad',

  props : ['value'],

  data () {
    return {

    };
  },
  methods : {
  	handleClick(){
  		this.$emit('input',!this.value);
  	}
  }
};
</script>

<style lang="scss" scoped>
	b{
		color:#fff;
		text-decoration: none;
	}
	div{
		height:0.3rem;
		width:0.6rem;
		background:rgba(255,0,0,0.5);
		position: fixed;
		top : 0.1rem;
		left:0.05rem;
		color:#fff;
		font-size:0.15rem;
		line-height: 0.3rem;
		border-radius: 0.2rem;
		z-index: 10;

	}
</style>
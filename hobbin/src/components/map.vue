<template>
	<div @click = "handleClick">
		<b>{{add}}</b>
	</div>
</template>

<script>

import Vue from 'vue';
import bus from '../bus.js';
import axios from 'axios';

export default {


  name: 'ad',

  props : ['value'],

  data () {
    return {               
    	add:'北京'
    };
  },
  methods : {
  	handleClick(){
  		this.$emit('input',!this.value);
  	}
  },

  mounted () {
  	bus.$on('address',(add)=>{
  			this.add = add;
  	})
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
		padding:0 0.1rem;
		background:rgba(255,0,0,0.5);
		position: absolute;
		top : 0.1rem;
		left:0.05rem;
		color:#fff;
		font-size:0.15rem;
		line-height: 0.3rem;
		border-radius: 0.2rem;
		z-index: 200;

	}
</style>
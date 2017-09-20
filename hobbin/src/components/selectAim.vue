<template>
	<transition name = "myanimation">
		<div class="all" v-show="value">
			<div class="selectaim">
				<h2>选择目的地</h2>
				<p>热门城市</p>
				<ul class="hot_city_list">
					<li v-for="data in hot_city_list" @click="search_city($event)">{{data}}</li>
				</ul>
				<p>全部城市</p>
				<ul class="all_city_list">
					<li v-for = "all in all_city_list" @click="search_city($event)" >{{all.name}}</li>
				</ul>
			</div>
		</div>
	</transition>
</template>

<script>

import axios from 'axios';
import bus from '../bus.js';

export default {

  name: 'selectAim',

  props : ['value','hot_city_list','all_city_list'],

  data () {
    return {
    	list : []
    };
  },
  methods:{
  	search_city(event){
  		//console.log(event.currentTarget.innerHTML);
  		bus.$emit('address',event.currentTarget.innerHTML);
  		// console.log(el.html());
  	}
  }
};
</script>

<style lang="scss" scoped>
	.all{
		width:100%;
		height:100%;
		overflow-y: scroll;
		position: fixed;
		top:0;
		left:0;
		z-index: 102;
		background:linear-gradient(45deg,rgba(86,203,216,.9),rgba(122,209,153,.9)),#fff;
		color:#fff;
		.selectaim{
			h2{
			height:1rem;
			font-size:0.3rem;
			border-bottom:1px solid #ccc;
			line-height: 1rem;
			margin-bottom: 0.2rem;
			}
			p{
				font-size: 0.3rem;
				width:100%;
				height:0.6rem;
				line-height:0.6rem;
			}
			ul.hot_city_list{
				width:100%;
				overflow:hidden;
				li{
					float: left;
					font-size:0.15rem;
					list-style: none;
					padding:0.05rem 0.15rem;
					margin:0.05rem 0.1rem;
					border:1px solid #fff;
					border-radius:0.15rem;
				}
			}
			ul.all_city_list{
				width:100%;
				li{
					width:90%;
					margin-left:5%;
					list-style: none;
					height:0.5rem;
					line-height:0.5rem;
					font-size:0.15rem;
					text-align: left;
					text-indent : 1em;
					border-bottom:1px solid rgba(255,255,255,0.3);
				}
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
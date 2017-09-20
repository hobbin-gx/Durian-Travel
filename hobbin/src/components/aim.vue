<template>
	<div class="all">
		<selectAim v-model="isShow" :hot_city_list="hot_city_list" :all_city_list="all_city_list"></selectAim>
		<swipe class='my-swipe' >
			<swipe-item v-for="pic in pic_list">
			<img v-bind:src="pic.img_url"  alt="">
			</swipe-item>
		</swipe>
		<ad class='mymap' v-model="isShow" v-bind="address"></ad>
		<h1>{{address}}</h1>
		<ul>
			<router-link tag="li" to="/list" v-for="theme in theme_list">
					<span>{{theme.title}}</span>
			</router-link>
			
		</ul>
		<gezi></gezi>
		<div class="hotroot">
			<p>热门路线 <i class="iconfont">&#xe6a7;</i></p>
			<div class="intersting" @click = "handleClick">
				<ul class="inter">
				<li v-for="rout in routs_list">
					<img v-bind:src='rout.cover' />
					<span>{{rout.name}}</span>
				</li>
				
			</ul>
			</div>
			
		</div>

		<search :theme_list= "theme_list"></search>
	
		<div class="over">
			<p>别扯了，已经到底了~</p>
		</div>


	</div>
</template>

<script>
import router from '../router';
import {Swipe,SwipeItem} from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css';
import ad from '@/components/map';
import SelectAim from '@/components/selectAim'
import Vue from 'vue'
import '@/assets/iconfont/iconfont.css'
import Search from '@/components/search'
import axios from 'axios';
import '@/assets/iconfont/iconfont.css'
import bus from '../bus.js';




export default {

  name: 'aim',

  props : ['address','dizhi'],

  data () {
    return {
    	isShow : false,
    	hot_city_list : [],
    	all_city_list : [],
    	pic_list : [],
    	theme_list : [],
    	routs_list : []

    };
  },
  components : {
  	'swipe': Swipe,
  	'swipe-item' : SwipeItem,
  	'ad' : ad,
  	'selectAim' : SelectAim,
  	'search' : Search
  },

  methods: {
	  handleClick () {
	  		router.push('/list');
	  }
  },

  mounted(){
  	axios.get('/api/map').then(res=>{
  		// console.log(res.data);
  		this.hot_city_list = res.data.city_data.domestic_city.hot_city_list;
		this.all_city_list = res.data.city_data.domestic_city.all_city_list;
		// console.log(this.all_city_list);  		
  	}),
  	axios.get('/api/pic').then(res=>{
  		var arr = res.data.data.elements[2];
  		// console.log(arr.items);
  		this.pic_list = arr.items;

  		var arr1 = res.data.data.elements.splice(0,2).concat(res.data.data.elements.splice(1));
  		// console.log(arr1);
  		this.theme_list = arr1;
  	}),
  	axios.get('/api/routs').then(res=>{
  		// console.log(res.data.data.product_tabs);
  		this.routs_list = res.data.data.product_tabs;
  	})

  },

  beforeMount () {
	  	bus.$on('address',(add)=>{
			var address = encodeURI(add);
			axios.get('/api/city?name=' + address).then(res=>{
				console.log(res.data);
			})
		})
  }


};
</script>

<style lang="scss" scoped>
	*{
		padding:0;
		margin:0;
	}
	.all{
		margin-bottom: 0.5rem;
		position: relative;
	}
	.my-swipe{
		height: 2.0rem;
		img{
			width:100%;
			height:100%;
		}
	}

	ul{
		width:100%;
		height:0.8rem;
		li{
			width:33%;
			height:0.3rem;
			list-style: none;
			text-align: center;
			font-size:0.16rem;
			margin-top:0.1rem;
			float: left;

			span{
				line-height: 0.3rem;
				font-size:0.12rem;
			}
		}
	}

	div.hotroot{
		width:100%;
		height:3rem;
		overflow: scroll;

		p{
			height:0.5rem;
			width:100%;
			line-height: 0.5rem;
			font-size:.15rem;
			i{
				font-size:0.1rem;
			}
		}
		div.intersting::-webkit-scrollbar{
			display:none;
		}
		div.intersting{
			height:2.5rem;
			width:100%;
			overflow:scroll;
			ul{
			height:2.5rem;
			width:40rem;
			li{
				height:100%;
				width:3rem;
				float:left;
				margin-top:0;
				margin-left:0.2rem;
				margin-right:0.2rem;
				img{
					display:block;
					height:2.1rem;
					width:100%;
				}
				span{
					display:block;
					width:100%;
					height:0.4rem;
					line-height: 0.4rem;
					font-size:0.2rem;
				}
			}
		}
		}
		
	}

	div.over{
		width:100%;
		height:0.4rem;
		margin-top: 0.2rem;
		border-top: 1px solid #ccc;
		p{
			width:100%;
			height:100%;
			background:#ddd;
			font-size:0.15rem;
			line-height: 0.4rem;
			color:#666;
		}
	}


</style>
<template>
	<div class="all">
		<selectAim v-model="isShow" :hot_city_list="hot_city_list" :all_city_list="all_city_list"></selectAim>
		<swipe class='my-swipe' >
			<swipe-item v-for="pic in pic_list">
			<img :src="pic.img_url"  alt="">
			</swipe-item>
		</swipe>
		<ad class='mymap' v-model="isShow"></ad>
		<ul>
			<router-link tag="li" to="/list" v-for="theme in theme_list">
					<span>{{theme.title}}</span>
			</router-link>
			
		</ul>
		<gezi></gezi>

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

  data () {
    return {
    	isShow : false,
    	hot_city_list : [],
    	all_city_list : [],
    	pic_list : [],
    	theme_list : [],
    	routs_list : [],
    	address_list : []

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

  	axios.get('/api/address').then(res=>{
  		this.address_list = res.data;
  		// console.log(res.data);
  		this.pic_list = res.data.data.elements[2].items;
  		this.theme_list = res.data.data.elements.splice(0,2).concat(res.data.data.elements.splice(1));
  	})

  	axios.get('/api/map').then(res=>{
  		// console.log(res.data);
  		this.hot_city_list = res.data.city_data.domestic_city.hot_city_list;
		this.all_city_list = res.data.city_data.domestic_city.all_city_list;
		// console.log(this.all_city_list);  		
  	}),

  	 bus.$on('address',(add)=>{
			this.address = encodeURI(add);
			axios.get('/api/city?name=' + this.address).then(res=>{
				// console.log(res.data);
				this.pic_list = res.data.data.elements[2].items;
  				this.theme_list = res.data.data.elements.splice(0,2).concat(res.data.data.elements.splice(1));
  				// console.log(this.theme_list);
  				this.address_list = res.data;


			})
		})
  	}

  // update () {
	 
  // }


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
		overflow: hidden;
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
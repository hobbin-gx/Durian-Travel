<template>
	<div class="all" >
			<div class='play' v-for="(v,index) in theme_list">
				<gezi></gezi>
				<p class="spacial" @click = "clickInto(v.more_url)">{{v.title}} <i class="iconfont" v-show=v.more_url>&#xe6a7;</i></p>

				<div class='scro'>
					<ul>
						<li v-for="i in v.items" @click = "clickDetail(i.product_id)"><img v-bind:src="i.title_page||i.cover||i.avatar_l||i.cover_image" alt=""><span>{{i.title||i.name||i.username||i.target.title}}</span></li>
					</ul>
				</div>
			</div>
	</div>
		

</template>

<script>

import router from '../router'
import Vue from 'vue'
import '@/assets/iconfont/iconfont.css'
Vue.component('gezi',{
	template : `
	<div class="gezi"></div>
	`
})


export default {


  name: 'search',

  props : ['theme_list'],

  data () {
    return {
    	isShow : true
    };
  },

  methods : {

  	clickInto (str) {
  		// console.log('++++++++++++++++++++');
  		// console.log(str);
  		var index = str.indexOf('com');
  		var str1 = str.substring(index + 4);
  		// console.log('++++++++++++++++++++');

  		if(str1){
  			// console.log(1111);
	  		router.push(`/list/${str1}`);

  		}
  	},

  	clickDetail (str){
  		router.push(`/details/${str}`);
  	}


  }
  
};
</script>

<style lang="scss" scoped>
		.gezi{
			width:100%;
			height:0.12rem;
			background:#ddd;
			margin-top: 0.05rem;
		}

		div.play{
		width:100%;
		p.spacial{
			width:100%;
			height:0.4rem;
			font-size:0.15rem;
			line-height:0.4rem;
			text-align: center;
			i{
				font-size:0.1rem;
			}
		}

		div.pic{
			width:100%;
			height:2rem;
			// margin-bottom: 0.1rem;
			img{
				width:100%;
				height:100%;
			}
		}
		div.scro::-webkit-scrollbar{
			display:none;
		}
		div.scro{
			// margin-top:0.1rem;
			width:100%;
			height:1.6rem;
			overflow-x: scroll;
			ul{
			width:16rem;
			height:100%;
			overflow-x: scroll;

			li{
				height:100%;
				width:2rem;
				float:left;
				list-style: none;
				margin:0 0.1rem;
				img{
					width:100%;
					display:block;
					height:1.3rem;
				}
				span{
					line-height: 0.3rem;
					font-size:0.15rem;
					display:block;
					width:100%;
					text-align:center;
					overflow:hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}
		}
		
	}
	
</style>
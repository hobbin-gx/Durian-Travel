<template>
	<div class="all">
		<p class='theme'><span @click = "handleClick"> < </span>{{title}}</p>

	 	<ul>
	 		<li v-for = "info in list" @click="click">
	 			<span class="heart" @click.stop="handlelike($event,info)" :style="{color : 'white'}">❤</span>
	 			<img :src="info.title_page||info.cover_image" alt="">
	 			<p>{{info.title||info.text}}</p>
	 			<span class="price" v-if='info.price'>￥{{info.price}}</span>
	 			<span class="state" v-if="info.tab_list">{{info.tab_list['0']}}</span>
	 		</li>
	 	</ul>
	</div>


</template>

<script>

import axios from 'axios'
import router from '../router'
import like from '../like.js'

export default {

  name: 'list',

  data () {
    return {
    	list : [],
    	title : '',
    	like_list : []
   	 };
  },

  components : {
  },

  mounted () {

  		this.title = this.$route.query.module_name;
  		console.log(this.title);

  		var str2 = this.$route.fullPath.substring(5);
		console.log(str2);

		axios.post('/api/list',{
				str2
		}).then(res=>{
			console.log(res.data);
			if(!res.data.data.product_list){
				this.list = res.data.data.hot_spot_list;
			}else{
				this.list = res.data.data.product_list;
			}
		})
 },


  methods : {
  	handleClick(){
  		// console.log(11);
  		router.go(-1);
  	},
  	click(){
  		router.push('/details');
  	},

  	handlelike(el,info){
  		this.isLogin();
  		// console.log('+++++++++++');
  		// console.log(info);
  		// console.log('+++++++++++');
  		// console.log(this.like_list.info); 
  		var del = false;
  		var arr1 ;
  		var arr2 = [];
  		for(var i = 0 ; i < this.like_list.length ; i++){
  			if(info === this.like_list[i]){
  				del = true;
  				arr1 = this.like_list.splice(i,1);
  			}
  		}	
  		if(del === false){
  			this.like_list.push(info);
  		}
  		arr2 = this.like_list;
  		this.$store.commit('changeTitle',arr2);

  		// if(this.like_list.info === undefined){
  		// 	this.like_list.push(info);
  		// }else{
  		// 	var index = this.like_list.indexOf(info);
  		// 	var zu = this.like_list.splice(index,1);
  		// 	console.log(this.like_list);
  		// }
  		// console.log(el.target);
  		if(el.target.style.color =='white'){
  			el.target.style.color = 'red';
  		}else{
  			el.target.style.color = 'white';
  		}
  		console.log(this.like_list);
  	}
  }
};
</script>

<style lang="scss" scoped>
	div.all{
		font-size:0.15rem;
		background:#fff;
		margin-bottom: 0.6rem;

		p.theme{
			width:100%;
			height:0.4rem;
			font-size:0.15rem;
			line-height: .4rem;
			background:#fff;
			span{
				float: left;
				margin-left:0.1rem;
			}
		}
		ul{
			width:90%;
			margin:0 auto;
			li{
				width:100%;
				list-style:none;
				margin-top:0.25rem;
				background:#fff;
				overflow:hidden;
				position:relative;

				img{
					width:100%;
				}
				p{
					width:100%;
					// height:0.4rem;
					line-height:0.3rem;
					text-align: left;
				}
				span.heart{
					position: absolute;
					top:0.1rem;
					right:0.1rem;
					font-size:0.3rem;
					color:#fff;
				}
				span.price{
					float:left;
					margin-left:0.15rem;
					font-size:0.2rem;
					color:#f00;
				}
				span.state{
					float:right;
					margin-right:0.15rem;
					font-size:0.15rem;
				}
			}
		}	
	}
	
</style>
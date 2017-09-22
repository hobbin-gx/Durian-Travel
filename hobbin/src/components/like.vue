<template>
	<div class="all">
		<h2>喜欢</h2>
		<ul class="empty" v-show = "num">
		<!-- <p>{{love}}</p> -->
			<li v-for="i in love">
				<img :src="i.title_page" alt="">
				<p>{{i.title}}</p>
				<p>
					<span class='price'>￥{{i.price}}</span>
					<span class="username">{{i.user.name}}</span>
				</p>

			</li>
			
		</ul>
		<p v-show ='!num' class="no">您还没有喜欢的商品~</p>
	</div>
</template>

<script>

import like from '../like.js'

export default {

  name: 'like',

  data () {
    return {
    	num : 0,
    };
  },

  mounted(){
  	this.isLogin();
  },

  computed : {
  	love : function (){
  		console.log('^^^^^^^^^^^^^^^^^^^^^^');
  		console.log(this.$store.state.like_list);
  		console.log('^^^^^^^^^^^^^^^^^^^^^^');
  		console.log(this.$store.state.like_list.length)
		if(this.$store.state.like_list.length === 0 ){
  			this.num = 0 ;
  		}else{
  			this.num = 1;
  			this.back = "#fff";
  		}  		
  		return this.$store.state.like_list;
  	}
  }
};
</script>

<style lang="scss" scoped>
	html,body{
		height:100;
	}
	div.all{
		top:0.4rem;
		left:0;	
		position: fixed;
		height:100%;
		width:100%;		
		h2{
			height:0.4rem;
			line-height: 0.4rem;
			font-size:0.2rem;
			color:#f00;
			font-weight: 100;
			position:fixed;
			top:0;
			left:0;
			text-align:center;
			width:100%;
		}
		p.no{
			background:url('../assets/empty.png') center 1rem no-repeat;
			background-color:#eee;			
			position : absolute;
			top:0;
			left:0;
			height:100%;
			width:100%;
			text-align:center;
			line-height:3rem;
			font-size:0.3rem;
			color:#333;
		}
		ul.empty{
			overflow-y: scroll;
			height:90%;
			padding-bottom: 3rem;
			li{
				width:100%;
				padding-bottom:0.3rem;
				list-style:none;
				background:#fff;
				img{
					width:100%;
					margin-top:0;
					display: block;
				}
				p{
					font-size:0.15rem;
					color:#999;
					height:0.3rem;
					line-height:0.3rem;
					background:#fff;
					// margin-top:0.1rem;
					.price{
						float : left;
						margin-left:0.15rem;
						color:#f00;
						font-size:0.2rem;
					}
					.username{
						float: right;
						margin-right:0.15rem;
						color:#666;
					}
				}
			}
			
		}	
}
	
</style>
<template>
	<div class="all">
		<p class="top"><span @click="leave"> < </span> <b>❤</b></p>
		<swipe class='my-swipe' >
			<swipe-item>
				<img src="../assets/img1.jpg" alt="">	
			</swipe-item>
			<swipe-item>
				<img src="../assets/img2.jpg" alt="">		
			</swipe-item>
			<swipe-item>
				<img src="../assets/img3.jpg" alt="">		
			</swipe-item>
			<swipe-item>
				<img src="../assets/img4.jpg" alt="">		
			</swipe-item>
		</swipe>
		<h2>杨桃院子下午茶·在历经沧桑的漂流木的空家里防控思绪（三店通用）</h2>
		<p class="money">￥48</p>
		<ul class="eva">
			<li>喜欢 <span>0</span></li>
			<li>评价 <span>0</span></li>
			<li>已售 <span>0</span></li>
		</ul>

		<div class="info">
			<ul>
				<li>以船木和漂流木原创为主题</li>
				<li>鼓浪屿精神味蕾舒放的所在</li>
			</ul>
			<img src="../assets/img1.jpg" alt="">
			<p>幽远，沉静的院落，质朴的红砖楼藏着六百平方米大庭院，开满花的几颗杨桃树，独具一格的船木和漂流木，如同一格装置艺术作品，让杨桃院子有了历史的沉淀感，拼接的老旧瓷砖，总是插着鲜花的桌面，自然飘落的树叶，草木随着四季的枯荣，在这座优美的岛屿上，坐在最是鼓浪屿精神味蕾舒放的所在，浪费一下午的时光，类一杯咖啡喝小餐，是多么幸福的事情。</p>
			<router-link to="/mine" tag="span" class="see">查看详细信息</router-link>
		</div>

		<p class="pay">
			<span class="buy">购买</span>
			<span class="keeper">榴莲管家</span>
		</p>
	</div>
</template>

<script>

import {Swipe,SwipeItem} from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css';
import axios from 'axios';
import router from '../router'
export default {



  name: 'details',

  data () {
    return {
    	detailslist : []
    };
  },

  components: {
  	'swipe': Swipe,
  	'swipe-item' : SwipeItem,
  },

  methods:{
  	leave(){
  		router.go(-1);
  	}
  },

  mounted () {

  	// http://web.breadtrip.com/hunter/product/16133/comments/more/?start=0&count=20&public=1

  // 		axios.get(`/api/details/${this.$route.query.testid}?__t=1505289765496`).then(res=>{
  // 		console.log(res.data);

  // 		this.filminfo = res.data.data.film;
  // 	})

  		var str = this.$route.params[0].substring(1);
  		console.log(str);
  		axios.post('/api/details',{
				str
		}).then(res=>{
			console.log(res.data.items);
			this.detailslist = res.data;
		})



  }

};



</script>

<style lang="scss" scoped>
	div.all{
		font-size:0.15rem;
		margin-bottom:1rem;
		p.top{
			width:100%;
			height:0.4rem;
			line-height: 0.4rem;
			position: fixed;
			// background:#fff;
			top:0;
			left:0;
			z-index: 1;
			font-size:0.3rem;
			color:#fff;
			span{
				float:left;
				margin-left:0.15rem;
			}
			b{
				float:right;
				margin-right:0.15rem;
			}
		}
		.my-swipe{
			height: 3.0rem;
			img{
				width:100%;
				height:100%;
				}
		}
		p.pay{
			height:0.5rem;
			width:100%;
			font-size:0.1rem;
			position: fixed;
			z-index:1000;
			bottom: 0;
			left:0;
			background:#fff;
			line-height:0.5rem;
			span.buy{
				float:left;
				height:0.4rem;
				width:70%;
				background:#000;
				border-radius: 0.05rem;
				color:#FFF;
				text-align :center;
				line-height:0.4rem;
				margin-top:0.05rem;
				margin-left:0.1rem;
			}
			span.keeper{
				width:20%;
				height:0.4rem;
				border:1px solid red;
				border-radius : 0.05rem;
				color:red;
				line-height: 0.4rem;
				float:right;
				margin-right:0.1rem;
				margin-top:0.05rem;
				box-sizing:border-box;
			}
		}

		h2{
			line-height:0.2rem;
			font-size:0.15rem;
			text-align:left;
			padding:0 0.15rem;
			padding-top:0.05rem;
			box-sizing: border-box;
			margin-bottom: 0.1rem;
		}
		ul.eva{
			width:100%;
			height:0.4rem;
			background:#eee;
			border-top:1px solid #ccc;
			border-bottom:1px solid #ccc;
			display: flex;
			margin-top:0.1rem;
			line-height:0.4rem;
			li{
				flex:1;
				list-style: none;
			}
		}
		p.money{
			text-align: left;
			text-indent:0.2rem;
			color:#f00;
		}

		div.info{
			wdith:100%;
			overflow: hidden;
			ul{
				width:100%;
				li{
					line-height:0.4rem;
					list-style: none;
					text-align:left;
					text-indent:0.2rem;
				}
			}
			img{
				width:100%;
				height:2rem;
				margin:0.2rem 0;
			}
			p{
				line-height: 0.2rem;
				width:90%;
				padding:0 5%;
				text-indent: 2em;
				text-align: justify;
			}
			span.see{
				display:block;
				width:60%;
				height:0.4rem;
				line-height:0.4rem;
				border:1px solid #aaa;
				float:left;
				margin-left:20%;
				margin-top: 0.3rem;
				border-radius:0.08rem;
			}
		}
}
	
</style>
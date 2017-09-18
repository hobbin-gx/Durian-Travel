<template>
	<div>
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
		<ad class='mymap' v-model="isShow"></ad>
		<selectAim v-model="isShow"></selectAim>
		<ul>
			<router-link tag="li" to="/like">
				<i class="iconfont">&#xe696;</i>
				<span>特色玩法</span>
			</router-link>
			<router-link tag="li" to="/like">
				<i class="iconfont">&#xe6ba;</i>
				<span>诚意美食</span>
			</router-link>
			<router-link tag="li" to="/like">
				<i class="iconfont">&#xe722;</i>
				<span>精选之宿</span>
			</router-link>
			<router-link tag="li" to="/like">
				<i class="iconfont">&#xe6e9;</i>
				<span>绝美风光</span>
			</router-link>
			<router-link tag="li" to="/like">
				<i class="iconfont">&#xe6ce;</i>
				<span>多日游</span>
			</router-link>
			<router-link tag="li" to="/like">
				<i class="iconfont">&#xe6c7;</i>
				<span>一日游</span>
			</router-link>
			<router-link tag="li" to="/like">
				<i class="iconfont">&#xe6f2;</i>
				<span>便捷交通</span>
			</router-link>
			<router-link tag="li" to="/like">
				<i class="iconfont">&#xe707;</i>
				<span>地道特产</span>
			</router-link>
		</ul>
		<gezi></gezi>
		<div class="hotroot">
			<p>热门路线</p>
			<div class="intersting">
				<ul class="inter">
				<li>
					<img src='../assets/img1.jpg' />
					<span>厦门·3天2晚 在小清新之地遇见大海</span>
				</li>
				<li>
					<img src='../assets/img2.jpg' />
					<span>厦门·3天2晚 在小清新之地遇见大海</span>
				</li>
				<li>
					<img src='../assets/img3.jpg' />
					<span>厦门·3天2晚 在小清新之地遇见大海</span>
				</li>
				<li>
					<img src='../assets/img4.jpg' />
					<span>厦门·3天2晚 在小清新之地遇见大海</span>
				</li>
				<li>
					<img src='../assets/img1.jpg' />
					<span>厦门·3天2晚 在小清新之地遇见大海</span>
				</li>
			</ul>
			</div>
			
		</div>
		<gezi></gezi>


	</div>
</template>

<script>
import {Swipe,SwipeItem} from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css';
import ad from '@/components/map';
import SelectAim from '@/components/selectAim'
import Vue from 'vue'
import '@/assets/iconfont/iconfont.css'

Vue.component('gezi',{
	template : `
	<div class="gezi"></div>
	`
})

export default {

  name: 'aim',

  data () {
    return {
    	isShow : false
    };
  },
  components : {
  	'swipe': Swipe,
  	'swipe-item' : SwipeItem,
  	'ad' : ad,
  	'selectAim' : SelectAim
  }
};
</script>

<style lang="scss" scoped>
	*{
		padding:0;
		margin:0;
	}
	.my-swipe{
		height: 2.0rem;
		img{
			width:100%;
			height:100%;
		}
	}
	.gezi{
		width:100%;
		height:0.12rem;
		background:#ddd;
		margin-top: 0.05rem;
	}
	ul{
		width:100%;
		height:1.2rem;
		li{
			width:25%;
			height:0.5rem;
			list-style: none;
			text-align: center;
			font-size:0.16rem;
			margin-top:0.1rem;
			float: left;
			i{
				display: block;
				line-height:0.25rem;
			}
			span{
				line-height: 0.25rem;
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
			width:17rem;
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
					font-size:0.12rem;
				}
			}
		}
		}
		
	}
	
</style>
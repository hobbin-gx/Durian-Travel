<template>
	<div class="all">
		<div class="person">
			<span>
				<img src="../assets/favicon.jpg" alt="">
			</span>
			<b>LL18842659299</b>
		</div>
		<div class="content">
			<div class="pag">
				<router-link to="/login">
					<span>消费券</span>
					<span>暂无</span>
				</router-link>
				<router-link to="/login">
					<span>优惠券</span>
					<span>暂无</span>
				</router-link>
				<router-link to="/login">
					<span>钱包</span>
					<span class="money">0.00</span>
				</router-link>
			</div>	

			<div class="list">
				<p>我的订单 <span>查看全部订单></span></p>
				<ul>
					<router-link to="/mine" tag="li">待付款</router-link>
					<router-link to="/mine" tag="li">待出行</router-link>
					<router-link to="/mine" tag="li">待评价</router-link>
					<router-link to="/like" tag="li">退款</router-link>
				</ul>
			</div>

			<div class="center">
				<router-link to="like" tag="p"><p>邀请有礼<span>></span></p></router-link>
				<router-link to="like" tag="p"><p>常用旅客<span>></span></p></router-link>
				<router-link to="like" tag="p"><p>个人偏好<span>></span></p></router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'aim',

  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
	html,body{
		height:100%;
	}
	div.all{
		position: fixed;
		top : 0;
		left:0;
		height:100%;
		width:100%;
		.person{
			width:100%;
			height:1.5rem;
			background: url('../assets/mine.jpg') no-repeat;
			background-size:cover;
			position: relative;
			padding-top:.5rem;
			span{
				position: absolute;
				left:50%;
				top : 50%;
				margin-top:-0.5rem;
				margin-left:-0.3rem;
				width:0.6rem;
				height:0.6rem;
				border-radius: 50%;
				background:#ccc;
				line-height: 0.6rem;
				overflow:hidden;
				img{
					width:100%;
					height:100%;
					display: block;
				}
			}
			b{
				font-weight:100;
				color:#fff;
				font-size:0.18rem;
			}
		}

	div.content{
		background:#fff;
		width:100%;
		background:#eee;
		div.pag{
			width:100%;
			background:#fff;
			height:0.6rem;
			display:flex;
			a{
				flex:1;
				font-size:0.15rem;
				text-decoration: none;
				span{
					display:block;
					line-height: 0.3rem;
					color:#444;
				}
				span:nth-of-type(2){
					color:#999;
					font-size:0.12rem;
				}
				span.money{
					color:#f00;
				}
			}
		}

		div.list{
			margin-top: 0.1rem;
			width:100%;
			height:1rem;
			background:#fff;
			font-size:0.15rem;
			p{
				height:0.5rem;
				line-height: 0.5rem;
				color:#333;
				text-align:left;
				text-indent: 0.2rem;
				border-bottom: 1px solid #ccc;
				span{
					float: right;
					margin-right:0.2rem;
					font-size:0.12rem;
					color:#999;
				}
			}
			ul{
				li{
					width:25%;
					float:left;
					list-style: none;
					line-height: 0.5rem;
				}
			}
		}

		div.center{
			margin-top:0.1rem;
			width:100%;
			background:#fff;
			p{
				width:95%;
				margin-left:2.5%;
				height:0.4rem;
				font-size:0.15rem;
				line-height: 0.4rem;
				text-indent: 0.1rem;
				text-align: left;
				border-bottom:1px solid #ccc;
				margin-bottom: 0.1rem;
				span{
					font-size:0.2rem;
					float:right;
					margin-right: 0.05rem;
					color:#ccc;
				}
			}
		}
	}
}
</style>
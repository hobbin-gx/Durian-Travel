<template>
	<div class="all">
		<div class="pic">
				<img src="../assets/img1.jpg" alt="">
				<b>❤</b>
				<span>running way! 中山路美食任务吃货游</span>
			</div>
			<div class="info">
				<p>
					<span class="money">￥18</span>
					<span class="sole">独家</span>
				</p>

				<ul class="intro">
					<li>中山路</li>
					<li>小吃推荐</li>
					<li>美食攻略</li>
					<li>本地任务</li>
				</ul>
			</div>
			<div class="present"> 
				<span class="idea"><b>4</b>人感兴趣</span>
				<span class="solded">已售 <b>19</b></span>
			</div>
	</div>
</template>

<script>
export default {

  name: 'good',

  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
	div.all{
		font-size:0.15rem;
		background:#fff;
		div.pic{
			width:100%;
			height:2.0rem;
			position: relative;

			img{
				width:100%;
				height:100%;
			}
			b{
				position: absolute;
				top:0.08rem;
				font-size:0.3rem;
				color:#f00;
				right:0.2rem;
			}
			span{
				position: absolute;
				bottom:0;
				left:0;
				background:rgba(40,40,40,0.4);
				color:#fff;
				height:0.25rem;
				width:100%;
				line-height:0.25rem;
				text-align: left;
				text-indent:0.15rem;
			}
		}
		div.info{
			overflow: hidden;
			p{
				height:0.3rem;
				width:100%;
				line-height: 0.3rem;
				span.money{
					float: left;
					color:#f00;
					font-size:0.18rem;
					margin-left:0.15rem;
				}
				span.sole{
					float:right;
					color:#0ff;
					margin-right:0.15rem;
				}
			}
			ul{
				width:100%;
				height:0.35rem;
				border-bottom:1px solid #eee;
				li{
					float:left;
					list-style: none;
					font-size:0.1rem;
					padding:0.04rem 0.04rem;
					border-radius: 0.04rem;
					background:#ddd;
					margin:0.05rem 0.05rem;
					margin-bottom:0;
				}
			}

		}
		div.present{
				height:0.3rem;
				width:100%;
				color:#aaa;
				line-height:0.3rem;
				font-size:0.12rem;
				span.idea{
					float:left;
					margin-left:0.15rem;
				}
				span.solded{
					float:right;
					margin-right:0.15rem;
				}
			}
	}
	
		
</style>
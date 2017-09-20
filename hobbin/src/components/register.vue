<template>
	<transition class="myanimation">
		<div class="regist">
			<span class="close">×</span>
			<img src="../assets/liulian.com.png" alt="">
			<p><span>手机</span><input type="text" v-on:input="handleInput"/></p>
			<p><span>密码</span><input type="password" /></p>
			<router-link to="/login" class="log">直接登录</router-link>
			<button @click = 'handle'>注册</button>
		</div>
	</transition>
</template>

<script>
export default {

  name: 'login',

  data () {
    return {

    };
  },

  methods : {
  		handleInput(el){
  			console.log(el.path['0'].value);
  		},

		handle(){
			console.log();
			console.log(this.state.password);
			// var userRegex = /^1[3,4,5,7,8]\d{9}$/;
			// var pwRegex = /^[a-zA-Z][A-Za-z0-9_]{5,16}$/;
			// if(this.state.phonenumber==''){
			// 		this.setState({
			// 			unameHelp: "用户不能为空"
			// 		})
			// }else{
			// 	if(!userRegex.test(this.state.phonenumber)){
			// 		this.setState({
			// 			unameHelp:"请输入正确的11位电话号"
			// 		})

			// 	}else{
			// 		this.setState({
			// 			unameHelp:""
			// 		})

			// 	}
			// }
			// if(this.state.password==''){
			// 	this.setState({
			// 			upwdHelp: "密码不能为空"
			// 		})
			// }else{
			// 	if(!pwRegex.test(this.state.password)){
			// 		this.setState({
			// 			upwdHelp: "请输入一个首字母为英文的6-17位的密码"
			// 		})
			// 	}else{
			// 		this.setState({
			// 			upwdHelp: ""
			// 		})
			// 	}
			// }
		}


  }
};
</script>

<style lang="scss" scoped>
	html,body{
		height:100%;
	}
	.regist{
		position: fixed;
		z-index:101;
		top:0;
		left:0;
		height:100%;
		width:100%;
		background: url('../assets/login_bg.jpg') no-repeat ;
		background-size:100% 100%;	

		.close{
			position: absolute;
			top : 0.3rem;
			left:0.2rem;
			color:#ccc;
			font-size:0.5rem;
		}

		img{
			margin-top:1.2rem;
			width:1.5rem;
		}
		p{
			width:85%;
			margin-left:7.5%;
			border-bottom:2px solid #fff;
			height:0.3rem;
			font-size:0.15rem;
			line-height: 0.3rem;
			margin-bottom: 0.2rem;
			text-align: left;
			span{
				border-right:1px solid #fff;
				padding-right: 0.1rem;
			}
			input{
				width:80%;
				height:90%;
				margin-left:0.05rem;
				line-height: 0.3rem;
				border:0;
				outline:0;
				background:none;
				font-size:0.15rem;
				text-indent : 0.2rem;
				color:#fff;
			}
		}
		button{
			width:80%;
			height:0.4rem;
			background:#f00;
			text-align: center;
			line-height: 0.4rem;
			border-radius : 0.05rem;
			font-size:0.15rem;
			color:#fff;
			outline:none;
			border:0;


		}
		.log{
			font-size:0.15rem;
			float: right;
			position: absolute;
			right:0.2rem;
		}
	}

</style>
<template>
	<transition name="myanimation">
		<div class="login">
			<span class="close" @click="handleClick">×</span>
			<img src="../assets/liulian.com.png" alt="">
			<p><span>手机</span><input type="text" v-on:input="usernameInput"/></p>
			<p><span>密码</span><input type="password" v-on:input="passwordInput"/></p>
			<router-link to="/register" class="reg">注册</router-link>
			<button @click = 'handle'>登录</button>
		</div>
	</transition>
</template>

<script>

import router from '../router'
import axios from 'axios'

export default {

  name: 'login',


  data () {
    return {
    	username : '',
    	password : '',
    	userisok : false,
    	pwisok : false,
    	unameHelp : '',
    	upwdHelp : ''
    };
  },

  methods : {

  		handleClick(){
  			router.push('aim');
  		},

  		usernameInput(el){
  			// console.log(el.path['0'].value);
  			this.username = el.path['0'].value;
  		},

  		passwordInput(el){
  			this.password = el.path['0'].value;
  		},



		handle(){
		var userRegex = /^1[3,4,5,7,8]\d{9}$/;;
		var pwRegex = /^[a-zA-Z][A-Za-z0-9_]{5,16}$/;
		if(this.username==''){
				this.unameHelp = '用户不能为空';
		}else{
			if(!userRegex.test(this.username)){
				this.unameHelp = '请输入正确的11位电话号'
			}else{
				this.unameHelp ='';

			}
		}
		if(this.password==''){
			this.upwdHelp = "密码不能为空";
		}else{
			if(!pwRegex.test(this.password)){
				this.upwdHelp =  "请输入一个首字母为英文的6-17位的密码";
			}else{
				this.upwdHelp = '';

			}
		}


		axios.post("/api/login",{
			name:this.username,
			password:this.password
		}).then(res=>{console.log(res);
			if(this.unameHelp==''&&this.upwdHelp==''){
				sessionStorage.setItem('name', this.username);
				router.push('/aim')
			}
		}).catch(error=>{console.log(error);
					console.log({
							errorMessage:error
						})
					if(this.unameHelp==''&&this.upwdHelp==''&&!this.errorMessage==''){
						alert("账户不存或账户、密码错误")
					}
				}
			)

			if(this.unameHelp == '' && this.upwdHelp == ''){

				axios.post('api/login',{
					username : this.username,
					password : this.password
				}).then(res=>{
					router.go(-1);
				}).catch(error=>{console.log(error)})
			}

		}
  	},

  mounted(){

  }
};
</script>

<style lang="scss" scoped>
	html,body{
		height:100%;
	}
	.login{
		position: fixed;
		z-index:301;
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
				padding-right:0.1rem;
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
		.reg{
			font-size:0.15rem;
			float: right;
			position: absolute;
			right:0.2rem;

		}
	}


    .myanimation-enter-active{
       animation: trans .600s 1 ;
    }

    .myanimation-leave-active{
    	animation: trans .600s 1 reverse;
    }

    @keyframes trans {
    	from{
          transform :translateY(100%);
          opacity: 0;
    	}

    	to{
   			transform :translateY(0);
   			opacity: 1;
    	}
    }

   

</style>
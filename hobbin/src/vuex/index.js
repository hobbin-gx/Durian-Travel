import Vuex from 'vuex'
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({

	state : {
		// 设置状态
		like_list : []

	},

	mutations : {
		// 同步调用，可以直接操作状态
		changeTitle : (state,like_list)=>{
			console.log('&&&&&&&&&&&');
			console.log(like_list);
			console.log('&&&&&&&&&&&');
			state.like_list = like_list; 

		}

	}

})

export default store;
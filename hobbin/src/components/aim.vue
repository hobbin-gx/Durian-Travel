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
	</div>
</template>

<script>

import {Swipe,SwipeItem} from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css';
import ad from '@/components/map';
import SelectAim from '@/components/selectAim'

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
	
</style>
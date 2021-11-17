<template>
  <div id="app">
    	<app-preloader/>
	
      <app-nav/>
      
 	 <router-view/>

  </div>
</template>

<script>

import  AppPreloader from './components/Preloader.vue'
import AppNav from './components/Nav.vue'
export default {
  
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    	  AppNav,
	  AppPreloader
  }
}
</script>

<style lang="scss">

</style>

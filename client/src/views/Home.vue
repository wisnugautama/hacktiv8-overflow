<template>
<div>
  <div class="g-signin2" data-longtitle="true"></div>
    <!-- <Carousel></Carousel> -->
  <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
export default {
  name: 'home',
  components: {
    Carousel
  },
  
  mounted () {
        
    }
}


</script>

<style>
  .g-signin2 {
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  body {
        /* background-color: black; */
    }
</style>


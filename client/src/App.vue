<template>
  <div id="app">
      <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  },
}
</script>


<style>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";

body {
  /* background-image: url('./assets/bekgron.png'); */
  background-repeat: no-repeat;
  background-size:cover;
  background-position: 
  center center;
  width: 100%;
  background-attachment: fixed;
  /* background-color: black; */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

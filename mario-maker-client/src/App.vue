<template>
  <div id="app">
    <NavBar/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue';

export default {
  name: 'app',
  components: {
    'NavBar': NavBar
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  margin-top: 60px;
}
</style>

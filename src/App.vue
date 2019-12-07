<template>
  <div id="app">
    <main-app></main-app>
  </div>
</template>

<script>
import MainApp from '@/components/MainApp.vue'

export default {
  name: 'app',
  components: {
    MainApp
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
} */
@import'~bootstrap/dist/css/bootstrap.css'
</style>

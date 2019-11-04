<template>
  <div>
    <header-nav></header-nav>
    <router-view> </router-view>
  </div>
</template>

<script>
import HeaderNav from '@/components/shared/header/HeaderNav.vue'
import Home from '@/components/pages/Home.vue'

import router from '@/router';

export default {
  data(){
    return{
      currentRoute:'',
    }
  },

  components: {
    HeaderNav,
    Home
  },
}
</script>
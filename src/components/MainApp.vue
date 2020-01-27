



<template>
  <div>
    <header-nav></header-nav>
    <router-view> </router-view>
    <copyright></copyright>
  </div>
</template>

<script>
import HeaderNav from '@/components/shared/header/HeaderNav.vue'
import Copyright from '@/components/shared/footer/Footer.vue'
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
    Copyright,
    Home 
  },
}
</script>
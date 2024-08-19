<template>
  <section>
  <NavbarComp/>
  <router-view/>
  <FooterComp/>

  </section>
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from './components/FooterComp.vue';

export default {
  component:{
      NavbarComp,
      FooterComp
    }
  }
</script>
<style>
#app {
  font-family: "Noto Serif", serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

body::-webkit-scrollbar {
display: none;
}

</style>

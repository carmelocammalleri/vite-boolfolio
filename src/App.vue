<script>
import Header from './components/partials/Header.vue';

export default {
  name:'App',
  components: {
    Header
  },
  data(){
    return {

    }
  }
}
</script>

<template>
  <Header/>
  <div class="container-routes">
    <RouterView/>

  </div>
  
</template>

<style lang="scss">
  .container-routes {
    margin: 10px;
  }
</style>

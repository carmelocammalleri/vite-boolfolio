<script>
import { store } from '../data/store.js';

export default{
  name:'ViewProjectComponent',
  data(){
    return {
      store
    }
    
  },
  mounted(){
   
  }
}
</script>

<template>
  <ul>
    <li v-for="project in store.projects" :key="store.id"> {{ project.name }}</li>
  </ul>
</template>

<style lang="scss">

</style>

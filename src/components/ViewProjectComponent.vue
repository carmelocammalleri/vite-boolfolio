<script>
import { store } from '../data/store.js';

export default{
  name:'ViewProjectComponent',
  data(){
    return {
      title: 'Portfolio progetti',
      store
    }
    
  },
  mounted(){
   
  }
}
</script>

<template>
  <div class="projectsView">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="project in store.projects" :key="store.id"> {{ project.name }}</li>
    </ul>
  </div>
</template>

<style lang="scss">
  .projectsView {
    color: white;
    ul{
      padding: 0;
      width: 100%;
      li{
        margin: 0 auto;
        background-color: yellow;
        margin-top: 7px;
        width: 400px;
        list-style: none;
        color: black;
      }
    }
  }
</style>

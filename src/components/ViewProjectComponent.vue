<script>
import { store } from '../data/store.js';

export default{
  name:'ViewProjectComponent',
  data(){
    return {
      title: 'Portfolio progetti',
      store
    }
    
  }
}
</script>

<template>
  <div class="projectsView">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="project in store.projects" :key="project.id" >
          <router-link :to="{name: 'details', params:{slug: project.slug}}" class="name">{{ project.name }} || {{ project.type.name }}</router-link>
      </li>
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

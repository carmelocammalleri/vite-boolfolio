<script>
import axios from 'axios';
import {store} from './data/store.js';
import ViewProjectComponent from './components/ViewProjectComponent.vue';

export default{
  name:'App',
  components:{
    ViewProjectComponent
  },
  data(){
    return {
      title: 'Portfolio progetti'
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl + 'projects')
        .then(results =>{
          store.projects = results.data.data
          console.log(results.data);
        })
    }
  },
  mounted(){
    this.getApi();
  }
}
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <ViewProjectComponent />
    
  </div>
</template>

<style lang="scss">

</style>

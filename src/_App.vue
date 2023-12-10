<script>
import axios from 'axios';
import {store} from './data/store.js';
import ViewProjectComponent from './components/ViewProjectComponent.vue';
import Loader from './components/Loader.vue';

export default{
  name:'_App',
  components:{
    ViewProjectComponent,
    Loader
  },
  data(){
    return {
      
      isLoaded: false
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl + 'projects')
        .then(results =>{
          this.isLoaded = true
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

    <Loader v-if="!isLoaded"/>
    <ViewProjectComponent v-else/>
    
  </div>
</template>

<style lang="scss">

</style>

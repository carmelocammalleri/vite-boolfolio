<script>
import axios from 'axios';
import {store} from '../data/store';
import ViewProjectComponent from '../components/ViewProjectComponent.vue';
import Loader from '../components/Loader.vue';
import Navigator from '../components/partials/Navigator.vue';


export default{
  name:'Projects',
  components:{
    ViewProjectComponent,
    Loader,
    Navigator
  },
  data(){
    return {
      isLoaded: false,
      links: []
    }
  },
  methods:{
    getApi(endpoint){
      axios.get(endpoint)
        .then(results =>{
          this.isLoaded = true
          store.projects = results.data.data
          this.links= results.data.links
          console.log(results.data.links);
        })
    }
  },
  mounted(){
    this.getApi(store.apiUrl + 'projects');
  }
}
</script>

<template>
  <div>

    <Loader v-if="!isLoaded"/>
    <div v-else>
      <ViewProjectComponent />
      <Navigator @callApi="getApi" :links="links"/>
    </div>
    
  </div>
</template>

<style lang="scss">

</style>

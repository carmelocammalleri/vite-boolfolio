<script>
import axios from 'axios';
import { store } from '../data/store'
import Loader from '../components/Loader.vue'

export default {
  name:'Details',
  components: {
    Loader
  },
  data(){
    return {
      project: {},
      isLoaded: false
    }
  },
  methods:{
    getProject(slug){
      axios.get(store.apiUrl + 'projects/get-project/' + slug)
      .then(res => {
          this.isLoaded = true;
          this.project= res.data
          console.log(this.project.tecnologies);
        })
    }
  },
  mounted(){
    const slug = this.$route.params.slug;
    this.getProject(slug);
  },
  computed: {
    tecnologiesList(){
    return this.project.tecnologies?.map(tecnologies => tecnologies.name).join(' - ') || 'NO TECNOLOGIA';
  }
  } 
}
</script>

<template>
  <div class="details">

    <Loader v-if="!isLoaded" />
    <div v-else>
        <h1>{{project.name }}</h1>
        <span class="badge"> {{ tecnologiesList }} </span> <br> 
        <span style="color: white;">Type: {{ project.type.name }}</span>
        <p style="color: white;"> Descrizione {{ project.description }}</p>
    </div>
    
  </div>
</template>

<style lang="scss">
  .details{
    margin: 10px;
  }
  .badge {
    background-color: aquamarine;
    border-radius: 20px;
  }
</style>

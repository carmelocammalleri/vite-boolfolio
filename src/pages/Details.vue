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
      axios.get(store.apiUrl + 'projects/get-project' + slug)
      .then(res => {
          this.isLoaded = true;
          this.project= res.data.project
        })
    }
  },
  mounted(){
    this.slug = this.$route.params.slug;
  },
  computed: {
    typesList(){
        return this.project.types?.map(type => type.name).join(', ') || 'NO TIPOLOGIA';
    }
  } 
}
</script>

<template>
  <div class="details">

    <Loader v-if="!isLoaded" />
    <div v-else>
        <h1>{{ project.name }}</h1>
        <!-- <p>Tecnologia: {{ project.tecnology?.name || ' NO TECNOLOGIA '  }} | Tipologia: {{ typesList }}</p> -->
        <p>{{ project.description }}</p>
    </div>
    
  </div>
</template>

<style lang="scss">
  .details{
    margin: 10px;
  }
</style>

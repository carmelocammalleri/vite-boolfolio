<script>
import axios from 'axios';
import { store } from '../data/store'

export default {
  name:'Details',
  data(){
    return {
      project: {}
    }
  },
  methods:{
    getProject(slug){
      axios.get(store.apiUrl + 'projects/get-project/' + slug)
        .then(res => {
          console.log(res.data)
          this.project= res.data
        })
    }
  },
  mounted(){
    this.slug = this.$route.params.slug;
  }
}
</script>

<template>
  <div class="details">

    <h1>{{ project.name }}</h1>
    <p>data</p>
    <p>Tecnologia</p>
    <p>Tipo</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quam placeat, dignissimos nisi esse distinctio repellendus officiis tenetur, facilis iste ratione. Explicabo maiores officia facilis porro eum. Blanditiis, quis soluta.</p>
    
  </div>
</template>

<style lang="scss">
  .details{
    margin: 10px;
  }
</style>

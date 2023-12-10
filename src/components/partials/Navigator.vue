<script>
export default {
  name:'Navigator',
  props: {
    links: Array
  },
  data(){
    return {

    }
  }
}
</script>

<template>
   <div>
      <button v-for="link in links" :key="link.label" v-html="link.label "></button>
      
    </div>
</template>

<style lang="scss">
  
</style>

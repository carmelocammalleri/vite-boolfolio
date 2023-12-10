<script>
export default {
  name:'Navigator',
  props: {
    links: Array
  },
  data(){
    return {

    }
  },
  methods: {
    callApi(linkUrl){
      this.$emit('callApi', linkUrl)
    }
  }
}
</script>

<template>
   <div>
      <button 
        v-for="link in links" 
        :key="link.label" 
        v-html="link.label"
        :disabled="link.active || !link.url"
        @click="callApi(link.url)">
      </button>
      
    </div>
</template>

<style lang="scss">
  
</style>

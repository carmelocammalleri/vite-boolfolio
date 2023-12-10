<script>
export default {
  name:'Header',
  data(){
    return {

    }
  }
}
</script>

<template>
  <header>

    <ul class="nav-list">
      <li>
        <router-link :to="{ name: 'home'}"> Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about'}"> About</router-link>
      </li>
    </ul>
    
  </header>
</template>

<style lang="scss">
.nav-list{
    list-style: none;
}
</style>

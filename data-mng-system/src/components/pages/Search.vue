<script setup>
    console.log('[Search.vue]: script setup completed.');
    import SearchFormArea from '../layers/SearchFormArea.vue'
    
</script>

<template>
  <v-app>
    <div class="search-area">
      <p>Search Screen</p>
      <SearchFormArea></SearchFormArea>
    </div>
  </v-app>
</template>

<style scoped>
.search-area{
  position: relative;
  padding-left: 0rem;
  background-color: aquamarine;
  width: 35rem;
}
</style>
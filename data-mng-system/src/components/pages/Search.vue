<script setup>
    console.log('[Search.vue]: script setup completed.');
    import SearchFormArea from '../layers/SearchFormArea.vue'
    import SearchResultArea from '../layers/SearchResultArea.vue'
    
</script>

<template>
  <v-app>
    <div class="search-form-area">
      <SearchFormArea></SearchFormArea>
    </div>

    <div class="search-result-area">
      <SearchResultArea></SearchResultArea>
    </div>

  </v-app>
</template>

<style scoped>
.search-form-area{
  position: relative;
  padding-left: 0rem;
  background-color:rgb(185, 215, 228);
  width: 100%;
}

.search-result-area{
  position: relative;
  padding-left: 0rem;
  width: 100%;
}
</style>
<script setup>
    console.log('[SearchFormArea.vue]: script setup completed.');
    
    import RadioButtonComp from '../commons/RadioButtonComp.vue'
    
</script>

<template>
  <v-app class="area">
    <p>SearchFormArea</p>
    <RadioButtonComp></RadioButtonComp>
  </v-app>
</template>


<style scoped>
    .area{
        background-color: green;
        width: 45em;
    }
</style>
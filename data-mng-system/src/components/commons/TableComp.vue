<script setup>
    console.log('[TableComp.vue]: script setup completed.');
    
    import { defineProps, ref } from 'vue';

    const selected = ref([]);

    const props = defineProps({
        items:{
            name: String,
            location: String,
            height: String,
            base: String,
            volume: String,
        },
    });
    
</script>

<template>
    <v-data-table
      v-model="selected"
      :items="items"
      item-value="name"
      show-select
      fixed-header
    ></v-data-table>
  </template>
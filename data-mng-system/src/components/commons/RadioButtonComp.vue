<script setup>
    console.log('[RadioButtonComp.vue]: script setup completed.');
    
    import { defineProps } from 'vue';

    const props = defineProps({
        btnItems: {   
            label: String,
            value: String,         
        },
    });
    
</script>

<template>
    <v-radio-group inline>
        <div v-for="btnItem in btnItems" :key="btnItem">
            <v-radio :label="btnItem.label" :value="btnItem.value"></v-radio>
        </div>
    </v-radio-group>
</template>
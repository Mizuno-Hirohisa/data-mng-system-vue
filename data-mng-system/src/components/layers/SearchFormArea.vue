<script setup>
    console.log('[SearchFormArea.vue]: script setup completed.');
    
    import { ref } from 'vue';
    import RadioButtonComp from '../commons/RadioButtonComp.vue'
    

    const radioBtnItemsA = ref([
        {label: 'RadioA1', value: 'valA1'},
        {label: 'RadioA2', value: 'valA2'},
        {label: 'RadioA3', value: 'valA3'},
        {label: 'RadioA4', value: 'valA4'},
        {label: 'RadioA5', value: 'valA5'}
    ])

    const radioBtnItemsB = ref([
        {label: 'RadioB1', value: 'valB1'},
        {label: 'RadioB2', value: 'valB2'},
        {label: 'RadioB3', value: 'valB3'}
    ])

</script>

<template>
    <p>SearchFormArea</p>

    <p>RadioButnItemsA</p>
    <RadioButtonComp :btnItems="radioBtnItemsA"></RadioButtonComp>

    <p>RadioButnItemsB</p>
    <RadioButtonComp :btnItems="radioBtnItemsB"></RadioButtonComp>
    
</template>
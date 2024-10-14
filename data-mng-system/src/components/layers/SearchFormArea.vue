<script setup>
    console.log('[SearchFormArea.vue]: script setup completed.');
    
    import { ref } from 'vue';
    import RadioButtonComp from '../commons/RadioButtonComp.vue'
    

    const radioBtnItems = ref([
        {label: 'Radio1', value: 'val1'},
        {label: 'Radio2', value: 'val2'},
        {label: 'Radio3', value: 'val3'},
        {label: 'Radio4', value: 'val4'},
        {label: 'Radio5', value: 'val5'}
    ])

</script>

<template>
    <p>SearchFormArea</p>
    <RadioButtonComp :btnItems="radioBtnItems"></RadioButtonComp>
</template>
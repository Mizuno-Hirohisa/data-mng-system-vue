<script setup>
    console.log('[RadioButtonComp.vue]: script setup completed.');
    
    const btnItems = [
        {label: 'Radio1', value: '1'},
        {label: 'Radio2', value: '2'},
        {label: 'Radio3', value: '3'}
    ];
</script>

<template>
    <v-radio-group inline>
        <div v-for="btnItem in btnItems" :key="btnItem">
            <v-radio :label=btnItem.label :value=btnItem.value></v-radio>
        </div>
    </v-radio-group>
</template>
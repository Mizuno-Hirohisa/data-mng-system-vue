<script setup>
    console.log('[SearchFormArea.vue]: script setup completed.');
    
    import { ref } from 'vue';
    import RadioButtonComp from '../commons/RadioButtonComp.vue'
    import CheckBoxComp from '../commons/CheckBoxComp.vue'
    

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

    const checkBoxItemsA = ref([
        {label: 'CheckA1', value: 'valA1'},
        {label: 'CheckA2', value: 'valA2'},
        {label: 'CheckA3', value: 'valA3'},
        {label: 'CheckA4', value: 'valA4'},
    ])



</script>

<template>
    <v-row no-gutters>
        <v-col class="bg-blue-lighten-4 mx-2">
            <p>SearchFormArea (Left)</p>

            <p>RadioButnItemsA</p>
            <RadioButtonComp :btnItems="radioBtnItemsA"></RadioButtonComp>

            <p>RadioButnItemsB</p>
            <RadioButtonComp :btnItems="radioBtnItemsB"></RadioButtonComp>

            <p>CheckBoxItemsA</p>
            <CheckBoxComp :btnItems="checkBoxItemsA"></CheckBoxComp>
        </v-col>
        
        <v-col class="bg-red-lighten-4 mx-2">
            <p>SearchFormArea(Right)</p>
            <v-text-field width="400" placeholder="Menu"/>
            <v-text-field width="400" placeholder="Menu Tag"/>
            <v-text-field width="400" placeholder="Event"/>
            
            <div class="d-flex justify-end">
                <v-btn color="indigo">Search</v-btn>
            </div>
        </v-col>
    </v-row>
</template>
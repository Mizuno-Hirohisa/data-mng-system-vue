<script setup>
    console.log('[CheckBoxComp.vue]: script setup completed.');
    
    import { defineProps } from 'vue';

    const props = defineProps({
        btnItems: {   
            label: String,
            value: String,         
        },
    });
    
</script>

<template>

    <v-row>
        <div v-for="btnItem in btnItems" :key="btnItem">
            <v-col>
                <v-checkbox :label="btnItem.label" :value="btnItem.value"></v-checkbox>
            </v-col>
        </div>
    </v-row>

</template>
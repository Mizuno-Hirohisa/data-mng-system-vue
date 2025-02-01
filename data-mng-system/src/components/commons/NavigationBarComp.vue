<script setup>
    console.log('[NavigationBarComp.vue]: script setup completed.');

    import { useRouter } from 'vue-router'

    const router = useRouter();

    function ChangeScreen(path){
        console.log('[NavigationBarComp.vue]: ChangeScreen()');
        
        router.push(path);
    }

</script>

<template>
    <v-card>
        <v-toolbar class="header" density="compact">
            <v-toolbar-title>Data Mng System</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn icon @click="ChangeScreen('/search')">
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
  
            <v-btn icon @click="ChangeScreen('/edit')">
                <v-icon>mdi-file-edit-outline</v-icon>
            </v-btn>
  
            <v-btn icon>
                <v-icon>mdi-logout</v-icon>
            </v-btn>
        </v-toolbar>
    </v-card>
</template>


<style scoped>
.header{
    background-color: rgb(93, 141, 173);
    color: white;
}

</style>
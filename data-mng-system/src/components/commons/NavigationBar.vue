<script setup>
    console.log('[NavigationBar.vue]: script setup completed.');

    import { useRouter } from 'vue-router'

    const router = useRouter();

    function ChangeScreen(path){
        console.log('[NavigationBar.vue]: ChangeScreen()');
        
        router.push(path);
    }

</script>

<template>
    <v-card>
        <v-toolbar density="compact">
            <v-toolbar-title>Data Mng System</v-toolbar-title>
            <v-spacer></v-spacer>
  
            <v-btn icon @click="ChangeScreen('/home')">
                <v-icon>mdi-home-variant-outline</v-icon>
            </v-btn>

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
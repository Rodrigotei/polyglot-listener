<template>
    <v-app>
        <AppBar />   
        <v-main style="width: 100%; max-width: 1200px; margin: 0 auto;" class="px-3">
            <RouterView></RouterView>    
        </v-main> 
    </v-app>
</template>

<script setup>
    import { RouterView } from 'vue-router';
    import AppBar from './components/app-bar.vue';
</script>

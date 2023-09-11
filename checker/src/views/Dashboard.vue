<template>
    <v-app style="background-color: #000" theme="dark">
        <v-main style="display: flex;">
                <Navbar />
                <BarraSuperior />
                <Recarga />
        </v-main>
    </v-app>
</template>

<script setup>

import Navbar from '../components/Navbar.vue'
import Recarga from '../components/Recarga.vue'
import BarraSuperior from '../components/BarraSuperior.vue'
</script>
<style scoped>
    span{
        font-weight: 500;
        font-family: 'Urbanist'
    }
    h3{
        font-family: 'Poppins';
        color: #36bfb1;
        letter-spacing: 1px;
        
    }
    strong{
        color: #0D0D0D;
        background-color: #36bfb1;
        padding: 2px 8px;
        border-radius: 4px;
        font-weight: 700;
        font-family: 'Urbanist'
    }
    
</style>
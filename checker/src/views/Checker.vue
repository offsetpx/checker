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

</style>
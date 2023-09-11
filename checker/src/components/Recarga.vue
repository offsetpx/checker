<template>
    <div class="recarga">
        <router-link to="/"><v-icon style="font-size: 25px;"><Logout style="color: #999999;" /></v-icon></router-link>
        <v-btn style="font-weight: 600; color: #36bfb1; background-color: #011e19" color="" size="large" variant="tonal">R$ {{ saldo }}  <v-icon style="font-size: 25px; margin-left: 1rem"><Sifrao /></v-icon></v-btn>
    </div>
</template>
<script setup>
import Logout from './icons/Logout.vue'
import Sifrao from './icons/Sifrao.vue'
import {ref} from 'vue'
const saldo = ref(5.00)
</script>
<style scoped>
    .recarga{
        position: absolute;
        top: 2rem;
        right: 4rem;
        display: flex;
        height: 3rem;
        align-items: center;
        gap: 2rem
    }
</style>
<template>
    <div class="barra-lateral">
        <Grid style="width: 40px" class="icone" />
        <div class="links">
            <router-link to="/"> <v-tooltip id="tooltip" activator="parent" right> Dashboard </v-tooltip> <Raio class="icone" style="width: 40px;" /> </router-link>
            <router-link to="/a"> <v-tooltip id="tooltip" activator="parent" right> Checker </v-tooltip> <Cubo class="icone" style="width: 40px;" /> </router-link>
            <router-link to="/checker"> <v-tooltip id="tooltip" activator="parent" right> Checker </v-tooltip> <Presente class="icone" style="width: 40px;" /> </router-link>
            <router-link to="/a"> <v-tooltip id="tooltip" activator="parent" right> Checker </v-tooltip> <Coracao class="icone" style="width: 40px;" /> </router-link>
            <router-link to="/a"> <v-tooltip id="tooltip" activator="parent" right> Checker </v-tooltip> <Config class="icone" style="width: 40px;" /> </router-link>
        </div>
        <div class="usuario">
            <img class="foto-perfil" src="../assets/pfp.jpg" alt="">
        </div>
    </div>
</template>
<script setup>
import Raio from './icons/Raio.vue'
import Cubo from './icons/Cubo.vue'
import Presente from './icons/Presente.vue'
import Coracao from './icons/Coracao.vue'
import Config from './icons/Config.vue'
import Grid from './icons/Grid.vue'
</script>
<style>
.icone{
    color: #999999;
    cursor: pointer;
    padding: 10px;
    border-radius: 12px;
}
.barra-lateral{
    border-right: solid 1px #464646;
    height: 100%;
    width: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 0.5rem;
}
.foto-perfil{
    width: 40px;
    border: solid 2px rgb(72, 72, 72);
    border-radius: 50%;
    aspect-ratio: 5/5;
}
.router-link-active .icone{
    color: #36bfb1;
    background-color: #014034;
    transition: all ease-in 0.2s;
}
.usuario{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
}
.links{
    display: flex;
    flex-direction: column;
    gap: 1rem
}
</style>
<template>
    <v-app style="background-color: #000" theme="dark">
        <v-main style="">
                <v-app-bar class="navbar" flat style="padding-inline: 10rem; background-color: transparent; margin-top: 2rem;">
                    <h3><strong>B7</strong> Technology > Dashboard</h3>
                    <div class="usuario">
                        <div class="usuario-informacoes">
                            <h4>{{ usuarioNome }}</h4>
                            <p>R$ {{ usuarioSaldo }}</p>
                        </div>
                        <img class="foto-perfil" src="../assets/pfp.jpg" alt="">
                    </div>
                </v-app-bar>
                <div class="barra-lateral">
                    <router-link to="/"> <v-tooltip id="tooltip" activator="parent" right> Dashboard </v-tooltip> <Grid class="icone" style="width: 30px;" /> </router-link>
                    <router-link to="/checker"> <v-tooltip id="tooltip" activator="parent" right> Checker </v-tooltip> <Cartao class="icone" style="width: 30px;" /> </router-link>
                    <router-link to="/login"> <v-tooltip id="tooltip" activator="parent" right> Sair </v-tooltip> <Logout class="icone" style="width: 30px;" /> </router-link>
                </div>
        </v-main>
    </v-app>
</template>

<script setup>
import Cartao from '../components/icons/Cartao.vue'
import Grid from '../components/icons/Grid.vue'
import Logout from '../components/icons/Logout.vue'
import {ref} from 'vue'

const usuarioNome = ref('Gabriel')
const usuarioSaldo = ref(5.00)
</script>
<style scoped>
    h3{
        font-family: 'Urbanist';
        color: #36bfb1;
        letter-spacing: 1px;
    }
    strong{
        color: #000;
        background-color: #36bfb1;
        padding: 2px 8px;
        border-radius: 4px;
        font-weight: 700;
    }
    .icone{
        color: #999999;
        cursor: pointer;
    }
    .barra-lateral{
        border-right: solid 1px #464646;
        height: 100%;
        width: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        border-radius: 20px;
    }
    .foto-perfil{
        width: 40px;
        border: solid 2px rgb(72, 72, 72);
        border-radius: 50%;
        aspect-ratio: 5/2;
    }
    .usuario{
        position: relative;
        left: 40rem;
        display: flex;
        gap: 0.5rem
    }
    .router-link-active .icone{
        color: #FFF;
        border-radius: 5px;
    }
    .usuario-informacoes{
        display: flex;
        flex-direction: column;
    }
    .usuario-informacoes p{
        font-family: 'Urbanist';
        letter-spacing: 1px;
        font-weight: 300;
        color: #999999;
    }
    .usuario-informacoes h4{
        
        font-family: 'Urbanist';
        font-weight: 600;
    }
</style>
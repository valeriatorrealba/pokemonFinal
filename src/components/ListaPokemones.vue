<script setup>
import PokemonCard from "./PokemonCard.vue";

const props = defineProps({
    pokemones: {
        type: Array,
        required: true,
        default: () => [],
    },
});
</script>

<template>
    <div class="row g-4 justify-content-center">
        <div 
            v-for="pokemon in pokemones" 
            :key="pokemon.id" 
            class="col-6 col-sm-4 col-md-3 col-lg-2"
        >
            
            <router-link 
                :to="{ name: 'pokemon-detalle', params: { id: pokemon.id } }" 
                class="text-decoration-none d-block" 
            >
                <PokemonCard :pokemon="pokemon" />
            </router-link>
        </div>
    </div>
</template>

<style scoped>
/* Estilos para asegurar que el enlace ocupe todo el espacio y no tenga subrayado */
.text-decoration-none {
    text-decoration: none !important;
    color: inherit; 
}
</style>
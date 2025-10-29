<script setup>
import { onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { usePokemonStore } from "../stores/pokemones.js"; 

const route = useRoute();
const router = useRouter(); 
const pokemonId = route.params.id;
const pokemonStore = usePokemonStore();

const capitalize = (value) => {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
};

const pokemon = computed(() => pokemonStore.pokemonDetail);

onMounted(() => {
    pokemonStore.cargarPokemonDetalle(pokemonId);
});

function goBack() {
    router.back(); 
}
</script>

<template>
    <div class="container mt-5">
        <button @click="goBack" class="btn btn-outline-secondary mb-4 btn-pokemon-back">
            ← Volver a la Lista
        </button>

        <div v-if="pokemonStore.loading" class="alert alert-info text-center">Cargando Pokémon...</div>
        <div v-else-if="pokemonStore.error" class="alert alert-danger mt-4">
            {{ pokemonStore.error }}
        </div>
        
        <div v-else-if="pokemon" class="card text-center shadow-lg pokemon-detail-card mx-auto" style="max-width: 450px;">
            <div class="card-body p-4">
                
                <h1 class="card-title mb-4 pokemon-name-title">{{ capitalize(pokemon.nombre) }}</h1>
                
                <img :src="pokemon.imagen" :alt="pokemon.nombre" class="mb-4 pokemon-image-detail"/>

                <div class="text-start mx-auto" style="max-width: 400px;">
                    
                    <div class="d-flex justify-content-around text-center mb-4 pokemon-stats-row">
                        
                        <div class="stat-col">
                            <span class="stat-label">ID</span>
                            <span class="stat-value fw-bold">{{ pokemon.id }}</span>
                        </div>
                        
                        <div class="stat-col">
                            <span class="stat-label">Altura</span>
                            <span class="stat-value fw-bold">{{ (pokemon.altura / 10).toFixed(1) }} m</span>
                        </div>
                        
                        <div class="stat-col">
                            <span class="stat-label">Peso</span>
                            <span class="stat-value fw-bold">{{ pokemon.peso }} kg</span>
                        </div>
                    </div>
                    <h5 class="mt-3 mb-2 fw-bold">Tipos:</h5>
                    <div class="d-flex flex-wrap gap-2 mb-4 justify-content-center">
                        <span 
                            v-for="type in pokemon.tipos" 
                            :key="type" 
                            :class="['badge', 'type-badge', `type-${type}`]"
                        >
                            {{ capitalize(type) }}
                        </span>
                    </div>

                    <h5 class="mt-4 mb-2 fw-bold">Habilidades:</h5>
                    <ul class="list-unstyled abilities-list text-center">
                        <li v-for="ability in pokemon.habilidades" :key="ability">
                            <span class="badge bg-secondary">{{ capitalize(ability) }}</span>
                        </li>
                    </ul>
                    <p class="stat-item mt-4"><strong>Experiencia base:</strong> <span>{{ pokemon.base_experience }}</span></p>
                </div>
            </div>
        </div>
        <div v-else class="alert alert-danger mt-4">Pokémon no encontrado o error de carga.</div>
    </div>
</template>

<style scoped>
/* Azul Oscuro: #3c5aa6 */
/* Paleta usada: #f8f8f8 (gris muy claro), #f0f0f0 (para la imagen) */

/* 🛑 MODIFICACIÓN CLAVE: Cambiamos el fondo de la tarjeta 🛑 */
.pokemon-detail-card {
    border-radius: 1.5rem;
    border: 5px solid #f0f0f0;
    background-color: #3c5aa6; /* Fondo blanco roto o muy claro */
}

/* El resto de los estilos se mantiene igual para el diseño compacto */

.pokemon-name-title {
    color: #cc0000;
    font-size: 2.3rem;
    font-weight: 800;
    text-shadow: 1px 1px 2px #c7a008;
}

.pokemon-image-detail {
    width: 150px;
    height: 150px;
    object-fit: contain;
    background-color: #f0f0f0; /* Color que contrasta con el fondo de la tarjeta */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.pokemon-stats-row {
    background-color: #f8f8f8; /* Mantenemos este fondo sutil para la fila de stats */
    border-radius: 10px;
    padding: 10px 0;
    margin-bottom: 20px !important;
    border: 1px solid #eee;
}

.stat-col {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    flex-grow: 1;
}

.stat-label {
    font-size: 0.85rem;
    color: #3c5aa6;
    font-weight: bold;
    margin-bottom: 3px;
}

.stat-value {
    font-size: 1.2rem;
    color: #333;
}

.stat-item {
    font-size: 1.1rem;
    border-bottom: 1px dashed #eee;
    padding: 3px 0;
    text-align: center;
}
.stat-item strong {
    color: #3c5aa6; 
}

.abilities-list {
    list-style: none;
    padding: 0;
    text-align: center;
}

.btn-pokemon-back {
    color: #3c5aa6;
    border-color: #3c5aa6;
}
.btn-pokemon-back:hover {
    background-color: #3c5aa6;
    color: white;
}

.type-badge {
    color: white !important;
    font-weight: bold;
    padding: 0.4em 0.8em;
    border-radius: 0.5rem;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.type-grass { background-color: #7AC74C; } 
.type-poison { background-color: #A33EA1; } 


.badge:not([class*="type-"]) {
    background-color: #68A090; 
}
</style>
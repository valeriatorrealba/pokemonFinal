<script setup>
import { ref, computed, onMounted } from "vue";
import { usePokemonStore } from "../stores/pokemones.js";
import Titulo from "../components/Titulo.vue";
import Buscador from "../components/Buscador.vue";
import Mostrando from "../components/Mostrando.vue";
import ListaPokemones from "../components/ListaPokemones.vue";
import NoExiste from "../components/NoExiste.vue";

const pokemonStore = usePokemonStore();

const busqueda = ref("");

const pokemonesFiltrados = computed(() => {
    return pokemonStore.pokemons.filter((p) =>
        p.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
    );
});

function limpiar() {
    busqueda.value = "";
}

onMounted(() => {
    if (pokemonStore.pokemons.length === 0) {
        pokemonStore.cargarPokemones(); 
    }
});
</script>

<template>
    <div class="container py-5">
        <Titulo />
        <div v-if="pokemonStore.loading" class="alert alert-info text-center">Cargando Pokémon...</div>
        <div v-else-if="pokemonStore.error" class="alert alert-danger text-center">
            {{ pokemonStore.error }}
                <button class="btn btn-sm btn-outline-light ms-2" @click="pokemonStore.cargarPokemones()">Reintentar</button>
        </div>
        <div v-else>
            <Buscador v-model="busqueda" @limpiar="limpiar" />
            <Mostrando :total="pokemonStore.pokemons.length" :filtrados="pokemonesFiltrados.length"/>
            <ListaPokemones :pokemones="pokemonesFiltrados" />
            <NoExiste v-if="pokemonesFiltrados.length === 0" />
        </div>
    </div>
</template>

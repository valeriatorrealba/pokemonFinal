import { defineStore } from 'pinia';
import { getPokemones, getPokemonDetalle } from '@/api/pokemon.js'; 

export const usePokemonStore = defineStore('pokemon', {
    state: () => ({
        pokemons: [],
        pokemonDetail: null,
        loading: false,
        error: '',
    }),

    actions: {
        async cargarPokemones(limit = 12, offset = 0) {
            this.loading = true;
            this.error = '';

            try {
                this.pokemons = await getPokemones(limit, offset);
            } catch (e) {
                console.error("Error al cargar pokemones:", e);
                this.error = 'No se pudo cargar la lista de Pokémones.';
            } finally {
                this.loading = false;
            }
        },
        
        async cargarPokemonDetalle(id) {
            this.loading = true;
            this.error = '';
            this.pokemonDetail = null;

            try {
                this.pokemonDetail = await getPokemonDetalle(id);
            } catch (e) {
                console.error("Error al cargar detalle:", e);
                this.error = 'No se pudo cargar el detalle del Pokémon.';
            } finally {
                this.loading = false;
            }
        }
    },
});


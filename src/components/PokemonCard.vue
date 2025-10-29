<script setup>
const props = defineProps({
  // Recibe los datos enriquecidos de Pinia/API
  pokemon: {
    type: Object,
    required: true,
    default: () => ({ name: 'unknown', id: '??', imagen: '' }),
  }
});
</script>

<template>
    <div class="card pokemon-card shadow-sm h-100">
        <div class="card-body text-center p-3">
            <img 
                :src="pokemon.imagen" 
                :alt="pokemon.nombre" 
                class="img-fluid pokemon-image" 
                width="120" 
                height="120"
            />
            
            <p class="text-muted mb-0 mt-2">N.º {{ pokemon.id }}</p>
            <h5 class="card-title text-capitalize fw-bold">{{ pokemon.nombre }}</h5>
            
            </div>
    </div>
</template>

<style scoped>
/* Azul Oscuro: #3c5aa6 */

.pokemon-card {
    background: #FFFFFF; 
    border: 1px solid #DDDDDD;
    border-radius: 10px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
}

.pokemon-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(60, 90, 166, 0.4); 
}

.pokemon-image {
    max-width: 100%;
    height: 90px;
    object-fit: contain;
}

.card-title {
    color: #3c5aa6; /* Azul Oscuro */
    font-size: 1.1rem;
}

.text-muted {
    font-size: 0.85rem;
    color: #666 !important;
}
</style>
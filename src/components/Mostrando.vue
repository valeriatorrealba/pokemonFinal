<script setup>
const props = defineProps({total: Number, filtrados: Number,});
</script>

<template>
    <div class="alert alert-primary text-center fw-semibold" role="alert">Mostrando {{ filtrados }} de {{ total }} pokemones</div>
</template>

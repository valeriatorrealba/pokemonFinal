<script setup>
const props = defineProps({modelValue: String,});
const emit = defineEmits(["update:modelValue", "limpiar"]);
</script>

<template>
    <div class="row mb-4 justify-content-center">
        <div class="col-md-6 d-flex">
            <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" type="text" class="form-control orm-control-lg shadow-sm me-2" placeholder="Busca un Pokémon por nombre..."/>
            <button class="btn btn-outline-danger btn-lg shadow-sm" @click="$emit('limpiar')">Limpiar</button>
        </div>
    </div>
</template>

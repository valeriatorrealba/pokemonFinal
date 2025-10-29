<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
    <Navbar />
    <router-view />
    <Footer />

</template>


<style>
body {
    background: linear-gradient(to bottom right, #f9f9f9, #e6f7ff);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
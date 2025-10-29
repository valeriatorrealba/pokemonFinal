import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contacto from "../views/Contacto.vue";
import PokemonDetalle from "../views/PokemonDetalle.vue";

const routes = [
    { path: "/", name: "home", component: Home },
    // ...
    { 
        path: "/pokemon/:id", 
        name: "pokemon-detalle",
        component: PokemonDetalle, 
        props: true 
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
<template>
    <nav class="navbar navbar-pokemon navbar-expand-lg bg-dark-pokemon mb-4">
        <div class="container">
            <router-link class="navbar-brand-pokemon fw-bold" to="/">Pokédex</router-link>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link class="nav-link-pokemon" active-class="active" to="/">Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link-pokemon" active-class="active" to="/about">Acerca de</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link-pokemon" active-class="active" to="/contacto">Contacto</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
/* PALETA DE COLORES */
/* Azul Oscuro: #3c5aa6 */
/* Amarillo Vivo: #FFCB05 */
/* Rojo Poké Ball: #cc0000 */
/* Amarillo Sombra: #c7a008 */

.navbar-pokemon {
    padding: 1rem 0;
    margin-bottom: 20px;
    border-bottom: 3px solid #FFCB05;
}

.bg-dark-pokemon {
    background-color: #3c5aa6 !important; 
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

.navbar-brand-pokemon {
    font-size: 1.8rem;
    font-weight: 900;
    text-decoration: none;
    color: #FFFFFF;
    text-shadow: 2px 2px 0 #c7a008; 
    transition: color 0.3s;
}

.navbar-brand-pokemon:hover {
    color: #FFFFFF;
}

.nav-link-pokemon {
    text-decoration: none;
    color: #FFFFFF;
    padding: 8px 12px;
    border-radius: 5px;
    font-weight: 500;
    transition: background-color 0.2s, color 0.2s;
}

.nav-link-pokemon:hover {
    background-color: #cc0000;
    color: #FFFFFF;
}

.nav-link-pokemon.active {
    color: #FFCB05;
    font-weight: 700;
    background-color: rgba(0, 0, 0, 0.1);
}

.navbar-toggler {
    border-color: #FFCB05;
}

</style>
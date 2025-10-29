<template>
    <footer class="footer-pokemon pt-5 pb-3 mt-5">
        <div class="container text-center">
            <h5 class="fw-bold mb-3 footer-title-accent">Mi Pokédex</h5>
            <p>Explora, captura y conoce a todos los Pokémon. ¡Tu tienda y favoritos siempre a mano!</p>

            <div class="d-flex justify-content-center gap-3 mt-3">
                <a href="#" class="footer-icon-hover">
                    <img src="https://img.icons8.com/color/48/000000/pokeball.png" alt="Pokéball Social" width="40" aria-label="Enlace a Red Social 1">
                </a>
                <a href="#" class="footer-icon-hover">
                    <img src="https://img.icons8.com/color/48/000000/pokeball.png" alt="Pokéball Tienda" width="40" aria-label="Enlace a Tienda">
                </a>
                <a href="#" class="footer-icon-hover">
                    <img src="https://img.icons8.com/color/48/000000/pokeball.png" alt="Pokéball Contacto" width="40" aria-label="Enlace de Contacto">
                </a>
            </div>

            <hr class="footer-hr-accent mt-4" />
            
            <p class="mb-0">&copy; 2025 Mi Pokédex. Todos los derechos reservados.</p>
        </div>
    </footer>
</template>

<style scoped>
/* PALETA DE COLORES */
/* Azul Oscuro: #3c5aa6 */
/* Amarillo Vivo: #FFCB05 */
/* Rojo Poké Ball: #cc0000 */

.footer-pokemon {
    background-color: #3c5aa6 !important; 
    color: white;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
}

.footer-title-accent {
    color: #FFCB05;
    font-size: 1.5rem;
}

.footer-hr-accent {
    border-top: 1px solid #cc0000;
    opacity: 1; 
    margin: 1rem auto; 
}

.footer-icon-hover {
    transition: transform 0.3s ease;
}

.footer-icon-hover:hover {
    transform: scale(1.3);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}
</style>
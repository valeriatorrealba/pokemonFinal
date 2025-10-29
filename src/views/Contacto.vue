<template>
    <div class="container py-5 d-flex justify-content-center">
        <div class="card shadow-lg p-4" style="max-width: 500px; width: 100%;">
            <h1 class="text-center mb-4">Contacto</h1>
            
            <form class="mt-3">
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre" placeholder="Tu nombre">
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Correo electrónico</label>
                    <input type="email" class="form-control" id="email" placeholder="tu@correo.com">
                </div>
                <div class="mb-3">
                    <label for="mensaje" class="form-label">Mensaje</label>
                    <textarea class="form-control" id="mensaje" rows="4" placeholder="Escribe tu mensaje aquí"></textarea>
                </div>
                <button type="submit" class="btn btn-danger w-100">Enviar</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 700;
    color: #ff4141;
    text-shadow: 1px 1px #ffd6d6;
}

.card {
    border-radius: 1rem;
    background-color: #fff7f7;
}

.btn-danger {
    background-color: #ff4141;
    border-color: #ff4141;
}

.btn-danger:hover {
    background-color: #e03b3b;
    border-color: #e03b3b;
}
</style>

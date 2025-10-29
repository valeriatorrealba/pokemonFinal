import axios from "axios";

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
});

export async function getPokemones(limit = 12, offset = 0) {
    const { data } = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);

    const detalles = await Promise.all(
        data.results.map(async (item) => {
        const { data: info } = await axios.get(item.url);
        return {
            id: info.id,
            nombre: info.name,
            imagen: info.sprites.other["official-artwork"].front_default,
            altura: info.height * 10,
            peso: (info.weight / 10).toFixed(1),
            tipos: info.types.map((t) => t.type.name),
        };
        })
    );

    return detalles;
}

export async function getPokemonDetalle(id) {
    const { data: info } = await api.get(`/pokemon/${id}`);
    return {
        id: info.id,
        nombre: info.name,
        imagen: info.sprites.other["official-artwork"].front_default,
        altura: info.height * 10,
        peso: (info.weight / 10).toFixed(1),
        tipos: info.types.map((t) => t.type.name),
        habilidades: info.abilities.map((a) => a.ability.name),
        base_experience: info.base_experience,
    };
}

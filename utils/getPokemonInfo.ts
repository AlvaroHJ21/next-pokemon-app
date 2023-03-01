import pokeApi from '../api/pokeApi';
import { Pokemon } from '../interfaces/pokemon-full';
const getPokemonInfo = async (nameOrId: string) => {

    try {
        const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

        const pokemon = {
            id: data.id,
            name: data.name,
            sprites: data.sprites
        };

        return pokemon;
    } catch (error) {
        return null
    }


};


export default getPokemonInfo;

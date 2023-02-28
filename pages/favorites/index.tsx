import { Layout } from '../../components/layouts';
import { localFavorites } from '../../utils';
import { useEffect, useState } from 'react';
import { Pokemon } from '../../interfaces/pokemon-full';
import { NoFavorites } from '../../components/ui';
import FavoritePokemons from '../../components/pokemon/FavoritePokemons';

export default function FavoritesPage() {
    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons());
    }, []);

    return (
        <Layout title="Pokemons - Favoritos">
            {favoritePokemons.length === 0 ? (
                <NoFavorites />
            ) : (
                <FavoritePokemons pokemonIds={favoritePokemons} />
            )}
        </Layout>
    );
}

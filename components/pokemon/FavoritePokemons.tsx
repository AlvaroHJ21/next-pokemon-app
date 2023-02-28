import { Grid, Card } from '@nextui-org/react';
import FavoriteCardPokemon from './FavoriteCardPokemon';

interface Props {
    pokemonIds: number[];
}

export default function FavoritePokemons({ pokemonIds }: Props) {
    return (
        <Grid.Container gap={2} direction="row" justify="flex-start">
            {pokemonIds.map((id) => (
                <FavoriteCardPokemon key={id} id={id} />
            ))}
        </Grid.Container>
    );
}

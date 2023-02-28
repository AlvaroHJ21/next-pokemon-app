import { GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';

import { Layout } from '../components/layouts';
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon/PokemonCard';

interface Props {
    pokemons: SmallPokemon[];
}

// export const HomePage: NextPage<Props> = ({ pokemons }: Props) => {
export function HomePage ({ pokemons }: Props) {
    return (
        <Layout title={'Home'}>
            {/* <h1>Hola mundo</h1>
            <Button color="gradient">Click me</Button> */}
            <Grid.Container gap={2} justify="center">
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </Grid.Container>
        </Layout>
    );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
    // const { data } = await  // your fetch function here
    const { data } = await pokeApi.get<PokemonListResponse>(
        '/pokemon?limit=151'
    );

    const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
        ...pokemon,
        id: index + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            index + 1
        }.svg`,
    }));

    return {
        props: {
            name: 'Alvaro',
            pokemons,
        },
    };
};
export default HomePage;

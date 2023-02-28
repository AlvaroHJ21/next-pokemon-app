import React from 'react';
import { Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props{
    id: number
}

export default function FavoriteCardPokemon({ id }: Props) {

    const router = useRouter()
    function handleClickPokemon(id: number) {
        router.push(`/pokemon/${id}`);
    }
    return (
        <Grid key={id} xs={6} sm={3} md={2} xl={1}>
            <Card
                onClick={() => handleClickPokemon(id)}
                isHoverable
                isPressable
                css={{ padding: 10 }}
            >
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    width={'100%'}
                    height={100}
                />
            </Card>
        </Grid>
    );
}

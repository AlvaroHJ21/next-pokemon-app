import React from 'react'
import { Grid, Card, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '../../interfaces/pokemon-list';
import { useRouter } from 'next/router';

interface Props {
    pokemon: SmallPokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
    const { id, img, name } = pokemon;

    const router = useRouter()

    function handleClick() {
        router.push(`/name/${pokemon.name}`);
    }

    return (
        <Grid key={id} xs={6} sm={3} md={2} xl={1}>
            <Card isHoverable isPressable onClick={handleClick}>
                <Card.Body css={{ p: 5 }}>
                    <Card.Image src={img} alt={name} width={140} height={140}/>
                </Card.Body>
                <Card.Footer>
                    <Row justify="space-between" css={{ px: 10 }}>
                        <Text transform="capitalize">{name}</Text>
                        <Text>#{id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    );
};

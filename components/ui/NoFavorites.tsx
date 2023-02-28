import { Container, Text } from '@nextui-org/react';
import Image from 'next/image';

export default function NoFavorites() {
    return (
        <Container
            css={{
                display: 'flex',
                // backgroundColor: 'Blue',
                flexDirection: 'column',
                height: 'calc(100vh - 100px)',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text h1>No hay favoritos</Text>
            <Image
                src={
                    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
                }
                alt={'imagen'}
                width={200}
                height={200}
            />
        </Container>
    );
}

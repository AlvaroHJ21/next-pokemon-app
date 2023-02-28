import { useTheme, Text, Spacer, Link } from '@nextui-org/react';
import NextLink from 'next/link'
import Image from 'next/image';

export const Navbar = () => {
    const { theme } = useTheme();
    return (
        <div
            style={{
                width: '100%',
                // backgroundColor: '#111111',
                backgroundColor: theme?.colors.accents0.value,
            }}
        >
            <div
                style={{
                    maxWidth: '1200px',
                    width: '95%',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'start',
                }}
            >
                <Image
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
                    alt="pokemón"
                    width={70}
                    height={70}
                    priority
                />
                <NextLink href={'/'} passHref style={{ display: 'flex' }}>
                    <Text color="white" h2>
                        P
                    </Text>
                    <Text color="white" h3>
                        ókemon
                    </Text>
                </NextLink>
                <Spacer
                    css={{
                        flex: 1,
                    }}
                />
                <NextLink href={"/favorites"}>
                    <Text color="white" h3>
                        Favoritos
                    </Text>
                </NextLink>
            </div>
        </div>
    );
};

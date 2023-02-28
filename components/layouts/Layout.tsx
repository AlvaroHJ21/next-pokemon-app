import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
    children: JSX.Element | JSX.Element[];
    title?: string;
}

const origin = (typeof window === 'undefined')? '': window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {

    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Alvaro Huaysara" />
                <meta
                    name="description"
                    content={`Informacion sobre el pokemon ${'pokemon'}`}
                />
                <meta name="keyworks" content={`${'xxxx'}, pokemon, pokedex`} />

                <meta
                    property="og:title"
                    content={`Información sobre ${title}`}
                />
                <meta
                    property="og:description"
                    content={`Esta es la página sobre ${title}`}
                />
                <meta property="og:image" content={`${origin}/banner.png`} />
            </Head>
            <Navbar />
            <main
                style={{
                    maxWidth: '1200px',
                    width: '95%',
                    margin: '0 auto',
                }}
            >
                {children}
            </main>
        </>
    );
};

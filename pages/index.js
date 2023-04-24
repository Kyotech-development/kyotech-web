import Head from 'next/head';
import Menu from '../components/Menu/Menu.js';

function Home() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Kyotech" />
                <meta name="author" content="Arthur Bueno" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>Kyotech Comércio e Manutenção de Equipamentos Médicos</title>
            </Head>
            <Menu />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="custom.js"></script>
        </div>
    )
}

export default Home;
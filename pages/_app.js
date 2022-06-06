import Head from 'next/head';
import Layout from '../components/layout';

import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Head>
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Raleway&display=swap" rel="stylesheet" />
			</Head>
			<main>
				<Component {...pageProps} />
			</main>
		</Layout>
	)
}

export default MyApp;

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../Components/Header';
import PapersDownload from '../Components/PapersDownload';
import Navbar from '../Components/Navbar';

const Home = () => {
	return (
		<div>
			<Head>
				<title>Home</title>
			</Head>

			<Header />

			{/* Papers Download  */}
			<PapersDownload />

			<p className={styles.text}>
				<a href="https://www.google.com/accounts/Logout">Click here</a> to log
				out from all accounts and log in to your Nalanda Students account
			</p>
		</div>
	);
};

export default Home;

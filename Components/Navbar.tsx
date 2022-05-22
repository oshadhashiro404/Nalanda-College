import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
	const [active, setActive] = useState('home');

	return (
		<>
			<p className={styles.topText}>
				You can access this website from the email address given to you by the
				school
			</p>

			<div className={styles.navbar}>
				<Link href="/">
					<a onClick={() => setActive('')} className={styles.navHeading}>
						Nalanda College
					</a>
				</Link>

				<Link href="/">
					<a
						className={styles.navLink}
						onClick={() => setActive('home')}
						style={
							active === 'home'
								? { color: '#111', fontWeight: 450 }
								: { color: '#7e8187' }
						}
					>
						Home
					</a>
				</Link>
				<Link href="/Principal">
					<a
						className={styles.navLink}
						onClick={() => setActive('principal')}
						style={
							active === 'principal'
								? { color: '#111', fontWeight: 450 }
								: { color: '#7e8187' }
						}
					>
						Principal's Message
					</a>
				</Link>
				<Link href="/ProjectTeam">
					<a
						className={styles.navLink}
						onClick={() => setActive('team')}
						style={
							active === 'team'
								? { color: '#111', fontWeight: 450 }
								: { color: '#7e8187' }
						}
					>
						Project Team
					</a>
				</Link>
				<Link href="/UserGuides">
					<a
						className={styles.navLink}
						onClick={() => setActive('guide')}
						style={
							active === 'guide'
								? { color: '#111', fontWeight: 450 }
								: { color: '#7e8187' }
						}
					>
						User Guides
					</a>
				</Link>
				<a
					href="https://classroom.google.com/"
					target="_blank"
					className={styles.navLink}
				>
					My Classrooom
				</a>
				<a
					href="https://myaccount.google.com/personal-info"
					target="_blank"
					className={styles.navLink}
				>
					My Account
				</a>

				<Link href="/SupportTeam">
					<a
						className={styles.navLink}
						onClick={() => setActive('support-team')}
						style={
							active === 'support-team'
								? { color: '#111', fontWeight: 450 }
								: { color: '#7e8187' }
						}
					>
						Support Team
					</a>
				</Link>

				<a className={styles.navLink}>
					<FaSearch />
				</a>
			</div>
		</>
	);
};

export default Navbar;

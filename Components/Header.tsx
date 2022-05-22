import Image from 'next/image';
import styles from '../styles/Header.module.css';
import headerImage from '../assets/images/header.png';
import { CgProfile } from 'react-icons/cg';
import { SiGoogleclassroom } from 'react-icons/si';
import { SiGooglemeet } from 'react-icons/si';
import { GoMail } from 'react-icons/go';

const Header = () => {
	return (
		<>
			<div className={styles.headerImg}>
				<Image src={headerImage} objectFit="contain" />
			</div>

			<ul className={styles.links}>
				<li>
					<CgProfile className={styles.linkIcon} />
					<a href="https://myaccount.google.com/personal-info">My Account</a>
				</li>
				<li>
					<SiGoogleclassroom className={styles.linkIcon} />
					<a href="https://classroom.google.com/">My Classroom</a>
				</li>
				<li>
					<SiGooglemeet className={styles.linkIcon} />
					<a href="https://meet.google.com/">Staff Meeting</a>
				</li>
				<li>
					<GoMail className={styles.linkIcon} />
					<a href="https://www.google.com/url?q=http%3A%2F%2Fmail.nalandacollege.info%2F&sa=D&sntz=1&usg=AFQjCNH7J0D9B43dwNl10Al8aTkHev1vng">
						Check Emails
					</a>
				</li>
			</ul>
		</>
	);
};

export default Header;

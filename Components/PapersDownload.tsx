import styles from '../styles/PapersDownload.module.css';

const PapersDownload = () => {
	return (
		<>
			<p className={styles.text}>
				Download Subject Unit Test Question Papers from Grade 4 to Grade 13
				here.
			</p>

			<div className={styles.buttonContainer}>
				<div className={styles.mainBtnContainer}>
					<a
						className={styles.mainBtn}
						target="_blank"
						rel="noreferrer"
						href="https://drive.google.com/drive/folders/1XKBN8ruq9IChRALP-FSPHjv9-EMvZ7_B"
					>
						Download Subject Unit Test Papers
					</a>
				</div>

				<div className={styles.gradeBtnContainer}>
					<div className={styles.row}>
						<a
							className={styles.btn}
							href="https://drive.google.com/drive/folders/1p9JX45-lTHkqLmuGqJ5jSb2Z8KiFooxN?usp=sharing"
							target="_blank"
							rel="noreferrer"
						>
							Grade 4
						</a>
						<a
							className={styles.btn}
							href="https://drive.google.com/drive/folders/1z5vY2C2gUPrlwS4z8AkBOiILXLrEIs70?usp=sharing"
							target="_blank"
							rel="noreferrer"
						>
							Grade 5
						</a>
						<a
							className={styles.btn}
							href="https://drive.google.com/drive/folders/19XwW_tEQzaXz-a5nb0bPYI11Hl2_PSs3?usp=sharing"
							target="_blank"
							rel="noreferrer"
						>
							Grade 6
						</a>
					</div>
					<div className={styles.row}>
						<a
							className={styles.btn}
							href="https://drive.google.com/drive/folders/1DGJejjI0B1G5w0dCFJn7OqOcty7vGGxG?usp=sharing"
							target="_blank"
							rel="noreferrer"
						>
							Grade 7
						</a>
						<a
							className={styles.btn}
							href="https://drive.google.com/drive/folders/1xUPWwYo8f3zeM8z1FQdkNlvHx093k58r?usp=sharing"
							target="_blank"
							rel="noreferrer"
						>
							Grade 8
						</a>
						<a
							className={styles.btn}
							href="https://drive.google.com/drive/folders/1zypq-Uh9mNDzALH-84jYLxmL9a8ZOfel?usp=sharing"
							target="_blank"
							rel="noreferrer"
						>
							Grade 9
						</a>
					</div>
					<div className={styles.row}>
						<a
							className={styles.btn}
							href="https://drive.google.com/drive/folders/1dcZhOa7IAUMg2WUbBNVIikDqe03s5I5j?usp=sharing"
							target="_blank"
							rel="noreferrer"
						>
							Grade 10
						</a>
						<a
							className={styles.btn}
							href="https://drive.google.com/drive/folders/1rdDZb4yszR50z3XP5bREWGfbBZe_6YdF?usp=sharing"
							target="_blank"
							rel="noreferrer"
						>
							Grade 11
						</a>
						<a
							className={styles.btn}
							href="https://drive.google.com/drive/folders/1G7Gy5OI1Ua3bKJ-AAoTgDF2k4YwmWvua?usp=sharing"
							target="_blank"
							rel="noreferrer"
						>
							Grade 12 - 13
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default PapersDownload;

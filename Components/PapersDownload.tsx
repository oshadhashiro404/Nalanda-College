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
						href="https://drive.google.com/drive/folders/1XKBN8ruq9IChRALP-FSPHjv9-EMvZ7_B"
					>
						Download Subject Unit Test Papers
					</a>
				</div>

				<div className={styles.gradeButtonContainer}>
					<a>Grade 4</a>
					<a>Grade 5</a>
					<a>Grade 6</a>
					<a>Grade 7</a>
					<a>Grade 8</a>
					<a>Grade 9</a>
					<a>Grade 10</a>
					<a>Grade 11</a>
					<a>Grade 12 - 13</a>
				</div>
			</div>
		</>
	);
};

export default PapersDownload;

import styles from "./education.module.scss";

export default function Education() {
    return (
        <aside className={styles.educationAside}>
            <h2>Education</h2>
            <div className={styles.educationItem}>
                <div className={styles.degree}>M.S. Computer Science</div>
                <div className={styles.school}>University of Illinois Urbana-Champaign</div>
                <div className={styles.year}>2010 – 2012</div>
            </div>
            <div className={styles.educationItem}>
                <div className={styles.degree}>B.E. Computer Science & Engineering</div>
                <div className={styles.school}>Anna University, Chennai</div>
                <div className={styles.year}>2006 – 2010</div>
            </div>
        </aside>
    );
}
"use client"
import { useInView } from "../hooks/useInView";
import pageStyles from "../page.module.scss";
import styles from "./education.module.scss";

export default function Education() {
    const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 });

    return (
        <section id="education" ref={ref} className={`${pageStyles.section} ${inView ? styles.visible : ""}`}>
            <div className={pageStyles.sectionContent}>
                <h2>Education</h2>
                <div className={styles.educationGrid}>
                    <div className={styles.educationItem}>
                        <div className={styles.degree}>M.C.A. (Master of Computer Applications)</div>
                        <div className={styles.school}>Pondicherry University</div>
                        <div className={styles.year}>2008 – 2011</div>
                    </div>
                    <div className={styles.educationItem}>
                        <div className={styles.degree}>B.C.A. (Bachelor of Computer Applications)</div>
                        <div className={styles.school}>Pondicherry University</div>
                        <div className={styles.year}>2005 – 2008</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
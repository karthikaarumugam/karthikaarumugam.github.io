"use client"
import { useInView } from "../hooks/useInView";
import pageStyles from "../page.module.scss";
import styles from "./education.module.scss";
import { educationList } from "../content";

export default function Education() {
    const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 });

    return (
        <section id="education" ref={ref} className={`${pageStyles.section} ${inView ? styles.visible : ""}`}>
            <div className={pageStyles.sectionContent}>
                <h2>Education</h2>
                <div className={styles.educationGrid}>
                    {educationList.map((edu, idx) => (
                        <div className={styles.educationItem} key={idx}>
                            <div className={styles.degree}>{edu.degree}</div>
                            <div className={styles.school}>{edu.university}</div>
                            <div className={styles.year}>{edu.year}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
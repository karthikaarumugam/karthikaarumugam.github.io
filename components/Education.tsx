"use client"
import { useInView } from "../hooks/useInView";
import Image from "next/image";
import pageStyles from "../styles/index.module.scss";
import styles from "./education.module.scss";
import info from "../_data/info.json";

export default function Education() {
    const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 });

    return (
        <section id="education" ref={ref} className={`${pageStyles.section} ${inView ? styles.visible : ""}`}>
            <div className={pageStyles.sectionContent}>
                <h2>Education</h2>
                <div className={styles.educationGrid}>
                    {info.education.map((edu, idx) => (
                        <div className={styles.educationItem} key={idx}>
                            <div>
                                <div className={styles.degree}>{edu.degree}</div>
                                <div className={styles.school}>{edu.university}</div>
                                <div className={styles.year}>{edu.year}</div>
                                {edu.logo && (
                                    <Image
                                        src={edu.logo}
                                        alt={edu.university}
                                        className={styles.eduLogo}
                                        width={40}
                                        height={40}
                                        style={{ marginLeft: "auto" }}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div><div className={pageStyles.sectionContent}>
                <h2>Certifications</h2>
                <div className={styles.educationGrid}>
                    {info.certifications.map((cert, idx) => (
                        <div className={styles.educationItem} key={idx}>
                            <div>
                                <div className={styles.degree}>{cert.name}</div>
                                <div className={styles.school}>{cert.issuer}</div>
                                <div className={styles.year}>{cert.issueDate}</div>
                                {cert.logo && (
                                    <Image
                                        src={cert.logo}
                                        alt={cert.issuer}
                                        className={styles.eduLogo}
                                        width={40}
                                        height={40}
                                        style={{ marginLeft: "auto" }}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
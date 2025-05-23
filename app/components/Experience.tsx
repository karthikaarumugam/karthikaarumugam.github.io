/* eslint-disable @next/next/no-img-element */
"use client";
import { useInView } from "../hooks/useInView";
import pageStyles from "../page.module.scss";
import styles from "./experience.module.scss";
import experiences from "../../_data/career.json";// At the top of your file
import dynamic from "next/dynamic";
const FaBuilding = dynamic(() => import("react-icons/fa").then(mod => mod.FaBuilding), { ssr: false });

export default function ExperienceSection() {
    const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 });

    return (
        <section id="experience" ref={ref} className={`${pageStyles.section} ${inView ? styles.visible : ""}`}>
            <div className={pageStyles.sectionContent}>
                <h2>Experience</h2>
                <div className={styles.timeline}>
                    <div className={styles.timelineLine} />
                    <div className={styles.timelineList}>
                        {experiences.map((exp, idx) => (
                            <div className={styles.timelineItem} key={idx}>
                                <div className={styles.timelineDot} ><FaBuilding size={20} color="var(--color-primary)" /></div>
                                <div className={styles.timelineSide}>
                                    <div className={styles.experienceHeader}>
                                        {/* {exp.logo && (<img src={exp.logo} alt={`${exp.company} logo`} className={styles.companyLogo} width={40} height={40} loading="lazy" />)} */}
                                        <div>
                                            <h3>
                                                {exp.role} <span>@ {exp.company}</span>{" "}
                                                {exp.client && (
                                                    <span className={styles.clientCompany}>
                                                        Client: {exp.client}
                                                    </span>
                                                )}
                                            </h3>
                                            <p className={styles.period}>{exp.period}</p>
                                        </div>

                                        {exp.shortDescription && (
                                            <p className={styles.shortDescription}>{exp.shortDescription}</p>
                                        )}
                                    </div>
                                </div>
                                <div className={styles.timelineSide}>
                                    <div className={styles.experienceDetails}>
                                        <ul>
                                            {exp.responsibilities.map((desc, i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: desc }} />
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
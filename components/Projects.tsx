"use client"
import { useInView } from "../hooks/useInView";
import styles from "../styles/index.module.scss";
import projStyles from "./projects.module.scss";
import projects from '../_data/projects.json';

export default function ProjectsSection() {
    const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 });
    return (
        <section id="projects" ref={ref} className={`${styles.section} ${inView ? styles.visible : ""}`}>
            <div className={styles.sectionContent}>
                <h2>Projects</h2>
                <ul className={projStyles.projectList}>
                    {projects.map((proj, idx) => (
                        <li key={idx} className={projStyles.projectItem}>
                            <div className={projStyles.projectHeader}>
                                <h3>{proj.title}</h3>
                            </div>
                            <div className={projStyles.projectDetails}>
                                <p><strong>Context:</strong> {proj.context}</p>
                                <p><strong>Why:</strong> {proj.why}</p>
                                <p><strong>How:</strong> {proj.how}</p>
                                <p><strong>Results:</strong> {proj.results}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
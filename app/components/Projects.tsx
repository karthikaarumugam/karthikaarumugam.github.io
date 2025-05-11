"use client"
import { useInView } from "../hooks/useInView";
import styles from "../page.module.scss";
import { projectList } from "../content";

export default function ProjectsSection() {
    const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 });
    return (
        <section id="projects" ref={ref} className={`${styles.section} ${inView ? styles.visible : ""}`}>
            <div className={styles.sectionContent}>
                <h2>Projects</h2>
                <ul>
                    {projectList.map((desc, idx) => (
                        <li key={idx}>
                            <p>{desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
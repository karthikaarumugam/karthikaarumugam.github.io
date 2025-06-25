"use client";
import { useInView } from "../hooks/useInView";
import pageStyles from "../styles/index.module.scss";
import styles from "./skills.module.scss";
import { skillGroups } from "../_data/content";
import softSkills from '../_data/softSkills.json';

const Skills: React.FC = () => {
    const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 });

    return (
        <section id="skills" ref={ref} className={`${pageStyles.section} ${inView ? styles.visible : ""}`}>
            <div className={pageStyles.sectionContent}>
                <h2>Skills</h2>
                {skillGroups.map(group => (
                    <div key={group.category} className={styles.skillsGroup}>
                        <h3>{group.category}</h3>
                        <div className={styles.skillsList}>
                            {group.skills.map(skill => (
                                <div className={styles.skillItem} key={skill.name}>
                                    <span className={styles.skillIcon} tabIndex={0}>
                                        {skill.icon}<span className={styles.skillName}>{skill.name}</span>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <div className={`${styles.softSkillsSection} ${styles.skillsGroup}`}>
                    <h3>Soft Skills</h3>
                    <div className={styles.skillsList}>
                        <ul className={styles.softSkillsList}>
                            {softSkills.map((skill, idx) => (
                                <li key={idx}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    )
};

export default Skills;
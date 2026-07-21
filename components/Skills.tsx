"use client";
import { useInView } from "../hooks/useInView";
import pageStyles from "../styles/index.module.scss";
import styles from "./skills.module.scss";
import { skillGroups } from "../_data/content";
import softSkills from '../_data/softSkills.json';

const leadershipCards = [
    {
        title: 'AI Strategy & Governance',
        text: 'Applied Machine Learning and AI learning from Cornell, paired with cross-functional delivery work that connects strategy, governance, and practical adoption.'
    },
    {
        title: 'Platform Modernization',
        text: 'Led platform transformation at enterprise scale, including the guest-services platform now spanning 1,200+ properties and simplifying operations.'
    },
    {
        title: 'Team Building & Mentorship',
        text: 'Built and guided a 13-person engineering organization while mentoring engineers into higher-impact roles and strengthening team capability.'
    },
];

const Skills: React.FC = () => {
    const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 });

    const getGroupClassName = (category: string) => {
        if (category.includes('Leadership')) return `${styles.skillsGroup} ${styles.featuredGroup}`;
        return styles.skillsGroup;
    };

    return (
        <section id="skills" ref={ref} className={`${pageStyles.section} ${inView ? styles.visible : ""}`}>
            <div className={pageStyles.sectionContent}>
                <h2>Skills</h2>
                <div className={styles.skillsGrid}>
                    {skillGroups.map(group => {
                        if (group.category.includes('Leadership')) {
                            return (
                                <div key={group.category} className={getGroupClassName(group.category)}>
                                    <h3>{group.category}</h3>
                                    <div className={styles.leadershipCards}>
                                        {leadershipCards.map((card) => (
                                            <div key={card.title} className={styles.leadershipCard}>
                                                <h4>{card.title}</h4>
                                                <p>{card.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <div key={group.category} className={getGroupClassName(group.category)}>
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
                        );
                    })}
                </div>
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
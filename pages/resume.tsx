"use client";
import Head from "next/head";
import { FaEnvelope, FaLinkedin, FaGithub, FaMobile, FaGlobe } from "react-icons/fa";
import styles from "../styles/index.module.scss";
import resumeStyles from "../styles/resume.module.scss";
import { skillGroups } from "../_data/content";
import softSkills from '../_data/softSkills.json';
import experiences from "../_data/career.json";
import info from '../_data/info.json';

export default function Resume() {
    return (
        <>
            <Head><title>Resume - Karthika Arumugam</title></Head>
            <div className={styles.page}>

                <section className={resumeStyles.header}>
                    <div className={styles.sectionContent}>
                        <h2>{info.resume.title}</h2>
                        <p>{info.resume.message}</p>
                        <button className={resumeStyles.button} onClick={() => window.print()}>
                            {info.resume.download} <span className={styles.downloadIcon}>📄</span>
                        </button>
                    </div>
                </section>

                <main className={resumeStyles.resumeMain}>
                    <div className={resumeStyles.profileCard}>
                        <h1 className={resumeStyles.profileName}>{info.hero.name}</h1>
                        <h2 className={resumeStyles.profileRole}>{info.about_me.title}</h2>
                        <div className={resumeStyles.profileContact}>
                            <a href={`https://${info.contact.github}`} style={{ color: "#24292f" }} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a> {info.contact.github}
                            <a href={`https://${info.contact.linkedin}`} style={{ color: "#0077b5" }} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a> {info.contact.linkedin}
                            <a href={`https://${info.contact.portfolio}`} style={{ color: "#1a237e" }} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaGlobe /></a> {info.contact.portfolio}
                        </div>
                        <div className={resumeStyles.profileContact}>
                            <a href={`mailto:${info.contact.email}`} style={{ color: "#ea4335" }} aria-label="Email"><FaEnvelope /> {info.contact.email}</a>| <FaMobile /> {info.contact.phone}
                        </div>
                    </div>
                    <aside className={resumeStyles.resumeSidebar}>
                        <div className={resumeStyles.section}>
                            <h2>Education</h2>
                            <div className={resumeStyles.educationList}>
                                {info.education.map((edu, idx) => (
                                    <div className={resumeStyles.educationCard} key={idx}>
                                        <strong>{edu.degree}</strong>
                                        <div>{edu.university}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={resumeStyles.section}>
                            <h2>Skills</h2>
                            <ul className={resumeStyles.skillsList}>
                                {skillGroups.flatMap(group =>
                                    group.skills.map(skill => (
                                        <li key={skill.name}>{skill.icon} <span>{skill.name}</span></li>
                                    ))
                                )}
                            </ul>
                        </div>
                        <div className={resumeStyles.section}>
                            <h2>Certifications</h2>
                            <ul className={resumeStyles.educationList}>
                                {info.certifications.slice(0, 4).map((cert, idx) => (
                                    <div className={resumeStyles.educationCard} key={idx}>
                                        <strong>{cert.name}</strong>
                                        <div>{cert.issuer}</div>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </aside>
                    <section className={resumeStyles.resumeContent}>
                        <div className={resumeStyles.section}>
                            <h2>About Me</h2>
                            <p dangerouslySetInnerHTML={{ __html: info.about_me.resumeSummary }} />
                        </div>
                        <div className={resumeStyles.section}>
                            <h2>Experience</h2>
                            {experiences.map((exp) => (
                                <div className={resumeStyles.experienceItem} key={exp.role + exp.company}>
                                    <h3>{exp.role}</h3>
                                    <div className={resumeStyles.expMeta}>
                                        <span>{exp.company}</span>
                                        <span>{exp.period}</span>
                                    </div>
                                    <ul>
                                        {exp.responsibilities.map((item, idx) => (
                                            <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className={resumeStyles.section}>
                            <h2>Soft Skills</h2>
                            <ul className={resumeStyles.softSkillsList}>
                                {softSkills.map((skill, idx) => (
                                    <li key={idx}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </main >
            </div >
        </>
    );
}
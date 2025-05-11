"use client";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "../page.module.scss";
import resumeStyles from "./resume.module.scss";
import { educationList, experiences, projectList, skillGroups, softSkills } from "../content";
import { useRef } from "react";

export default function Resume() {
    const mainRef = useRef<HTMLDivElement>(null);

    const handlePrint = () => {
        window.print();
    };
    return (
        <div className={styles.page}>
            {/* Download/Print Button */}
            <div style={{ textAlign: "right", margin: "1rem 2rem 0 0" }}>
                <button
                    onClick={handlePrint}
                    className={resumeStyles.printBtn}
                    style={{
                        padding: "0.5rem 1.2rem",
                        borderRadius: "6px",
                        border: "none",
                        background: "var(--color-primary, #007bff)",
                        color: "#fff",
                        fontWeight: 600,
                        cursor: "pointer",
                        fontSize: "1rem"
                    }}
                >
                    Download PDF / Print
                </button>
            </div>
            <main className={resumeStyles.resumeMain}>
                {/* Sidebar */}
                <aside className={resumeStyles.resumeSidebar}>
                    <div className={resumeStyles.profileCard}>
                        {/* <img
                            src="/profile.jpg"
                            alt="Karthika Arumugam"
                            className={resumeStyles.profileImg}
                        /> */}
                        <h1 className={resumeStyles.profileName}>Karthika Arumugam</h1>
                        <p className={resumeStyles.profileRole}>Technology Leader</p>
                        <div className={resumeStyles.profileContact}>
                            <a href="mailto:karthika_a2006@live.com" aria-label="Email">
                                <FaEnvelope style={{ marginRight: 8, verticalAlign: "middle" }} />
                            </a>
                            <a href="https://linkedin.com/in/karthikaa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin style={{ marginRight: 8, verticalAlign: "middle" }} />
                            </a>
                            <a href="https://github.com/karthikaarumugam" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub style={{ marginRight: 8, verticalAlign: "middle" }} />
                            </a>
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
                        <h2>Soft Skills</h2>
                        <ul className={resumeStyles.softSkillsList}>
                            {softSkills.map((skill, idx) => (
                                <li key={idx}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={resumeStyles.section}>
                        <h2>Education</h2>
                        <div className={resumeStyles.educationList}>
                            {educationList.map((edu, idx) => (
                                <div className={resumeStyles.educationCard} key={idx}>
                                    <strong>{edu.degree}</strong>
                                    <div>{edu.university}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
                {/* Main Content */}
                <section className={resumeStyles.resumeContent}>
                    <div className={resumeStyles.section}>
                        <h2>About Me</h2>
                        <p>With <strong>13 years of experience</strong> in software development and leadership, I’ve led teams to <strong>modernize legacy systems</strong>, <strong>scale enterprise applications</strong>, and align <strong>technology strategy</strong> with business goals. My expertise spans <strong>cloud-native architectures, DevOps, Agile development, system architecture, API integrations, CI/CD automation</strong>, and <strong>cloud migrations</strong>. I’ve delivered <strong>high-impact solutions</strong> across hospitality, travel, and enterprise tech, always focused on <strong>operational efficiency, security compliance</strong>, and <strong>enhancing user experiences</strong>.</p>
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
                        {/* Add more experience as needed */}
                    </div>
                    <div className={resumeStyles.section}>
                        <h2>Projects</h2>
                        <ul className={resumeStyles.projectList}>
                            {projectList.map((desc, idx) => (
                                <li key={idx}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
}
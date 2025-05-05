"use client";
import styles from "./skills.module.scss";
import {
    FaReact, FaNodeJs, FaAws, FaDocker, FaJenkins, FaGitlab, FaAngular, FaPython,
    FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaCloud, FaChartBar, FaUsers, FaUniversalAccess, FaLock, FaExchangeAlt, FaEye
} from 'react-icons/fa';
import {
    SiKubernetes, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiGoogleanalytics, SiSpring, SiNextdotjs, SiAnsible, SiExpress, SiAuth0, SiDatadog, SiSplunk, SiTypescript, SiRedux, SiSass, SiVsco, SiGithubactions
} from 'react-icons/si';

const skillGroups = [
    {
        category: 'Front-End Development',
        skills: [
            { icon: <FaReact color="#61dafb" />, name: 'React' },
            { icon: <SiNextdotjs color="#000" />, name: 'Next.js' },
            { icon: <FaAngular color="#dd0031" />, name: 'Angular' },
            { icon: <FaJsSquare color="#f7df1e" />, name: 'JavaScript ES6' },
            { icon: <SiTypescript color="#3178c6" />, name: 'TypeScript' },
            { icon: <FaHtml5 color="#e34c26" />, name: 'HTML5' },
            { icon: <FaCss3Alt color="#1572b6" />, name: 'CSS3' },
            { icon: <SiSass color="#cc6699" />, name: 'Sass' },
            { icon: <SiRedux color="#764abc" />, name: 'Redux' },
            { icon: <FaUniversalAccess color="#007bff" />, name: 'Accessibility (WCAG, A11y)' },
        ],
    },
    {
        category: 'Back-End & Scripting',
        skills: [
            { icon: <FaNodeJs color="#3c873a" />, name: 'Node.js' },
            { icon: <SiExpress color="#000" />, name: 'Express' },
            { icon: <FaPython color="#3776ab" />, name: 'Python' },
            { icon: <SiSpring color="#6db33f" />, name: 'Spring MVC' },
        ],
    },
    {
        category: 'Cloud & DevOps',
        skills: [
            { icon: <FaAws color="#ff9900" />, name: 'AWS' },
            { icon: <FaCloud color="#0078d4" />, name: 'Azure' },
            { icon: <SiKubernetes color="#326ce5" />, name: 'Kubernetes' },
            { icon: <FaDocker color="#2496ed" />, name: 'Docker' },
            { icon: <FaJenkins color="#d24939" />, name: 'Jenkins' },
            { icon: <FaGitlab color="#fc6d26" />, name: 'GitLab CI/CD' },
            { icon: <SiAnsible color="#e00" />, name: 'Ansible' },
            { icon: <FaGitAlt color="#f34f29" />, name: 'Git' },
            { icon: <SiGithubactions color="#2088ff" />, name: 'GitHub Actions' },
        ],
    },
    {
        category: 'Databases & Analytics',
        skills: [
            { icon: <FaDatabase color="#f29111" />, name: 'SQL/NoSQL' },
            { icon: <SiPostgresql color="#336791" />, name: 'PostgreSQL' },
            { icon: <SiMongodb color="#47a248" />, name: 'MongoDB' },
            { icon: <SiMysql color="#00758f" />, name: 'MySQL' },
            { icon: <SiRedis color="#dc382d" />, name: 'Redis' },
            { icon: <SiGoogleanalytics color="#fbbc05" />, name: 'Google Analytics' },
            { icon: <FaChartBar color="#17a2b8" />, name: 'Tag Manager' },
        ],
    },
    {
        category: 'Security, Integration & Observability',
        skills: [
            { icon: <FaLock color="#333" />, name: 'Security & Compliance (PCI, PII, GDPR, CCPA, OAuth)' },
            { icon: <SiAuth0 color="#3d3d3d" />, name: 'OAuth' },
            { icon: <FaEye color="#17a2b8" />, name: 'Real-Time Monitoring' },
            { icon: <SiDatadog color="#632ca6" />, name: 'Datadog' },
            { icon: <SiSplunk color="#000" />, name: 'Splunk' },
            { icon: <FaExchangeAlt color="#007bff" />, name: 'API & Data Integration' },
        ],
    },
    {
        category: 'Collaboration & Tools',
        skills: [
            { icon: <FaUsers color="#6c757d" />, name: 'Team Management' },
            { icon: <SiVsco color="#007acc" />, name: 'VS Code' },
        ],
    },
];

const softSkills = [
    'Technical Leadership & Team Management',
    'Vendor & Stakeholder Management',
    'Agile Methodology & Cross-Functional Collaboration',
    'Product Management & Technical Roadmap Planning',
    'Change Management & Digital Transformation',
    'Strong Communication, Presentation & Consensus-Building Skills',
    'Emotional Intelligence & Mentorship',
];

const Skills: React.FC = () => (
    <section id="skills" className={styles.section}>
        <h2>Skills</h2>
        {skillGroups.map(group => (
            <div key={group.category} className={styles.skillsGroup}>
                <h3>{group.category}</h3>
                <div className={styles.skillsList}>
                    {group.skills.map(skill => (
                        <div className={styles.skillItem} key={skill.name}>
                            <span className={styles.skillIcon}>{skill.icon}</span>
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        ))}
        <div className={styles.softSkillsSection}>
            <h3>Soft Skills</h3>
            <ul className={styles.softSkillsList}>
                {softSkills.map(skill => (
                    <li key={skill}>
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default Skills;

"use client";
import React from 'react';
import {
    FaReact, FaNodeJs, FaAws, FaDocker, FaJenkins, FaGitlab, FaAngular, FaPython,
    FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaCloud, FaChartBar, FaUsers, FaUniversalAccess, FaLock, FaExchangeAlt, FaEye
} from 'react-icons/fa';
import {
    SiKubernetes, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiGoogleanalytics, SiSpring, SiNextdotjs, SiAnsible, SiExpress, SiAuth0, SiDatadog, SiSplunk, SiTypescript, SiRedux, SiSass, SiVsco, SiGithubactions
} from 'react-icons/si';

export const skillGroups = [
    {
        category: 'Front-End Development',
        skills: [
            { icon: React.createElement(FaReact, { color: "#61dafb" }), name: 'React' },
            { icon: React.createElement(SiNextdotjs, { color: "#000" }), name: 'Next.js' },
            { icon: React.createElement(FaAngular, { color: "#dd0031" }), name: 'Angular' },
            { icon: React.createElement(FaJsSquare, { color: "#f7df1e" }), name: 'JavaScript ES6' },
            { icon: React.createElement(SiTypescript, { color: "#3178c6" }), name: 'TypeScript' },
            { icon: React.createElement(FaHtml5, { color: "#e34c26" }), name: 'HTML5' },
            { icon: React.createElement(FaCss3Alt, { color: "#1572b6" }), name: 'CSS3' },
            { icon: React.createElement(SiSass, { color: "#cc6699" }), name: 'Sass' },
            { icon: React.createElement(SiRedux, { color: "#764abc" }), name: 'Redux' },
            { icon: React.createElement(FaUniversalAccess, { color: "#007bff" }), name: 'Accessibility (WCAG, A11y)' },
        ],
    },
    {
        category: 'Back-End & Scripting',
        skills: [
            { icon: React.createElement(FaNodeJs, { color: "#3c873a" }), name: 'Node.js' },
            { icon: React.createElement(SiExpress, { color: "#000" }), name: 'Express' },
            { icon: React.createElement(FaPython, { color: "#3776ab" }), name: 'Python' },
            { icon: React.createElement(SiSpring, { color: "#6db33f" }), name: 'Spring MVC' },
        ],
    },
    {
        category: 'Cloud & DevOps',
        skills: [
            { icon: React.createElement(FaAws, { color: "#ff9900" }), name: 'AWS' },
            { icon: React.createElement(FaCloud, { color: "#0078d4" }), name: 'Azure' },
            { icon: React.createElement(SiKubernetes, { color: "#326ce5" }), name: 'Kubernetes' },
            { icon: React.createElement(FaDocker, { color: "#2496ed" }), name: 'Docker' },
            { icon: React.createElement(FaJenkins, { color: "#d24939" }), name: 'Jenkins' },
            { icon: React.createElement(FaGitlab, { color: "#fc6d26" }), name: 'GitLab CI/CD' },
            { icon: React.createElement(SiAnsible, { color: "#e00" }), name: 'Ansible' },
            { icon: React.createElement(FaGitAlt, { color: "#f34f29" }), name: 'Git' },
            { icon: React.createElement(SiGithubactions, { color: "#2088ff" }), name: 'GitHub Actions' },
        ],
    },
    {
        category: 'Databases & Analytics',
        skills: [
            { icon: React.createElement(FaDatabase, { color: "#f29111" }), name: 'SQL/NoSQL' },
            { icon: React.createElement(SiPostgresql, { color: "#336791" }), name: 'PostgreSQL' },
            { icon: React.createElement(SiMongodb, { color: "#47a248" }), name: 'MongoDB' },
            { icon: React.createElement(SiMysql, { color: "#00758f" }), name: 'MySQL' },
            { icon: React.createElement(SiRedis, { color: "#dc382d" }), name: 'Redis' },
            { icon: React.createElement(SiGoogleanalytics, { color: "#fbbc05" }), name: 'Google Analytics' },
            { icon: React.createElement(FaChartBar, { color: "#17a2b8" }), name: 'Tag Manager' },
        ],
    },
    {
        category: 'Security, Integration & Observability',
        skills: [
            { icon: React.createElement(FaLock, { color: "#333" }), name: 'Security & Compliance (PCI, PII, GDPR, CCPA, OAuth)' },
            { icon: React.createElement(SiAuth0, { color: "#3d3d3d" }), name: 'OAuth' },
            { icon: React.createElement(FaEye, { color: "#17a2b8" }), name: 'Real-Time Monitoring' },
            { icon: React.createElement(SiDatadog, { color: "#632ca6" }), name: 'Datadog' },
            { icon: React.createElement(SiSplunk, { color: "#000" }), name: 'Splunk' },
            { icon: React.createElement(FaExchangeAlt, { color: "#007bff" }), name: 'API & Data Integration' },
        ],
    },
    {
        category: 'Collaboration & Tools',
        skills: [
            { icon: React.createElement(FaUsers, { color: "#6c757d" }), name: 'Team Management' },
            { icon: React.createElement(SiVsco, { color: "#007acc" }), name: 'VS Code' },
        ],
    },
];
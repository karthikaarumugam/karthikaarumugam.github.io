
"use client";
import React from 'react';
import {
    FaReact, FaNodeJs, FaAws, FaDocker, FaJenkins, FaGitlab, FaAngular, FaPython,
    FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaCloud, FaChartBar, FaUsers, FaUniversalAccess, FaLock, FaExchangeAlt, FaEye
} from 'react-icons/fa';
import {
    SiKubernetes, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiGoogleanalytics, SiSpring, SiNextdotjs, SiAnsible, SiExpress, SiAuth0, SiDatadog, SiSplunk, SiTypescript, SiRedux, SiSass, SiVsco, SiGithubactions
} from 'react-icons/si';

export const educationList = [
    {
        degree: "M.C.A. (Master of Computer Applications)",
        university: "Pondicherry University",
        year: "2008 - 2011",
    },
    {
        degree: "B.C.A. (Bachelor of Computer Applications)",
        university: "Pondicherry University",
        year: "2005 - 2008",
    },
];

export const experiences = [
    {
        role: 'Product Engineering Manager',
        company: 'Hyatt Hotels Corporation',
        period: 'Oct 2017 - Present',
        logo: 'https://media.licdn.com/dms/image/v2/D560BAQHZVNCUIfytag/company-logo_100_100/company-logo_100_100/0/1719848403661/hyatt_logo?e=1752105600&v=beta&t=1sJHRk1Gws-d_g3B1NMUkRtUxJ3mufw2Nqsjz9L2QoY',
        shortDescription: 'Leading a team of engineers to develop innovative solutions for the hospitality industry.',
        responsibilities: [
            '<strong>Strategic Modernization:</strong> Directed the migration of legacy systems from Node.js to React/Next.js, and spearheaded cloud migration of core platforms (including Opera V5 to OHIP), enabling seamless API integrations and future-ready scalability.',
            '<strong>Team Leadership:</strong> Managed and mentored an 8-member engineering team, fostering a culture of growth, inclusion, and technical excellence. Provided career development, performance evaluations, and hands-on technical guidance.',
            '<strong>Process Automation & Efficiency:</strong> Designed and built internal dashboards (Pre-Arrivals, Group Arrivals, F&B) that automated manual workflows, improving operational efficiency and reducing team workload by 20%.',
            '<strong>System Integration:</strong> Orchestrated multi-system integrations across 13+ internal and external services, streamlining data exchange and optimizing hotel operations.',
            '<strong>Security & Compliance:</strong> Enhanced enterprise security by leading Azure AD MFA integration and aligning all applications with PCI and PII standards.',
            '<strong>Observability & Uptime:</strong> Implemented enterprise monitoring with Datadog, reducing incident response times by 30% and driving system reliability.',
            '<strong>DevOps Transformation:</strong> Led migration from Splunk to Datadog and Bitbucket/Jenkins to GitLab, optimizing CI/CD pipelines and accelerating deployment cycles.',
            '<strong>Stakeholder Partnership:</strong> Collaborated closely with product managers, business leaders, and vendors to define technical roadmaps, ensuring alignment with business objectives and operational goals.',
        ],
    },
    {
        role: 'Senior Frontend Engineer',
        company: 'Tracfone Wireless',
        period: '2016 - 2017',
        shortDescription: 'Transformed Tracfone’s digital presence by leading the migration from IBM Portal to a high-performance Angular SPA, enhancing user experience and site engagement.',
        responsibilities: [
            '<strong>Front-End Modernization:</strong> Redesigned and migrated web platforms, boosting performance and enabling mobile-first, responsive design.',
            '<strong>Analytics & SEO:</strong> Integrated Google Analytics and Tag Manager, increasing site engagement and search visibility.',
            '<strong>Automation:</strong> Developed modular Angular components and automated testing pipelines (Protractor, Karma/Jasmine), reducing regression testing time by 40%.',
            '<strong>Global Collaboration:</strong> Worked with offshore teams to align code quality, testing standards, and deployment best practices.'
        ],
    },
    {
        role: 'Programmer Analyst',
        company: 'Cognizant Technology Solutions',
        client: 'Hasbro',
        period: '2011 - 2015',
        shortDescription: 'Led digital transformation projects for Hasbro, managing large-scale website migrations and launching new digital brands in a fast-paced, Agile environment.',
        responsibilities: [
            '<strong>Global Content Delivery:</strong> Oversaw multilingual content deployment for 32+ locales, ensuring timely releases and compliance with accessibility and SEO standards.',
            '<strong>Analytics & Accessibility:</strong> Integrated Omniture and Google Analytics for performance tracking; enforced WCAG compliance to enhance digital usability across devices.',
            '<strong>Brand Launches:</strong> Designed and launched new digital brands, managing end-to-end development and deployment.'
        ],
    },
];

export const projectList = [
    "Modernized legacy hospitality systems by migrating from Node.js to React/Next.js, boosting scalability and user experience. Led cross-functional teams through seamless transitions, enhancing maintainability and feature delivery.",
    "Directed Opera V5 to OHIP cloud migration, enabling robust API integrations and real-time data exchange across platforms. Improved system reliability and positioned operations for future technology adoption.",
    "Implemented enterprise-wide monitoring by migrating from Splunk to Datadog, developing real-time dashboards and alerts. Reduced incident response times by 30% and empowered teams with actionable insights.",
    "Built host-facing dashboards to automate operational workflows, streamlining pre-arrival, group, and F&B processes. Reduced manual workload by 20% and elevated guest service efficiency.",
    "Enhanced security and compliance by integrating Azure AD MFA and enforcing PCI/PII standards across applications. Strengthened enterprise security posture and ensured regulatory alignment.",
    "Optimized CI/CD pipelines by migrating from Bitbucket/Jenkins to GitLab, automating deployments and improving release reliability. Accelerated deployment cycles and increased engineering productivity.",
    "Launched new digital brands and managed large-scale multilingual website migrations for Hasbro, ensuring accessibility and SEO compliance. Improved global reach and digital asset performance.",
    "Redesigned Tracfone’s web platforms from IBM Portal to Angular SPA, integrating analytics for better engagement. Improved site performance, user experience, and reduced regression testing time by 40%."
];

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

export const softSkills = [
    'Technical Leadership & Team Management',
    'Vendor & Stakeholder Management',
    'Agile Methodology & Cross-Functional Collaboration',
    'Product Management & Technical Roadmap Planning',
    'Change Management & Digital Transformation',
    'Strong Communication, Presentation & Consensus-Building Skills',
    'Emotional Intelligence & Mentorship',
];

"use client";
import React from 'react';
import {
    FaReact, FaNodeJs, FaAws, FaDocker, FaGitlab, FaAngular, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare,
    FaGitAlt, FaCloud, FaChartBar, FaUniversalAccess, FaLock, FaCheckCircle, FaUsers, FaProjectDiagram, FaShieldAlt, FaRobot, FaChartLine
} from 'react-icons/fa';
import {
    SiKubernetes, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiGoogleanalytics, SiNextdotjs, SiAnsible, SiExpress,
    SiAuth0, SiDatadog, SiSplunk, SiTypescript, SiRedux, SiSass, SiVsco, SiGithubactions, SiFigma, SiApachekafka, SiRundeck
} from 'react-icons/si';

export const skillGroups = [
    {
        category: 'Leadership & Strategy',
        skills: [
            { icon: React.createElement(FaUsers, { color: "var(--accent)" }), name: 'Led high-performing teams', level: 'Leadership' },
            { icon: React.createElement(FaChartLine, { color: "var(--accent)" }), name: 'Drove technical roadmaps', level: 'Strategy' },
            { icon: React.createElement(FaShieldAlt, { color: "var(--accent)" }), name: 'Mentored engineers and aligned stakeholders', level: 'Leadership' },
            { icon: React.createElement(FaRobot, { color: "var(--accent)" }), name: 'Enterprise AI adoption', level: 'AI' },
            { icon: React.createElement(FaProjectDiagram, { color: "var(--accent)" }), name: 'Predictive analytics and decision systems', level: 'Data' },
        ],
    },
    {
        category: 'Product & Frontend Engineering',
        skills: [
            { icon: React.createElement(FaReact, { color: "#61dafb" }), name: 'React', level: 'Expert' },
            { icon: React.createElement(SiNextdotjs, { color: "#000" }), name: 'Next.js', level: 'Expert' },
            { icon: React.createElement(FaAngular, { color: "#dd0031" }), name: 'Angular', level: 'Advanced' },
            { icon: React.createElement(FaJsSquare, { color: "#f7df1e" }), name: 'JavaScript', level: 'Expert' },
            { icon: React.createElement(FaHtml5, { color: "#e34f26" }), name: 'HTML5', level: 'Advanced' },
            { icon: React.createElement(FaCss3Alt, { color: "#1572b6" }), name: 'CSS3', level: 'Advanced' },
            { icon: React.createElement(SiSass, { color: "#cc6699" }), name: 'Sass', level: 'Advanced' },
            { icon: React.createElement(SiRedux, { color: "#764abc" }), name: 'Redux', level: 'Intermediate' },
            { icon: React.createElement(SiTypescript, { color: "#3178c6" }), name: 'TypeScript', level: 'Expert' },
            { icon: React.createElement(FaUniversalAccess, { color: "#007bff" }), name: 'Accessibility', level: 'Advanced' },
        ],
    },
    {
        category: 'Platform, Cloud & Integration',
        skills: [
            { icon: React.createElement(FaNodeJs, { color: "#3c873a" }), name: 'Node.js', level: 'Expert' },
            { icon: React.createElement(FaPython, { color: "#3776ab" }), name: 'Python', level: 'Advanced' },
            { icon: React.createElement(FaAws, { color: "#ff9900" }), name: 'AWS/Azure', level: 'Cloud' },
            { icon: React.createElement(FaDocker, { color: "#2496ed" }), name: 'Docker', level: 'Advanced' },
            { icon: React.createElement(SiKubernetes, { color: "#326ce5" }), name: 'Kubernetes', level: 'Advanced' },
            { icon: React.createElement(SiExpress, { color: "#000" }), name: 'REST/GraphQL APIs', level: 'Advanced' },
            { icon: React.createElement(SiApachekafka, { color: "#231F20" }), name: 'Kafka', level: 'Event-driven' },
            { icon: React.createElement(SiApachekafka, { color: "#231F20" }), name: 'Confluent', level: 'Streaming' },
            { icon: React.createElement(FaDatabase, { color: "#f29111" }), name: 'Snowflake', level: 'Data Platform' },
            { icon: React.createElement(SiDatadog, { color: "#632ca6" }), name: 'Datadog', level: 'Observability' },
        ],
    },
    {
        category: 'Data, Storage & Delivery',
        skills: [
            { icon: React.createElement(SiMongodb, { color: "#47a248" }), name: 'MongoDB', level: 'Intermediate' },
            { icon: React.createElement(SiPostgresql, { color: "#336791" }), name: 'PostgreSQL', level: 'Intermediate' },
            { icon: React.createElement(SiMysql, { color: "#4479A1" }), name: 'MySQL', level: 'Intermediate' },
            { icon: React.createElement(SiRedis, { color: "#DC382D" }), name: 'Redis', level: 'Intermediate' },
            { icon: React.createElement(FaGitlab, { color: "#fc6d26" }), name: 'GitLab', level: 'DevOps' },
            { icon: React.createElement(FaCheckCircle, { color: "#2ecc71" }), name: 'Quality engineering', level: 'Delivery' },
        ],
    },
    {
        category: 'Security, Reliability & Governance',
        skills: [
            { icon: React.createElement(FaLock, { color: "#2563eb" }), name: 'Identity & access', level: 'Security' },
            { icon: React.createElement(FaShieldAlt, { color: "#0f766e" }), name: 'Tenable', level: 'Security' },
            { icon: React.createElement(SiSplunk, { color: "#000" }), name: 'Enhanced monitoring', level: 'Observability' },
            { icon: React.createElement(SiGithubactions, { color: "#2088ff" }), name: 'GitHub Actions', level: 'Automation' },
            { icon: React.createElement(SiAnsible, { color: "#EE0000" }), name: 'Ansible', level: 'Automation' },
            { icon: React.createElement(SiRundeck, { color: "#4C4C4C" }), name: 'Rundeck', level: 'Automation' },
        ],
    },
    {
        category: 'Collaborative Tools & Ecosystem',
        skills: [
            { icon: React.createElement(FaGitAlt, { color: "#f34f29" }), name: 'Git' },
            { icon: React.createElement(FaCloud, { color: "#0078d4" }), name: 'Airtable' },
            { icon: React.createElement(FaChartBar, { color: "#17a2b8" }), name: 'Smartsheet' },
            { icon: React.createElement(SiFigma, { color: "#F24E1E" }), name: 'Figma' },
            { icon: React.createElement(SiGoogleanalytics, { color: "#EA5234" }), name: 'Google Analytics' },
            { icon: React.createElement(SiAuth0, { color: "#A2C2E0" }), name: 'Auth0' },
            { icon: React.createElement(SiVsco, { color: "#007acc" }), name: 'VS Code' },
        ],
    },
];
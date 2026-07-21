
"use client";
import React from 'react';
import {
    FaReact, FaNodeJs, FaAws, FaDocker, FaJenkins, FaGitlab, FaAngular, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare,
    FaGitAlt, FaCloud, FaChartBar, FaUniversalAccess, FaLock, FaExchangeAlt, FaEye, FaCheckCircle, FaUsers, FaProjectDiagram, FaShieldAlt, FaRobot, FaChartLine
} from 'react-icons/fa';
import {
    SiKubernetes, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiGoogleanalytics, SiSpring, SiNextdotjs, SiAnsible, SiExpress,
    SiAuth0, SiDatadog, SiSplunk, SiTypescript, SiRedux, SiSass, SiVsco, SiGithubactions, SiFigma, SiApachekafka, SiRundeck
} from 'react-icons/si';

export const skillGroups = [
    {
        category: 'Leadership, Strategy, AI & Data-Driven Innovation',
        skills: [
            { icon: React.createElement(FaUsers, { color: "var(--accent)" }), name: 'Led high-performing teams', level: 'Leadership' },
            { icon: React.createElement(FaChartLine, { color: "var(--accent)" }), name: 'Driving technical roadmaps', level: 'Strategy' },
            { icon: React.createElement(FaShieldAlt, { color: "var(--accent)" }), name: 'Mentorship and stakeholder alignment', level: 'Leadership' },
            { icon: React.createElement(FaRobot, { color: "var(--accent)" }), name: 'Enterprise AI adoption', level: 'AI' },
            { icon: React.createElement(FaProjectDiagram, { color: "var(--accent)" }), name: 'Predictive analytics', level: 'Data' },
        ],
    },
    {
        category: 'Technical Foundation & Ecosystems',
        skills: [
            { icon: React.createElement(FaReact, { color: "#61dafb" }), name: 'React', level: 'Expert' },
            { icon: React.createElement(SiNextdotjs, { color: "#000" }), name: 'Next.js', level: 'Expert' },
            { icon: React.createElement(FaNodeJs, { color: "#3c873a" }), name: 'Node.js', level: 'Expert' },
            { icon: React.createElement(FaPython, { color: "#3776ab" }), name: 'Python', level: 'Advanced' },
            { icon: React.createElement(FaAws, { color: "#ff9900" }), name: 'AWS/Azure', level: 'Cloud' },
            { icon: React.createElement(SiApachekafka, { color: "#231F20" }), name: 'Kafka', level: 'Event-driven' },
            { icon: React.createElement(SiDatadog, { color: "#632ca6" }), name: 'Datadog', level: 'Observability' },
            { icon: React.createElement(FaUniversalAccess, { color: "#007bff" }), name: 'Accessibility', level: 'Advanced' },
        ],
    },
    {
        category: 'Architecture & Cloud Modernization',
        skills: [
            { icon: React.createElement(FaAws, { color: "#ff9900" }), name: 'Cloud-native microservices' },
            { icon: React.createElement(FaDocker, { color: "#2496ed" }), name: 'Event-driven systems' },
        ],
    },
    {
        category: 'Development & Integrations',
        skills: [
            { icon: React.createElement(FaNodeJs, { color: "#3c873a" }), name: 'Node.js' },
            { icon: React.createElement(FaPython, { color: "#3776ab" }), name: 'Python' },
            { icon: React.createElement(SiExpress, { color: "#000" }), name: 'REST/GraphQL APIs' },
            { icon: React.createElement(SiKubernetes, { color: "#326ce5" }), name: 'Kubernetes' },
        ],
    },
    {
        category: 'Reliability, Observability & Security',
        skills: [
            { icon: React.createElement(SiDatadog, { color: "#632ca6" }), name: 'CI/CD pipelines' },
            { icon: React.createElement(SiSplunk, { color: "#000" }), name: 'Enhanced monitoring' },
        ],
    },
    {
        category: 'Tools & Ecosystem',
        skills: [
            { icon: React.createElement(FaGitAlt, { color: "#f34f29" }), name: 'Git' },
            { icon: React.createElement(FaDocker, { color: "#2496ed" }), name: 'Docker' },
            { icon: React.createElement(FaJenkins, { color: "#d24939" }), name: 'Jenkins' },
            { icon: React.createElement(SiGithubactions, { color: "#2088ff" }), name: 'GitHub Actions' },
            { icon: React.createElement(SiFigma, { color: "#F24E1E" }), name: 'Figma' },
            { icon: React.createElement(SiApachekafka, { color: "#231F20" }), name: 'Apache Kafka' },
            { icon: React.createElement(SiRundeck, { color: "#4C4C4C" }), name: 'Rundeck' },
            { icon: React.createElement(SiAnsible, { color: "#EE0000" }), name: 'Ansible' },
            { icon: React.createElement(SiSpring, { color: "#6DB33F" }), name: 'Spring' },
            { icon: React.createElement(SiGoogleanalytics, { color: "#EA5234" }), name: 'Google Analytics' },
            { icon: React.createElement(SiAuth0, { color: "#A2C2E0" }), name: 'Auth0' },
            { icon: React.createElement(SiVsco, { color: "#007acc" }), name: 'VS Code' },
        ],
    },
    {
        category: 'Key Projects and Accomplishments',
        skills: [
            { icon: React.createElement(FaChartBar, { color: "#17a2b8" }), name: 'Modernized Legacy Systems' },
            { icon: React.createElement(FaExchangeAlt, { color: "#007bff" }), name: 'API & Cloud Migration' },
            { icon: React.createElement(FaEye, { color: "#17a2b8" }), name: 'Enterprise Monitoring' },
        ],
    }
]; 
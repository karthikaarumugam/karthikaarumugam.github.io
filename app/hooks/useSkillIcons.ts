import {
    FaReact, FaNodeJs, FaAws, FaDocker, FaJenkins, FaGitlab, FaAngular, FaPython,
    FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaCloud, FaChartBar, FaUsers, FaUniversalAccess, FaLock, FaExchangeAlt, FaEye
} from 'react-icons/fa';
import {
    SiKubernetes, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiGoogleanalytics, SiSpring, SiNextdotjs, SiAnsible, SiExpress, SiAuth0, SiDatadog, SiSplunk, SiTypescript, SiRedux, SiSass, SiVsco, SiGithubactions
} from 'react-icons/si';

import { IconType } from 'react-icons';
import React from 'react';

export interface Skill {
    name: string;
    icon: string;
    color: string;
}

const iconMap: Record<string, IconType> = {
    FaReact,
    SiNextdotjs,
    FaAngular,
    FaJsSquare,
    SiTypescript,
    FaHtml5,
    FaCss3Alt,
    SiSass,
    SiRedux,
    FaUniversalAccess,
    FaNodeJs,
    SiExpress,
    FaPython,
    SiSpring,
    FaAws,
    FaCloud,
    SiKubernetes,
    FaDocker,
    FaJenkins,
    FaGitlab,
    SiAnsible,
    FaGitAlt,
    SiGithubactions,
    FaDatabase,
    SiPostgresql,
    SiMongodb,
    SiMysql,
    SiRedis,
    SiGoogleanalytics,
    FaChartBar,
    FaLock,
    SiAuth0,
    FaEye,
    SiDatadog,
    SiSplunk,
    FaExchangeAlt,
    FaUsers,
    SiVsco
};

export function useSkillIcons(skills: Skill[]) {
    const skillIcons = skills.map(skill => {
        const Icon = iconMap[skill.icon];
        return {
            ...skill,
            IconComponent: Icon !== undefined ? React.createElement(Icon, { color: skill.color }) : null
        };
    });
    return skillIcons;
}
/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./experience.module.scss";

const experiences = [
    {
        role: 'Product Engineering Manager',
        company: 'Hyatt Hotels Corporation',
        period: 'Oct 2017 - Present',
        logo: 'https://media.licdn.com/dms/image/v2/D560BAQHZVNCUIfytag/company-logo_100_100/company-logo_100_100/0/1719848403661/hyatt_logo?e=1752105600&v=beta&t=1sJHRk1Gws-d_g3B1NMUkRtUxJ3mufw2Nqsjz9L2QoY',
        shortDescription: 'Leading a team of engineers to develop innovative solutions for the hospitality industry.',
        description: [
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
        description: [
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
        description: [
            '<strong>Global Content Delivery:</strong> Oversaw multilingual content deployment for 32+ locales, ensuring timely releases and compliance with accessibility and SEO standards.',
            '<strong>Analytics & Accessibility:</strong> Integrated Omniture and Google Analytics for performance tracking; enforced WCAG compliance to enhance digital usability across devices.',
            '<strong>Brand Launches:</strong> Designed and launched new digital brands, managing end-to-end development and deployment.'
        ],
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className={styles.section}>
            <h2>Experience</h2>
            <div className={styles.experienceList}>
                {experiences.map((exp, idx) => (
                    <div className={styles.experienceItem} key={idx}>
                        <div className={styles.experienceHeader}>
                            {exp.logo && (
                                <img
                                    src={exp.logo}
                                    alt={`${exp.company} logo`}
                                    className={styles.companyLogo}
                                    width={40}
                                    height={40}
                                    loading="lazy"
                                />
                            )}
                            <div>
                                <h3>
                                    {exp.role} <span>@ {exp.company}</span>{" "}
                                    {exp.client && (
                                        <span className={styles.clientCompany}>
                                            Client: {exp.client}
                                        </span>
                                    )}
                                </h3>
                                <p className={styles.period}>{exp.period}</p>
                            </div>
                        </div>
                        {exp.shortDescription && (
                            <p className={styles.shortDescription}>{exp.shortDescription}</p>
                        )}
                        <ul>
                            {exp.description.map((desc, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: desc }} />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
"use client"
import { useInView } from "../hooks/useInView";
import styles from "../page.module.scss";

export default function ProjectsSection() {
    const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 });
    return (
        <section id="projects" ref={ref} className={`${styles.section} ${inView ? styles.visible : ""}`}>
            <div className={styles.sectionContent}>
                <h2>Projects</h2>
                <ul >
                    <li>
                        <p>Modernized legacy hospitality systems by migrating from Node.js to React/Next.js, boosting scalability and user experience. Led cross-functional teams through seamless transitions, enhancing maintainability and feature delivery.</p>
                    </li>
                    <li>
                        <p>Directed Opera V5 to OHIP cloud migration, enabling robust API integrations and real-time data exchange across platforms. Improved system reliability and positioned operations for future technology adoption.</p>
                    </li>
                    <li>
                        <p>Implemented enterprise-wide monitoring by migrating from Splunk to Datadog, developing real-time dashboards and alerts. Reduced incident response times by 30% and empowered teams with actionable insights.</p>
                    </li>
                    <li>
                        <p>Built host-facing dashboards to automate operational workflows, streamlining pre-arrival, group, and F&amp;B processes. Reduced manual workload by 20% and elevated guest service efficiency.</p>
                    </li>
                    <li>
                        <p>Enhanced security and compliance by integrating Azure AD MFA and enforcing PCI/PII standards across applications. Strengthened enterprise security posture and ensured regulatory alignment.</p>
                    </li>
                    <li>
                        <p>Optimized CI/CD pipelines by migrating from Bitbucket/Jenkins to GitLab, automating deployments and improving release reliability. Accelerated deployment cycles and increased engineering productivity.</p>
                    </li>
                    <li>
                        <p>Launched new digital brands and managed large-scale multilingual website migrations for Hasbro, ensuring accessibility and SEO compliance. Improved global reach and digital asset performance.</p>
                    </li>
                    <li>
                        <p>Redesigned Tracfone’s web platforms from IBM Portal to Angular SPA, integrating analytics for better engagement. Improved site performance, user experience, and reduced regression testing time by 40%.</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}
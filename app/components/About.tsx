"use client"
import { useInView } from "../hooks/useInView";
import styles from "../page.module.scss";

export default function AboutSection() {
    const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 });

    return (
        <section id="about" ref={ref} className={`${styles.section} ${inView ? styles.visible : ""}`}>
            <div className={styles.sectionContent}>
                <h2>About</h2>

                <p>Hi, I’m Karthika! I’m a Product Engineering Manager at Hyatt, passionate about <strong>AI, cloud technologies</strong>, and building <strong>secure, scalable systems</strong> that drive <strong>digital transformation</strong>.
                    With <strong>13 years of experience</strong> in software development and leadership, I’ve led teams to <strong>modernize legacy systems</strong>, <strong>scale enterprise applications</strong>, and align <strong>technology strategy</strong> with business goals.
                    My expertise spans <strong>cloud-native architectures, DevOps, Agile development, system architecture, API integrations, CI/CD automation</strong>, and <strong>cloud migrations</strong>.
                    I’ve delivered <strong>high-impact solutions</strong> across hospitality, travel, and enterprise tech, always focused on <strong>operational efficiency, security compliance</strong>, and <strong>enhancing user experiences</strong>.</p>
                <p>I’m passionate about <strong>mentoring engineers</strong>, <strong>streamlining processes</strong> and building spaces where <strong>innovation and collaboration thrive</strong>. I believe the best results come from empowering diverse teams and creating a culture of continuous improvement.
                    Outside of work, you’ll find me exploring <strong>emerging technologies</strong>, contributing to <strong>open-source projects</strong>, traveling to new places, and indulging in crafts that spark my creativity.
                    I’m excited to keep learning and help teams harness the power of <strong>AI and cloud</strong> to shape what’s next.</p>

            </div>
        </section>
    );
}
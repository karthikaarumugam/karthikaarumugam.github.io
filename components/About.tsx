"use client"
import { useInView } from "../hooks/useInView";
import styles from "../styles/index.module.scss";
import info from '../_data/info.json';

const impactMetrics = [
    { value: '1,200+', label: 'Global locations scaled' },
    { value: '13+', label: 'Engineers mentored & managed' },
    { value: '15+', label: 'Years of technology leadership' },
];

export default function AboutSection() {
    const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 });
    const philosophyText = (info.about_me.hobbies || '')
        .replace(/<br\s*\/?>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    return (
        <section id="about" ref={ref} className={`${styles.section} ${inView ? styles.visible : ""}`}>
            <div className={styles.sectionContent}>
                <div className={styles.metricsBanner}>
                    {impactMetrics.map((metric) => (
                        <div key={metric.label} className={styles.metricCard}>
                            <div className={styles.metricValue}>{metric.value}</div>
                            <div className={styles.metricLabel}>{metric.label}</div>
                        </div>
                    ))}
                </div>

                <div className={styles.summaryBlock}>
                    <h4>About Me</h4>
                    {info.about_me.summary.map((para: string, idx: number) => (
                        <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
                    ))}
                </div>

                {info.about_me.background && (
                    <div>
                        {info.about_me.background.map((para: string, idx: number) => (
                            <p key={`bg-${idx}`} dangerouslySetInnerHTML={{ __html: para }} />
                        ))}
                    </div>
                )}

                {philosophyText && (
                    <div className={styles.philosophyCard}>
                        <div className={styles.philosophyVisual}>
                            <div className={styles.philosophyTextBlock}>
                                <h4>Leadership Philosophy</h4>
                                <blockquote className={styles.quoteBlock}>
                                    “{philosophyText}”
                                </blockquote>
                            </div>
                        </div>
                    </div>
                )}

                {info.leadership?.testimonials?.length ? (
                    <div className={styles.testimonialsSection}>
                        <h4>What Teams Say</h4>
                        <div className={styles.testimonialsGrid}>
                            {info.leadership.testimonials.map((item: { name: string; feedback: string }, idx: number) => (
                                <div key={`${item.name}-${idx}`} className={styles.testimonialCard}>
                                    <p>“{item.feedback}”</p>
                                    <span>— {item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null}

                <div className={styles.insightsSection}>
                    <h4>Insights & Perspectives</h4>
                    <div className={styles.insightsGrid}>
                        <a className={styles.insightCard} href="https://www.linkedin.com/in/karthikaa/" target="_blank" rel="noopener noreferrer">
                            <strong>From AI Adoption to Team Enablement</strong>
                            <span>How enterprise AI tooling, governance, and developer workflows can scale without losing operational rigor.</span>
                        </a>
                        <a className={styles.insightCard} href="https://www.linkedin.com/in/karthikaa/" target="_blank" rel="noopener noreferrer">
                            <strong>Modernizing Legacy Platforms at Scale</strong>
                            <span>Lessons from consolidating guest services across 1,200+ locations and simplifying critical operations.</span>
                        </a>
                        <a className={styles.insightCard} href="https://www.linkedin.com/in/karthikaa/" target="_blank" rel="noopener noreferrer">
                            <strong>Leading Through Change</strong>
                            <span>Practical approaches to mentorship, team growth, and building resilient engineering cultures.</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
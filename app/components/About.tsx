"use client"
import { useInView } from "../hooks/useInView";
import styles from "../page.module.scss";
import info from '../../_data/info.json';

export default function AboutSection() {
    const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 });

    return (
        <section id="about" ref={ref} className={`${styles.section} ${inView ? styles.visible : ""}`}>
            <div className={styles.sectionContent}>
                {/* <h2>About</h2> */}
                <h3 className={styles.subtitle}>{info.hero.title}</h3>
                <h4 className={styles.subtitle}>{info.hero.subtitle}</h4>
                {info.about_me.summary.map((para: string, idx: number) => (
                    <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
                ))}

                {/* Background Subsection */}
                {info.about_me.background && (
                    <div>
                        <h4>Background</h4>
                        {info.about_me.background.map((para: string, idx: number) => (
                            <p key={`bg-${idx}`} dangerouslySetInnerHTML={{ __html: para }} />
                        ))}
                    </div>
                )}

                {/* Hobbies Subsection */}
                {info.about_me.hobbies && (
                    <div>
                        <h4>Hobbies</h4>
                        <p key='hobbies' dangerouslySetInnerHTML={{ __html: info.about_me.hobbies }} />
                    </div>
                )}
            </div>
        </section>
    );
}
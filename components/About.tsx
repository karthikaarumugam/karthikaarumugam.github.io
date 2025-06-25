"use client"
import { useInView } from "../hooks/useInView";
import styles from "../styles/index.module.scss";
import info from '../_data/info.json';

export default function AboutSection() {
    const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 });

    return (
        <section id="about" ref={ref} className={`${styles.section} ${inView ? styles.visible : ""}`}>
            <div className={styles.sectionContent}>
                {info.about_me.summary.map((para: string, idx: number) => (
                    <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
                ))}

                {info.about_me.background && (
                    <div>
                        <h4>Background</h4>
                        {info.about_me.background.map((para: string, idx: number) => (
                            <p key={`bg-${idx}`} dangerouslySetInnerHTML={{ __html: para }} />
                        ))}
                    </div>
                )}

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
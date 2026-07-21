"use client";
import React, { useState, Suspense } from "react";
import { useInView } from "../hooks/useInView";
import pageStyles from "../styles/index.module.scss";
import styles from "./experience.module.scss";
import experiences from "../_data/career.json";

const LazyDetails = React.lazy(() => import("./ExperienceDetails"));

export default function ExperienceSection() {
    const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 });
    const [selected, setSelected] = useState<number | null>(null);

    const toggle = (i: number) => {
        setSelected((prev) => (prev === i ? null : i));
    };

    const onKeyDown = (e: React.KeyboardEvent, i: number) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle(i);
        }
    };

    return (
        <section id="experience" ref={ref} className={`${pageStyles.section} ${inView ? styles.visible : ""}`}>
            <div className={pageStyles.sectionContent}>
                <h2>Experience</h2>

                <div className={styles.pills} role="tablist" aria-label="Experience roles">
                    {experiences.map((exp, idx) => {
                        const isSelected = selected === idx;
                        return (
                            <div key={idx} className={styles.pillRow}>
                                <button
                                    id={`exp-pill-${idx}`}
                                    className={`${styles.pill} ${isSelected ? styles.pillActive : ""}`}
                                    onClick={() => toggle(idx)}
                                    onKeyDown={(e) => onKeyDown(e, idx)}
                                    aria-expanded={isSelected}
                                    aria-controls={`exp-details-${idx}`}
                                >
                                    <div className={styles.pillContent}>
                                        <div className={styles.pillRole}>
                                            <span className={styles.pillTitle}>{exp.role}</span>
                                            <span className={styles.pillCompany}> | {exp.company}</span>
                                            {exp.client && <span className={styles.clientCompany}> • Client: {exp.client}</span>}
                                        </div>
                                        {exp.scope && <div className={styles.scopeBadge}>{exp.scope}</div>}
                                        {exp.period && <div className={styles.period}>{exp.period}</div>}
                                        {exp.shortDescription && <div className={styles.pillDesc}>{exp.shortDescription}</div>}
                                    </div>
                                    {exp.period && <div className={styles.period}>{exp.period}</div>}
                                </button>

                                {/* Inline accordion detail under the pill */}
                                <div
                                    id={`exp-details-${idx}`}
                                    role="region"
                                    aria-labelledby={`exp-pill-${idx}`}
                                    className={`${styles.accordion} ${isSelected ? styles.accordionOpen : ""}`}
                                    aria-hidden={!isSelected}
                                >
                                    {isSelected && (
                                        <Suspense fallback={<div className={styles.loading}>Loading details…</div>}>
                                            <LazyDetails
                                                id={`exp-details-${idx}`}
                                                labelledBy={`exp-pill-${idx}`}
                                                onClose={() => {
                                                    // close and return focus to the originating pill
                                                    setSelected(null);
                                                    const btn = document.getElementById(`exp-pill-${idx}`) as HTMLButtonElement | null;
                                                    if (btn) btn.focus();
                                                }}
                                                exp={experiences[idx]}
                                            />
                                        </Suspense>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
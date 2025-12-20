"use client"
import React from "react";
import { useInView } from "../hooks/useInView";
import styles from "../styles/index.module.scss";
import projStyles from "./projects.module.scss";
import projects from '../_data/projects.json';

export default function ProjectsSection() {
    const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 });
    const [selected, setSelected] = React.useState(0); // first open by default

    const onKeyDown = (e: React.KeyboardEvent, idx: number) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setSelected(idx);
        }
        // support arrow navigation
        if (e.key === "ArrowRight") {
            e.preventDefault();
            setSelected((s) => Math.min(projects.length - 1, s + 1));
        }
        if (e.key === "ArrowLeft") {
            e.preventDefault();
            setSelected((s) => Math.max(0, s - 1));
        }
    };

    return (
        <section id="projects" ref={ref} className={`${styles.section} ${inView ? styles.visible : ""}`}>
            <div className={styles.sectionContent}>
                <h2>Projects</h2>

                <div className={projStyles.tabs} role="tablist" aria-label="Selected projects">
                    {projects.map((proj, idx) => {
                        const isSelected = selected === idx;
                        return (
                            <button
                                key={idx}
                                id={`proj-tab-${idx}`}
                                role="tab"
                                aria-selected={isSelected}
                                aria-controls={`proj-panel-${idx}`}
                                className={`${projStyles.tab} ${isSelected ? projStyles.tabActive : ""}`}
                                onClick={() => setSelected(idx)}
                                onKeyDown={(e) => onKeyDown(e, idx)}
                                tabIndex={isSelected ? 0 : -1}
                            >
                                {proj.title}
                            </button>
                        );
                    })}
                </div>

                <div className={projStyles.panelWrap}>
                    {projects.map((proj, idx) => (
                        <div
                            key={idx}
                            id={`proj-panel-${idx}`}
                            role="tabpanel"
                            aria-labelledby={`proj-tab-${idx}`}
                            className={`${projStyles.panel} ${selected === idx ? projStyles.panelOpen : ""}`}
                            hidden={selected !== idx}
                        >
                            <h3 className={projStyles.panelTitle}>{proj.title}</h3>
                            <div className={projStyles.projectDetails}>
                                {proj.keywords && (
                                    <div className={projStyles.keywords}>
                                        {proj.keywords.map((k: string) => (
                                            <span key={k} className={projStyles.keyword}>{k}</span>
                                        ))}
                                    </div>
                                )}
                                {proj.context && <p><strong>Context:</strong> {proj.context}</p>}
                                {proj.why && <p><strong>Why:</strong> {proj.why}</p>}
                                {proj.how && <p><strong>How:</strong> {proj.how}</p>}
                                {proj.results && <p><strong>Results:</strong> {proj.results}</p>}
                                {proj.tags && (
                                    <div className={projStyles.tags} aria-hidden={false}>
                                        {proj.tags.map((t: string) => (
                                            <span key={t} className={projStyles.tag}>{t}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
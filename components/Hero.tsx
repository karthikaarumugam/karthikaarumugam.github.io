"use client";
import React from "react";
import styles from "../styles/index.module.scss";
import info from "../_data/info.json";

export default function Hero() {
    return (
        <section id="hero" className={`${styles.section} hero`} aria-label="Hero">
            <div className={styles.sectionContent}>
                <h1>{info.hero.title || "Senior Product Engineering Leader"}</h1>
                <h2>{info.hero.subTitle || "AI‑powered digital transformation | Driving digital transformation with precision and passion"}</h2>
                <p className="lead">{info.about_me?.resumeSummary || info.about_me?.summary?.[0]}</p>
                <div className="tags">
                    {(info.hero.tags || ["Cloud-native platforms", "Modern frontend & UX", "AI in engineering workflows"]).map((t, i) => (
                        <span className="tag" key={i}>{t}</span>
                    ))}
                </div>
                <div className="cta-group" style={{ marginTop: 16 }}>
                    <a className="btn btn-primary" href="#projects">View selected work</a>
                    <a className="btn btn-outline" href="/resume">Download résumé</a>
                    <a className="btn" href={`https://${info.contact.linkedin}`} target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
                </div>
            </div>
        </section>
    );
}
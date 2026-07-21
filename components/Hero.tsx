"use client";
import React from "react";
import styles from "../styles/index.module.scss";
import info from "../_data/info.json";

export default function Hero() {
    return (
        <section id="hero" className={`${styles.section} hero`} aria-label="Hero">
            <div className={styles.sectionContent}>
                <div className="heroContent">
                    <div className="tag">Leadership • Strategy • AI</div>
                    <p className="lead" dangerouslySetInnerHTML={{ __html: info.about_me?.resumeSummary || info.about_me?.summary?.[0] }} />
                    <div className="cta-group">
                        <a className="btn btn-primary" href="#experience">View Leadership Impact</a>
                        <a className="btn btn-outline" href={`https://${info.contact.linkedin}`} target="_blank" rel="noopener noreferrer">Let’s Connect</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
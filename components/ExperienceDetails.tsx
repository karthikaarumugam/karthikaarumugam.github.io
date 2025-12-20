"use client";
import React from "react";
import Image from "next/image";
import styles from "./experience.module.scss";

type Exp = {
    role: string;
    company?: string;
    client?: string;
    period?: string;
    logo?: string;
    shortDescription?: string;
    tools?: string[];
    responsibilities?: string[];
};

export default function ExperienceDetails({ id, labelledBy, exp, onClose }: { id: string; labelledBy?: string; exp: Exp; onClose: () => void }) {
    const panelRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        if (panelRef.current) {
            panelRef.current.focus();
        }
    }, []);

    return (
        <div id={id} ref={panelRef} className={styles.detailsPanel} role="tabpanel" aria-labelledby={labelledBy} tabIndex={-1}>
            <div className={styles.detailsHeader}>
                {exp.tools && (
                    <div className={styles.tools} aria-hidden={false}>
                        {exp.tools.map((t) => (
                            <span key={t} className={styles.toolBadge}>{t}</span>
                        ))}
                    </div>
                )}
                <button className={styles.closeBtn} onClick={onClose} aria-label="Close details">Close</button>
            </div>


            {exp.responsibilities && (
                <ul className={styles.responsibilities}>
                    {exp.responsibilities.map((r, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: r }} />
                    ))}
                </ul>
            )}
        </div>
    );
}

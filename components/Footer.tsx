"use client";
import styles from "./footer.module.scss";
import info from "../_data/info.json";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerSocial}>
                <a href={`https://${info.contact.github}`} style={{ color: "#24292f" }} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                <a href={`https://${info.contact.linkedin}`} style={{ color: "#0077b5" }} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href={`https://${info.contact.portfolio}`} style={{ color: "#1a237e" }} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaGlobe /></a>
                <a href={`mailto:${info.contact.email}`} style={{ color: "#ea4335" }} aria-label="Email"><FaEnvelope /></a>
            </div>
            <span className={styles.footerContent}>© {new Date().getFullYear()} {info.hero.name}. All rights reserved.<br /></span>
            <span className={styles.footerContent}>Developed with ❤️ and little help from GitHub Copilot.</span>
        </footer>
    );
}
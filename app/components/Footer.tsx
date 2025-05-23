"use client";
import styles from "./footer.module.scss";
import info from "../../_data/info.json";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerSocial}>
                <a href={info.contact.github} style={{ color: "#24292f" }} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href={info.contact.linkedin} style={{ color: "#0077b5" }} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href={`mailto:${info.contact.email}`} style={{ color: "#ea4335" }} aria-label="Email">
                    <FaEnvelope />
                </a>
            </div>
            © {new Date().getFullYear()} {info.contact.name}. All rights reserved.<br />
            <span>Developed with ❤️ and little help from GitHub Copilot.</span>
        </footer>
    );
}
"use client";
import styles from "./footer.module.scss";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerSocial}>
                <a href="https://github.com/karthikaarumugam" style={{ color: "#24292f" }} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/karthikaa" style={{ color: "#0077b5" }} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="mailto:karthika_a2006@live.com" style={{ color: "#ea4335" }} aria-label="Email">
                    <FaEnvelope />
                </a>
            </div>
            © {new Date().getFullYear()} Karthika Arumugam. All rights reserved.<br />
            <span>Developed with ❤️ and little help from GitHub Copilot.</span>
        </footer>
    );
}
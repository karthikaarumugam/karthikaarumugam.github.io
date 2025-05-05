"use client";
import styles from "../page.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            © {new Date().getFullYear()} Karthika Arumugam. All rights reserved.<br />
            <span>Developed with ❤️ and GitHub Copilot.</span>
        </footer>
    );
}
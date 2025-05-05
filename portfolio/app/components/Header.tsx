"use client";
import styles from "./header.module.scss";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const handleNavClick = (href: string) => {
        setMenuOpen(false);
        if (href.startsWith("#")) {
            if (pathname !== "/") {
                router.push(`/${href}`);
            } else {
                const el = document.getElementById(href.replace("#", ""));
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                }
            }
        } else {
            router.push(href);
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.brandArea}>
                    <div>
                        <h1 className={styles.title}>Karthika Arumugam</h1>
                        <p className={styles.subtitle}>Technology Leader</p>
                    </div>
                    <div className={styles.headerSocial}>
                        <a href="https://github.com/karthikaarumugam" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/karthikaa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:karthika_a2006@live.com" aria-label="Email">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
                <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={e => {
                                        e.preventDefault();
                                        handleNavClick(link.href);
                                    }}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button
                    className={styles.menuBtn}
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label="Toggle navigation"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </header>
    );
}
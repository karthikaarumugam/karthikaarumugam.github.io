"use client";
import styles from "./header.module.scss";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import info from "../../_data/info.json";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 1200);
    const pathname = usePathname();
    const router = useRouter();
    const [dark, setDark] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("dark", dark);
    }, [dark]);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
                        <h1 className={styles.title}>{info.hero.name}</h1>
                        {/* <p className={styles.subtitle}>{info.hero.title}</p> */}
                        {/* <p className={styles.subtitle}>{info.hero.subtitle}</p> */}
                    </div>
                </div>
                <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
                    <ul>
                        {navLinks.map((link, idx) => (
                            <li
                                key={link.href}
                                style={{
                                    transition: "transform 0.3s cubic-bezier(.4,2,.6,1), opacity 0.3s",
                                    transform: menuOpen ? "translateY(0)" : "translateY(-10px)",
                                    opacity: menuOpen || windowWidth > 900 ? 1 : 0,
                                    transitionDelay: menuOpen ? `${idx * 0.06 + 0.1}s` : "0s"
                                }}
                            >
                                <a
                                    href={link.href}
                                    onClick={e => {
                                        e.preventDefault();
                                        handleNavClick(link.href);
                                    }}
                                    className={styles.navLink}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li key={"toggle"} className={styles.toggle}>
                            <input
                                type="checkbox"
                                className={styles.toggleBtn}
                                onClick={() => setDark(d => !d)}
                                aria-label="Toggle dark mode"
                            />
                        </li>
                    </ul>
                </nav>
                <button
                    className={styles.menuBtn}
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </header>
    );
}
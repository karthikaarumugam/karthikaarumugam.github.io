"use client";
import styles from "./header.module.scss";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import info from "../_data/info.json";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const pathname = usePathname();
    const router = useRouter();

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Handle clicks outside nav
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        };
        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [menuOpen]);

    // Handle blur/focusout from nav container
    useEffect(() => {
        const handleFocusOut = (e: FocusEvent) => {
            if (navRef.current && !navRef.current.contains(e.relatedTarget as Node)) {
                setMenuOpen(false);
            }
        };
        if (menuOpen && navRef.current) {
            navRef.current.addEventListener("focusout", handleFocusOut);
            return () => navRef.current?.removeEventListener("focusout", handleFocusOut);
        }
    }, [menuOpen]);

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
        <header className={`${styles.header} site-nav`} role="navigation" aria-label="Primary">
            <div className="nav-inner">
                <div className={styles.headerContent}>
                    <div className={styles.brandArea}>
                        <div>
                            <h1 className={styles.title}>{info.hero.name}</h1>
                            <h2 className={styles.subtitle}>{info.hero.title}</h2>
                            <h3 className={styles.subtitle}>{info.hero.subTitle}</h3>
                        </div>
                        <Image
                            src="/pp.png"
                            alt="Profile Picture" className={styles.profile_pic} width={200} height={200}
                        />
                    </div>

                    <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`} ref={navRef}>
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.href}>
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
                        </ul>
                    </nav>

                    <button
                        className={styles.menuBtn}
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label="Toggle navigation"
                        aria-expanded={menuOpen}
                        type="button"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
        </header>
    );
}
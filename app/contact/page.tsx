"use client";
import styles from "../page.module.scss";
import thisStyles from "./page.module.scss";
import { useState } from "react";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        window.location.href = `mailto:karthika_a2006@live.com?subject=Message from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
        )}`;
        setSubmitted(true);
    };

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <section className={styles.section}>
                    <div className={styles.sectionContent}>
                        <h2 className={thisStyles.contactHeader}>
                            Get in touch <span className={thisStyles.wave}>👋</span>
                        </h2>
                        <p className={thisStyles.contactIntro}>
                            Drop a message, my inbox is always open!
                        </p>
                        <p className={thisStyles.contactSubtext}>
                            <span className={thisStyles.raven} role="img" aria-label="raven">🪶</span>
                            (unless the internet goes down, then just send a raven)
                        </p>
                        <p>
                            <a href="https://linkedin.com/in/karthikaa" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
                            <a href="https://github.com/karthikaarumugam" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </p>
                    </div>
                </section>

                <form onSubmit={handleSubmit} className={thisStyles.contactForm}>
                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            autoComplete="name"
                        />
                    </label>
                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                        />
                    </label>
                    <label>
                        Message
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                        />
                    </label>
                    <button type="submit">Send Email</button>
                    {submitted && (
                        <div style={{ color: "var(--color-primary)", marginTop: "1rem" }}>
                            Your email app should open. Thank you!
                        </div>
                    )}
                </form>
            </main>
        </div>
    );
}
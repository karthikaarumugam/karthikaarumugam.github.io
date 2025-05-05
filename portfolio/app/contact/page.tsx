import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../page.module.scss";

export default function ContactPage() {
    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.main}>
                <h2>Contact Me</h2>
                <p>
                    <a href="mailto:karthika_a2006@live.com">karthika_a2006@live.com</a>
                </p>
                <p>
                    <a href="https://linkedin.com/in/karthikaa" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
                    <a href="https://github.com/karthikaarumugam" target="_blank" rel="noopener noreferrer">GitHub</a>
                </p>
            </main>

            <Footer />
        </div>
    );
}
import styles from "./page.module.scss";
import Header from "./components/Header";
import AboutSection from "./components/About";
import ExperienceSection from "./components/Experience";
import ProjectsSection from "./components/Projects";
import SkillsSection from "./components/Skills";
import ContactSection from "./components/Contacts";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Karthika Arumugam. All rights reserved.<br />
        <span>Developed with ❤️ and GitHub Copilot.</span>
      </footer>
    </div>
  );
}
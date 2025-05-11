import styles from "./page.module.scss";
import Header from "./components/Header";
import AboutSection from "./components/About";
import ExperienceSection from "./components/Experience";
import ProjectsSection from "./components/Projects";
import SkillsSection from "./components/Skills";
import Education from "./components/Education";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.contentWithAside}>
        <main className={styles.main}>
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <Education />
        </main>
      </div>
      <Footer />
    </div>
  );
}
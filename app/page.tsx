import styles from "./page.module.scss";
import AboutSection from "./components/About";
import ExperienceSection from "./components/Experience";
import ProjectsSection from "./components/Projects";
import SkillsSection from "./components/Skills";
import Education from "./components/Education";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.contentWithAside}>
        <main className={styles.main}>
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <Education />
        </main>
      </div>
    </div>
  );
}
import Head from "next/head";
import styles from "../styles/index.module.scss";
import AboutSection from "../components/About";
import ExperienceSection from "../components/Experience";
import ProjectsSection from "../components/Projects";
import SkillsSection from "../components/Skills";
import Education from "../components/Education";
import HeroSection from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head><title>Portfolio - Karthika Arumugam</title></Head>
      <div className={styles.page}>
        <div className={styles.contentWithAside}>
          <main className={styles.main}>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <Education />
          </main>
        </div>
      </div>
    </>
  );
}
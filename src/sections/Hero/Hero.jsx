import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.info}>
        <p className={styles.eyebrow}>Recent BCIT CST graduate · GPA 92 · With Distinction</p>
        <h1>Yiming Zhu</h1>
        <h2>Junior software developer building practical full-stack applications.</h2>
        <p className={styles.description}>
          I recently completed BCIT&apos;s Computer Systems Technology program and
          build reliable software with Python, Flask, SQL, JavaScript, and React.
          My work includes a deployed ERP/CRM system, mobile and web applications,
          REST APIs, database-backed tools, and machine learning projects.
        </p>
        <div className={styles.actions}>
          <a className={styles.primaryAction} href="/Yiming_Zhu_Software_Developer_Resume_1p.pdf">
            Download resume
          </a>
          <a className={styles.secondaryAction} href="mailto:yiming168@gmail.com">
            Contact me
          </a>
        </div>
        <div className={styles.socials}>
          <a href="https://github.com/Yiming168" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/yiming168" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </div>
      </div>
      <div className={styles.visual}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Yiming Zhu"
        />
        <button
          className={styles.colorMode}
          type="button"
          aria-label="Toggle color mode"
          onClick={toggleTheme}
        >
          <img src={themeIcon} alt="" />
        </button>
        <div className={styles.profileCard}>
          <span>Focus</span>
          <strong>Junior Software Development</strong>
          <p>Python, Flask, SQL, React, APIs, application support</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

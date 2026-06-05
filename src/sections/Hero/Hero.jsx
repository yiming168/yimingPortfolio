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
        <p className={styles.eyebrow}>BCIT CST AI & ML, GPA 92 with Distinction</p>
        <h1>Yiming Zhu</h1>
        <h2>Software developer for biotech, healthcare systems, and business operations.</h2>
        <p className={styles.description}>
          I combine microbiology training, Canadian laboratory experience, and
          hands-on software development. My work spans Python and SQL systems,
          ERP workflows, AI/ML projects, and scientific data problems where
          clear records and reliable tools matter.
        </p>
        <div className={styles.actions}>
          <a className={styles.primaryAction} href="/Yiming_Zhu_Master_AI_BioTech_Business_Systems_Resume_20260604.docx">
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
          <strong>BioTech AI Systems</strong>
          <p>Python, SQL, ERP, LIMS-aware workflows, ML projects</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

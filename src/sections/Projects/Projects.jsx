import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <a href="#">
          <img className="hover" src={viberr} alt="Viberr logo" />
        </a>
      </div>
    </section>
  );
}

export default Projects;

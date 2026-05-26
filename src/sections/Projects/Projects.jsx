import styles from "./ProjectsStyles.module.css";
import erpSystem from "../../assets/erp-system.svg";
import lifeScienceApp from "../../assets/life-science-app.svg";
import HASHC from "../../assets/HASH.C.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Selected Work</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={erpSystem}
          link="https://github.com/yiming168"
          h3="Baifude ERP / CRM"
          p1="Flask, SQLAlchemy, MySQL"
          p2="Sales, shipment, contract, and payment workflows"
        />
        <ProjectCard
          src={lifeScienceApp}
          link="https://apps.apple.com/ca/app/granville-biomedical/id6753088064"
          h3="Granville Biomedical App"
          p1="Expo, React Native, Firebase"
          p2="Published app with admin quiz workflow"
        />
        <ProjectCard
          src={HASHC}
          link="https://github.com/Nivedpv2004/C-PROGRAMING"
          h3="Open Source C Module"
          p1="Hash table implementation"
          p2="Accepted contribution to public repository"
        />
      </div>
    </section>
  );
}

export default Projects;

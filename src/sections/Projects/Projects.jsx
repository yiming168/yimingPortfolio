import styles from "./ProjectsStyles.module.css";
import DocuMintHorizontal from "../../assets/DocuMintHorizontal.png";
import HASHC from "../../assets/HASH.C.png";
import rooveLogo from "../../assets/rooveLogo.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={DocuMintHorizontal}
          link="https://github.com/Donut11one/2800-202410-BBY02"
          h3="Documint"
          p1="Docs mantain and transfer"
          p2="Upload NFTs to Blockchain"
        />
        <ProjectCard
          src={rooveLogo}
          link="https://github.com/tommytty/1800_202410_BBY18"
          h3="ROOVE"
          p1="A matching app"
          p2="Find preferred roommates"
        />
        <ProjectCard
          src={HASHC}
          link="https://github.com/Nivedpv2004/C-PROGRAMING"
          h3="hash.c"
          p1="Hash table in C"
          p2="Contribute to opensource"
        />
      </div>
    </section>
  );
}

export default Projects;

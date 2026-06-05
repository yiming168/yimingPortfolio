import styles from "./ProjectsStyles.module.css";
import erpSystem from "../../assets/erp-system.svg";
import granvilleBiomedicalLogo from "../../assets/granville-biomedical-logo.png";
import tumorLearningCurve from "../../assets/tumor-learning-curve.png";
import insuranceClaimDistribution from "../../assets/insurance-claim-distribution.png";
import nutritionGradcamComparison from "../../assets/nutrition-gradcam-comparison.png";
import crossyThinkLogo from "../../assets/crossythink-logo.png";
import DocuMintHorizontal from "../../assets/DocuMintHorizontal.png";
import HASHC from "../../assets/HASH.C.png";
import rooveLogo from "../../assets/rooveLogo.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <div className={styles.header}>
        <p>Selected work</p>
        <h1 className="sectionTitle">Projects that connect software, science, and operations.</h1>
      </div>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={erpSystem}
          link="https://github.com/yiming168"
          h3="Baifude ERP/CRM"
          p1="Python, Flask, SQLAlchemy, and MySQL system for customer, product, contract, shipment, financial, and reporting workflows."
          p2="Built from real biotech ingredient operations, including practical contract timing and sales lifecycle edge cases."
          tags={["Python", "Flask", "MySQL", "ERP"]}
        />
        <ProjectCard
          src={tumorLearningCurve}
          link="https://github.com/yiming168/Tumor-Identification-with-Logistic-Regression"
          h3="Tumor Classification ML"
          p1="Gene-expression machine learning workflow for tumor versus normal sample classification."
          p2="Used preprocessing, feature selection, PCA, model comparison, ROC and precision-recall evaluation."
          tags={["Python", "scikit-learn", "PCA", "Bio data"]}
        />
        <ProjectCard
          src={insuranceClaimDistribution}
          link="#"
          h3="Insurance ML Competition"
          p1="First-place BCIT machine learning competition project using a two-stage XGBoost approach."
          p2="Optimized prediction and classification performance across large structured data with strong MAE and F1 results."
          tags={["XGBoost", "pandas", "F1", "MAE"]}
        />
        <ProjectCard
          src={nutritionGradcamComparison}
          link="#"
          h3="Human Nutrition Deficiency AI"
          p1="Computer vision project for recognizing visible nutrition-deficiency indicators from human skin and nail images."
          p2="Built a research demo with model training, Grad-CAM explainability, and a FastAPI plus React/Vite interface."
          tags={["PyTorch", "FastAPI", "React", "Jetson"]}
        />
        <ProjectCard
          src={granvilleBiomedicalLogo}
          link="https://apps.apple.com/ca/app/granville-biomedical/id6753088064"
          h3="Granville Biomedical App"
          p1="Cross-platform Expo and React Native mobile app plus Firebase-backed admin portal for a biomedical client."
          p2="Helped launch the client's first public mobile app on the Apple App Store and Google Play."
          tags={["React Native", "Expo", "Firebase", "Admin portal"]}
        />
        <ProjectCard
          src={crossyThinkLogo}
          link="https://crossythink-frontend.netlify.app/gameplay"
          h3="CrossyThink"
          p1="AI-powered crossword puzzle game with Flask REST backend, SQLAlchemy, MySQL, JWT authentication, and role-based access."
          p2="Experimented with local Mistral 7B hosting before switching to Gemini API after graduation."
          tags={["Flask", "MySQL", "JWT", "LLM"]}
        />
        <ProjectCard
          src={DocuMintHorizontal}
          link="https://documint.netlify.app"
          h3="Documint"
          p1="BCIT team NFT management app with React, Firestore, user guidance, validation, and concurrency testing."
          p2="Collaborated through Agile and Scrum while implementing account creation and login support."
          tags={["React", "Firestore", "Agile"]}
        />
        <ProjectCard
          src={rooveLogo}
          link="https://github.com/tommytty/1800_202410_BBY18"
          h3="Roove"
          p1="Roommate matching web app developed with Agile methods during BCIT."
          p2="Focused on practical matching workflows and collaborative delivery."
          tags={["Web app", "Agile", "Team project"]}
        />
        <ProjectCard
          link="https://mealplaniq.com"
          h3="MealPlanIQ"
          p1="Personalized meal planning app with one-click meal replacement and nutrient recalculation."
          p2="Integrated recipe data from Google Cloud Storage with Angular and Flask."
          tags={["Angular", "Flask", "GCS"]}
          imageNeeded
        />
        <ProjectCard
          src={HASHC}
          link="https://github.com/Nivedpv2004/C-PROGRAMING"
          h3="Open Source: hash.c"
          p1="Accepted open-source contribution adding a missing hash table implementation in C."
          p2="A compact example of low-level data structure work and GitHub collaboration."
          tags={["C", "GitHub", "Data structures"]}
        />
      </div>
    </section>
  );
}

export default Projects;

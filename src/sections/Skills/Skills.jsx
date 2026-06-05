import styles from "./SkillsStyles.module.css";

const skillGroups = [
  {
    title: "Software",
    items: ["Python", "Java", "JavaScript", "TypeScript", "C", "REST APIs"],
  },
  {
    title: "Systems",
    items: ["Flask", "React", "React Native", "Angular", "Node.js", "Firebase"],
  },
  {
    title: "Data and AI",
    items: ["SQL", "MySQL", "pandas", "NumPy", "scikit-learn", "XGBoost"],
  },
  {
    title: "Scientific and business context",
    items: [
      "Microbiology",
      "Food science",
      "Biotech ingredients",
      "ERP workflows",
      "LIMS-aware records",
      "Laboratory data",
    ],
  },
  {
    title: "Tools",
    items: ["Git/GitHub", "Docker", "Linux/Unix basics", "n8n", "Synology DSM", "VS Code"],
  },
];

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <div className={styles.header}>
        <p>Capabilities</p>
        <h1 className="sectionTitle">A practical stack for scientific systems.</h1>
      </div>
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <article className={styles.card} key={group.title}>
            <h3>{group.title}</h3>
            <div>
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;

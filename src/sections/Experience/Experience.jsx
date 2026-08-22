import styles from "./ExperienceStyles.module.css";

const experience = [
  {
    period: "Dec 2025 - Present",
    title: "ERP/CRM Developer",
    organization: "Wuxi Baifude Biotech · Contract, Remote",
    points: [
      "Built and deployed a full-stack ERP/CRM system with Python, Flask, SQLAlchemy, MySQL, Bootstrap, and Docker.",
      "Developed modules for orders, inventory, procurement, shipments, invoicing, payments, dashboards, and natural-language data queries.",
      "Automated inventory updates with product BOM formulas and documented a public demo with sample data.",
    ],
  },
  {
    period: "Feb - Oct 2022",
    title: "Laboratory Assistant",
    organization: "Bayer Crop Science, Winnipeg",
    points: [
      "Supported a haploid canola project and maintained accurate process and sample data.",
      "Coordinated daily team activities and followed structured procedures in a cross-functional Canadian workplace.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Experience</p>
        <h2>Recent development work and Canadian team experience.</h2>
      </div>
      <div className={styles.timeline}>
        {experience.map((item) => (
          <article className={styles.item} key={item.title}>
            <p className={styles.period}>{item.period}</p>
            <div>
              <h3>{item.title}</h3>
              <p className={styles.organization}>{item.organization}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;

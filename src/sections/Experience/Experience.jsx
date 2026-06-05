import styles from "./ExperienceStyles.module.css";

const experience = [
  {
    period: "2025 - Present",
    title: "Founder-built ERP/CRM system",
    organization: "Baifude Biotech business operations",
    points: [
      "Built a Python, Flask, SQLAlchemy, and MySQL system for customers, products, contracts, shipments, financial records, and reporting.",
      "Modeled practical workflows from real biotech ingredient sales, including ship-first and sign-later contract handling.",
      "Created a bridge between business operations, data structure, and user-facing support.",
    ],
  },
  {
    period: "Feb - Oct 2022",
    title: "Laboratory Assistant",
    organization: "Bayer Crop Science, Winnipeg",
    points: [
      "Supported a haploid canola project and contributed to accurate experiment data collection.",
      "Worked in a local Canadian laboratory environment with attention to procedure, traceability, and team communication.",
    ],
  },
  {
    period: "2013 - 2019",
    title: "Founder and Sales Manager",
    organization: "Wuxi Baifude Biotech",
    points: [
      "Built a niche biotech ingredient company serving stable customers in probiotic and functional ingredient markets.",
      "Combined scientific product knowledge with contracts, logistics, customer relationships, and operational problem solving.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Experience</p>
        <h2>Scientific context, business systems, and hands-on software.</h2>
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

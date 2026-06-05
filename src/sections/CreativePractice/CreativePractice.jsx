import styles from "./CreativePracticeStyles.module.css";

const studies = [
  {
    title: "Process and repetition",
    image: "/creative/painting-process.jpg",
    caption:
      "Acrylic practice from reference videos, using repeated studies to improve observation and composition.",
  },
  {
    title: "Landscape study",
    image: "/creative/mountain-lake-study.jpg",
    caption:
      "A mountain and lake study focused on structure, color layering, reflection, and patience with detail.",
  },
  {
    title: "Color and atmosphere",
    image: "/creative/ocean-atmosphere-study.jpg",
    caption:
      "A small exercise in mood, contrast, and visual restraint, completed during a short self-learning period.",
  },
];

function CreativePractice() {
  return (
    <section className={styles.container} aria-labelledby="creative-practice-title">
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Creative practice</p>
        <h2 id="creative-practice-title">A small practice in learning by doing.</h2>
        <p>
          In 2023, I started learning acrylic painting from YouTube and improved
          through short feedback loops: observe, decompose, try, compare, and
          iterate. It is not my main professional work, but it reflects how I
          approach unfamiliar systems.
        </p>
      </div>
      <div className={styles.gallery}>
        {studies.map((study) => (
          <article className={styles.card} key={study.title}>
            <img src={study.image} alt={`${study.title} by Yiming Zhu`} />
            <div>
              <h3>{study.title}</h3>
              <p>{study.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CreativePractice;

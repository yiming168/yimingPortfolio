import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.panel}>
        <p className={styles.eyebrow}>Contact</p>
        <h1>Available for junior software development and application support roles.</h1>
        <p className={styles.copy}>
          Based in Langley, BC. Open to Vancouver and Lower Mainland roles,
          Canadian remote work, and travel-heavy hybrid roles when relocation is
          not required.
        </p>
        <div className={styles.links}>
          <a href="mailto:yiming168@gmail.com">yiming168@gmail.com</a>
          <a href="tel:+14318871218">(431) 887-1218</a>
          <a href="https://www.linkedin.com/in/yiming168" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/Yiming168" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
      <form
        action="https://formsubmit.co/8f71f0316807dd744d1061e5dc01b924"
        method="POST"
        target="_blank"
      >
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;

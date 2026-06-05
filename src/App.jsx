import "./App.css";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import CreativePractice from "./sections/CreativePractice/CreativePractice";
import Experience from "./sections/Experience/Experience";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <CreativePractice />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

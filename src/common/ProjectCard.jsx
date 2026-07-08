import githubLight from "../assets/github-light.svg";
import githubDark from "../assets/github-dark.svg";
import { useTheme } from "./ThemeContext";

const ProjectCard = ({ src, link, h3, p1, p2, tags = [], imageNeeded, githubLink }) => {
  const { theme } = useTheme();
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <div className="projectCard">
      <a className="projectCardLink" href={link} target="_blank" rel="noreferrer">
        <div className="projectMedia hover">
          {src ? <img src={src} alt={`${h3} preview`} /> : null}
          {imageNeeded ? <span>Image needed</span> : null}
        </div>
        <div className="projectCopy">
          <h3>{h3}</h3>
          <p>{p1}</p>
          <p>{p2}</p>
          <div className="projectTags">
            {tags.map((tag) => (
              <small key={tag}>{tag}</small>
            ))}
          </div>
        </div>
      </a>
      {githubLink ? (
        <a
          className="projectGithubLink"
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          aria-label={`${h3} source on GitHub`}
        >
          <img src={githubIcon} alt="" />
        </a>
      ) : null}
    </div>
  );
};

export default ProjectCard;

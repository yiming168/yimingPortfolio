const ProjectCard = ({ src, link, h3, p1, p2, tags = [], imageNeeded }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
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
  );
};

export default ProjectCard;

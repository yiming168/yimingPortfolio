import React from "react";

const ProjectCard = ({ src, link, h3, p1, p2 }) => {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p1}</p>
      <p>{p2}</p>
    </a>
  );
};

export default ProjectCard;

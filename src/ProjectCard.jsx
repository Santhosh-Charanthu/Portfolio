import "../styles/ProjectCard.css";

export default function ProjectCard({
  title,
  description,
  techStack,
  imgSrc,
  link,
}) {
  return (
    <div className="parent">
      <div className="desc-card">
        <h2>{title}</h2>
        <p className="desc-para">{description}</p>
        <p>Tech Stack: [{techStack.join(", ")}]</p>
      </div>

      <div className="card">
        <img className="webImg" src={imgSrc} alt={title} loading="eager" />
        <div role="tooltip" id="help-tooltip" className="tool">
          <strong>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Explore
            </a>
          </strong>
        </div>
      </div>
    </div>
  );
}

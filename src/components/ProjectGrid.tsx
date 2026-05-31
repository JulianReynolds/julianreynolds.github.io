import { projects } from "../data/siteContent";

export function ProjectGrid() {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <article className="project-card" key={project.title}>
          <div className="project-visual" aria-hidden="true" />
          <div className="project-body">
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

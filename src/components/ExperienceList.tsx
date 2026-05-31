import { experience } from "../data/siteContent";

export function ExperienceList() {
  return (
    <div className="timeline">
      {experience.map((item, index) => (
        <article className="timeline-item" key={item.title}>
          <span className="timeline-number">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

import { profile } from "../data/siteContent";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="intro-line">{profile.location}</p>
        <h1>{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-text">
          A focused personal portfolio for job applications, project case
          studies, and a clear professional introduction.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            View Projects
          </a>
          <a className="button secondary" href="#contact">
            Contact
          </a>
        </div>
      </div>

      <div className="hero-card" aria-label="Portfolio preview">
        <div className="portrait-placeholder">Photo</div>
        <div>
          <p className="card-label">Portfolio Status</p>
          <h2>Ready for your real content</h2>
          <p>
            Add your CV, projects, links, and a short personal introduction
            when you are ready.
          </p>
        </div>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";

type IconName = "home" | "user" | "briefcase" | "document" | "mail" | "download" | "sun";

type Skill = {
  name: string;
  value: number;
};

type Education = {
  dates: string;
  title: string;
  school: string;
};

const navItems: Array<{ label: string; icon: IconName; active?: boolean; href: string }> = [
  { label: "Home", icon: "home", active: true, href: "#top" },
  { label: "About", icon: "user", href: "#about" },
  { label: "Work", icon: "briefcase", href: "#work" },
  { label: "CV", icon: "document", href: "#skills" },
  { label: "Contact", icon: "mail", href: "#contact" },
];

const skills: Skill[] = [
  { name: "TypeScript", value: 90 },
  { name: "React", value: 85 },
  { name: "Next.js", value: 80 },
  { name: "Node.js", value: 75 },
  { name: "UI / UX", value: 70 },
];

const education: Education[] = [
  {
    dates: "2021 — 2023",
    title: "Advanced Computer Science Studies",
    school: "Software systems, research, and applied projects",
  },
  {
    dates: "2018 — 2021",
    title: "Computer Science Foundations",
    school: "Programming, systems design, and product fundamentals",
  },
];

function Icon({ name }: { name: IconName }) {
  const commonProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.75,
    viewBox: "0 0 24 24",
  };

  const paths: Record<IconName, ReactNode> = {
    home: (
      <>
        <path d="m3.4 11.6 8.6-7.4 8.6 7.4" />
        <path d="M5.5 10.6v9h4.4v-5.2h4.2v5.2h4.4v-9" />
      </>
    ),
    user: (
      <>
        <path d="M12 12.1a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M4.7 20.1a7.3 7.3 0 0 1 14.6 0" />
      </>
    ),
    briefcase: (
      <>
        <path d="M9.2 7.4V5.7a1.6 1.6 0 0 1 1.6-1.6h2.4a1.6 1.6 0 0 1 1.6 1.6v1.7" />
        <path d="M4.4 7.4h15.2v11.4H4.4z" />
        <path d="M4.4 12.2h15.2" />
      </>
    ),
    document: (
      <>
        <path d="M6.2 3.8h8l3.6 3.8v12.6H6.2z" />
        <path d="M14.2 3.8v4h3.6" />
      </>
    ),
    mail: (
      <>
        <path d="M4 6.6h16v10.8H4z" />
        <path d="m4 7.3 8 6.1 8-6.1" />
      </>
    ),
    download: (
      <>
        <path d="M12 4v10" />
        <path d="m8.8 10.8 3.2 3.2 3.2-3.2" />
        <path d="M5.2 18.6h13.6" />
      </>
    ),
    sun: (
      <>
        <path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z" />
        <path d="M12 2.8v2" />
        <path d="M12 19.2v2" />
        <path d="m4.5 4.5 1.4 1.4" />
        <path d="m18.1 18.1 1.4 1.4" />
        <path d="M2.8 12h2" />
        <path d="M19.2 12h2" />
        <path d="m4.5 19.5 1.4-1.4" />
        <path d="m18.1 5.9 1.4-1.4" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" focusable="false" {...commonProps}>
      {paths[name]}
    </svg>
  );
}

function DottedMatrix() {
  return <span className="dot-matrix" aria-hidden="true" />;
}

export default function App() {
  return (
    <main className="portfolio-shell" id="top">
      <aside className="side-rail" aria-label="Section navigation">
        <a className="brand-mark" href="#top" aria-label="Julian Reynolds home">
          J<span>.</span>
        </a>

        <nav className="rail-nav">
          {navItems.map((item) => (
            <a
              aria-current={item.active ? "page" : undefined}
              className="rail-link"
              href={item.href}
              key={item.label}
            >
              <Icon name={item.icon} />
              <span className="sr-only">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="rail-controls" aria-hidden="true">
          <span className="toggle-pill">
            <span />
          </span>
          <span className="sun-button">
            <Icon name="sun" />
          </span>
        </div>
      </aside>

      <div className="page-content">
        <header className="top-bar">
          <p className="availability">
            <span className="blue-dot" aria-hidden="true" />
            Available for opportunities
          </p>
          <a className="download-button" href="#skills" aria-label="Download CV placeholder">
            Download CV
            <Icon name="download" />
          </a>
        </header>

        <section className="hero-grid" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="intro-line">Hi, I'm</p>
            <h1 id="hero-title">
              <span>Julian</span>
              {" "}
              <span>Reynolds</span>
            </h1>
            <p className="role">Software Engineer & Problem Solver</p>
            <p className="summary">
              I build elegant, efficient, and scalable digital solutions that make
              an impact.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#work">
                View work
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-action" href="#about">
                Learn more
                <span className="blue-dot" aria-hidden="true" />
              </a>
            </div>
          </div>

          <figure className="portrait-frame" aria-label="Portrait placeholder">
            <span className="frame-index">// 01</span>
            <span className="vertical-code">SELECTION.EXE</span>
            <span className="corner corner-top-left" />
            <span className="corner corner-top-right" />
            <span className="corner corner-bottom-left" />
            <span className="corner corner-bottom-right" />
            <span className="scan-line scan-horizontal" />
            <span className="scan-line scan-vertical" />
            <span className="frame-glow glow-one" />
            <span className="frame-glow glow-two" />
            <div className="blank-portrait" />
          </figure>
        </section>

        <section className="info-grid" aria-label="Professional summary">
          <article className="info-card about-card" id="about">
            <DottedMatrix />
            <p className="card-label">
              <span className="blue-dot" aria-hidden="true" />
              About me
            </p>
            <h2>I'm a builder at heart.</h2>
            <p>
              With a strong foundation in computer science and a passion for
              thoughtful design, I enjoy turning ideas into real-world products.
            </p>
            <a className="card-link" href="#contact">
              More about me
              <span className="blue-dot" aria-hidden="true" />
            </a>
          </article>

          <article className="info-card skills-card" id="skills">
            <DottedMatrix />
            <p className="card-label">
              <span className="blue-dot" aria-hidden="true" />
              Skills
            </p>
            <div className="skills-list">
              {skills.map((skill) => (
                <div className="skill-row" key={skill.name}>
                  <div className="skill-meta">
                    <span>{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="skill-track">
                    <span style={{ width: `${skill.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="info-card education-card" id="work">
            <DottedMatrix />
            <p className="card-label">
              <span className="blue-dot" aria-hidden="true" />
              Education
            </p>
            <div className="timeline">
              {education.map((item) => (
                <div className="timeline-item" key={item.dates}>
                  <span className="timeline-node" aria-hidden="true" />
                  <p className="timeline-date">{item.dates}</p>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.school}</p>
                  </div>
                </div>
              ))}
            </div>
            <a className="secondary-button" href="#work">
              View full timeline
              <span className="blue-dot" aria-hidden="true" />
            </a>
          </article>
        </section>

        <footer className="site-footer" id="contact">
          <p>
            © 2026 Julian Reynolds
            <span className="blue-dot" aria-hidden="true" />
          </p>
          <div className="footer-links">
            <a href="https://github.com/julianreynolds">GitHub</a>
            <span className="blue-dot" aria-hidden="true" />
            <a href="https://www.linkedin.com/in/julianreynolds/">LinkedIn</a>
            <span className="blue-dot" aria-hidden="true" />
            <a href="mailto:hello@julianreynolds.com">Email</a>
            <span className="blue-dot" aria-hidden="true" />
          </div>
        </footer>
      </div>
    </main>
  );
}

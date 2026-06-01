import { useEffect, useState, type ReactNode } from "react";

type IconName = "home" | "user" | "briefcase" | "document" | "mail" | "download" | "sun";
type Language = "en" | "de";

type NavItem = {
  label: string;
  icon: IconName;
  active?: boolean;
  href: string;
};

type Skill = {
  name: string;
  value: number;
};

type TimelineItem = {
  dates: string;
  title: string;
  detail: string;
};

type PageCopy = {
  languageName: string;
  nav: NavItem[];
  availability: string;
  download: string;
  intro: string;
  role: string;
  summary: string;
  viewWork: string;
  learnMore: string;
  aboutLabel: string;
  aboutTitle: string;
  aboutBody: string;
  aboutLink: string;
  skillsLabel: string;
  skills: Skill[];
  experienceLabel: string;
  experience: TimelineItem[];
  experienceLink: string;
  footerCv: string;
};

const cvPath = "/cv-julian-reynolds.pdf";

const pageCopy: Record<Language, PageCopy> = {
  en: {
    languageName: "English",
    nav: [
      { label: "Home", icon: "home", active: true, href: "#top" },
      { label: "About", icon: "user", href: "#about" },
      { label: "Experience", icon: "briefcase", href: "#experience" },
      { label: "CV", icon: "document", href: cvPath },
      { label: "Contact", icon: "mail", href: "#contact" },
    ],
    availability: "Available for research, data, and AI projects",
    download: "Download CV",
    intro: "Hi, I'm",
    role: "MSc Economics & Financial Economics",
    summary:
      "I combine empirical economics, financial machine learning, and AI-powered tools to turn complex data into decisions teams can use.",
    viewWork: "View work",
    learnMore: "Learn more",
    aboutLabel: "About me",
    aboutTitle: "Economics, data, and AI tools.",
    aboutBody:
      "I am from Bolivia and currently pursue two master’s degrees: Economics at Tilburg University and Financial Economics at Erasmus University Rotterdam.",
    aboutLink: "More about me",
    skillsLabel: "Skills",
    skills: [
      { name: "Python", value: 92 },
      { name: "R", value: 86 },
      { name: "Power BI", value: 84 },
      { name: "OpenAI API", value: 88 },
      { name: "SQL / WRDS", value: 72 },
    ],
    experienceLabel: "Experience",
    experience: [
      {
        dates: "2025",
        title: "KfW Development Bank",
        detail: "NLP review system, portfolio analysis, SQL and Power BI data architecture.",
      },
      {
        dates: "2024 - 2025",
        title: "ZEW Research",
        detail: "Public investment datasets, econometric scenarios, seminars, and election briefings.",
      },
    ],
    experienceLink: "View full CV",
    footerCv: "CV",
  },
  de: {
    languageName: "Deutsch",
    nav: [
      { label: "Start", icon: "home", active: true, href: "#top" },
      { label: "Profil", icon: "user", href: "#about" },
      { label: "Erfahrung", icon: "briefcase", href: "#experience" },
      { label: "CV", icon: "document", href: cvPath },
      { label: "Kontakt", icon: "mail", href: "#contact" },
    ],
    availability: "Offen für Research-, Daten- und KI-Projekte",
    download: "CV herunterladen",
    intro: "Hallo, ich bin",
    role: "MSc Economics & Financial Economics",
    summary:
      "Ich verbinde empirische Ökonomie, Financial Machine Learning und KI-gestützte Tools, um komplexe Daten in nutzbare Entscheidungen zu übersetzen.",
    viewWork: "Erfahrung",
    learnMore: "Mehr erfahren",
    aboutLabel: "Profil",
    aboutTitle: "Ökonomie, Daten und KI-Werkzeuge.",
    aboutBody:
      "Ich komme aus Bolivien und absolviere derzeit zwei Masterabschlüsse: Economics an der Universität Tilburg und Financial Economics an der Erasmus-Universität Rotterdam.",
    aboutLink: "Mehr über mich",
    skillsLabel: "Kenntnisse",
    skills: [
      { name: "Python", value: 92 },
      { name: "R", value: 86 },
      { name: "Power BI", value: 84 },
      { name: "OpenAI API", value: 88 },
      { name: "SQL / WRDS", value: 72 },
    ],
    experienceLabel: "Erfahrung",
    experience: [
      {
        dates: "2025",
        title: "KfW Entwicklungsbank",
        detail: "NLP-Review-System, Portfolioanalysen sowie SQL- und Power-BI-Datenarchitektur.",
      },
      {
        dates: "2024 - 2025",
        title: "ZEW Forschung",
        detail: "Investitionsdaten, ökonometrische Szenarien, Seminare und Wahlbriefings.",
      },
    ],
    experienceLink: "Vollständigen CV",
    footerCv: "CV",
  },
};

function getInitialLanguage(): Language {
  const language = new URLSearchParams(window.location.search).get("lang");
  return language === "de" ? "de" : "en";
}

function updateLanguageUrl(language: Language) {
  const params = new URLSearchParams(window.location.search);
  params.set("lang", language);
  const nextUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
  window.history.replaceState(null, "", nextUrl);
}

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
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const copy = pageCopy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    updateLanguageUrl(language);
  }, [language]);

  return (
    <main className="portfolio-shell" id="top">
      <aside className="side-rail" aria-label="Section navigation">
        <a className="brand-mark" href="#top" aria-label="Julian Reynolds home">
          J<span>.</span>
        </a>

        <nav className="rail-nav">
          {copy.nav.map((item) => (
            <a
              aria-current={item.active ? "page" : undefined}
              className="rail-link"
              download={item.href === cvPath ? true : undefined}
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
            {copy.availability}
          </p>

          <div className="top-actions">
            <div className="language-switcher" aria-label="Language selector">
              {(["en", "de"] as Language[]).map((item) => (
                <button
                  aria-pressed={language === item}
                  key={item}
                  onClick={() => setLanguage(item)}
                  type="button"
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
            <a className="download-button" download href={cvPath}>
              {copy.download}
              <Icon name="download" />
            </a>
          </div>
        </header>

        <section className="hero-grid" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="intro-line">{copy.intro}</p>
            <h1 id="hero-title">
              <span>Julian</span>
              {" "}
              <span>Reynolds</span>
            </h1>
            <p className="role">{copy.role}</p>
            <p className="summary">{copy.summary}</p>
            <div className="hero-actions">
              <a className="primary-action" href="#experience">
                {copy.viewWork}
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-action" href="#about">
                {copy.learnMore}
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
              {copy.aboutLabel}
            </p>
            <h2>{copy.aboutTitle}</h2>
            <p>{copy.aboutBody}</p>
            <a className="card-link" href="#contact">
              {copy.aboutLink}
              <span className="blue-dot" aria-hidden="true" />
            </a>
          </article>

          <article className="info-card skills-card" id="skills">
            <DottedMatrix />
            <p className="card-label">
              <span className="blue-dot" aria-hidden="true" />
              {copy.skillsLabel}
            </p>
            <div className="skills-list">
              {copy.skills.map((skill) => (
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

          <article className="info-card experience-card" id="experience">
            <DottedMatrix />
            <p className="card-label">
              <span className="blue-dot" aria-hidden="true" />
              {copy.experienceLabel}
            </p>
            <div className="timeline">
              {copy.experience.map((item) => (
                <div className="timeline-item" key={`${item.dates}-${item.title}`}>
                  <span className="timeline-node" aria-hidden="true" />
                  <p className="timeline-date">{item.dates}</p>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <a className="secondary-button" download href={cvPath}>
              {copy.experienceLink}
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
            <a href="mailto:Julian.reynolds02@gmail.com">Email</a>
            <span className="blue-dot" aria-hidden="true" />
            <a download href={cvPath}>
              {copy.footerCv}
            </a>
            <span className="blue-dot" aria-hidden="true" />
            <button type="button" onClick={() => setLanguage(language === "en" ? "de" : "en")}>
              {copy.languageName}
            </button>
            <span className="blue-dot" aria-hidden="true" />
          </div>
        </footer>
      </div>
    </main>
  );
}

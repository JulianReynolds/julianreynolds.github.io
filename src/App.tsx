import { useEffect, useState, type ReactNode } from "react";

type IconName =
  | "home"
  | "user"
  | "briefcase"
  | "document"
  | "mail"
  | "download"
  | "sun"
  | "book"
  | "spark";
type Language = "en" | "de";

type NavItem = {
  label: string;
  icon: IconName;
  active?: boolean;
  href: string;
};

type Highlight = {
  value: string;
  label: string;
};

type DetailItem = {
  dates: string;
  title: string;
  subtitle: string;
  detail: string;
  tags?: string[];
};

type SkillGroup = {
  title: string;
  items: string[];
};

type SectionCopy = {
  label: string;
  title: string;
  intro: string;
};

type PageCopy = {
  languageName: string;
  nav: NavItem[];
  download: string;
  intro: string;
  role: string;
  summary: string;
  viewWork: string;
  learnMore: string;
  profile: SectionCopy & {
    body: string;
    highlights: Highlight[];
  };
  education: SectionCopy & {
    entries: DetailItem[];
  };
  experience: SectionCopy & {
    entries: DetailItem[];
  };
  projects: SectionCopy & {
    entries: DetailItem[];
  };
  skills: SectionCopy & {
    groups: SkillGroup[];
    languages: string;
  };
  contact: {
    label: string;
    title: string;
    intro: string;
    email: string;
    cv: string;
  };
};

const cvPath = "/cv-julian-reynolds.pdf";
const emailAddress = "Julian.reynolds02@gmail.com";

const pageCopy: Record<Language, PageCopy> = {
  en: {
    languageName: "English",
    nav: [
      { label: "Home", icon: "home", active: true, href: "#top" },
      { label: "Profile", icon: "user", href: "#profile" },
      { label: "Education", icon: "book", href: "#education" },
      { label: "Experience", icon: "briefcase", href: "#experience" },
      { label: "Research", icon: "spark", href: "#projects" },
      { label: "Contact", icon: "mail", href: "#contact" },
    ],
    download: "Download CV",
    intro: "Hi, I'm",
    role: "MSc Economics & Financial Economics",
    summary:
      "I combine empirical economics, financial machine learning, and AI-powered tools to turn complex data into decisions teams can use.",
    viewWork: "Explore CV",
    learnMore: "Education",
    profile: {
      label: "Profile",
      title: "Profile",
      intro:
        "My work sits between economic research, data infrastructure, and applied AI systems.",
      body:
        "I am from Bolivia and currently pursue two master’s degrees in Economics at Tilburg University and Financial Economics at Erasmus University Rotterdam. My academic path combines advanced econometrics, game theory, asset pricing, and financial machine learning with hands-on work in research teams.",
      highlights: [
        { value: "2x MSc", label: "Economics and Financial Economics" },
        { value: "1.0", label: "Bachelor thesis grade" },
        { value: "C2", label: "German and English" },
        { value: "AI + Data", label: "Python, Power BI, OpenAI API" },
      ],
    },
    education: {
      label: "Education",
      title: "Education",
      intro:
        "Formal training across economics, financial economics, econometrics, and quantitative research.",
      entries: [
        {
          dates: "Jan. 2025 - Present",
          title: "Master of Science in Economics",
          subtitle: "Tilburg University, Tilburg",
          detail: "GPA 7.8/10 with coursework including game theory and advanced econometrics.",
          tags: ["Econometrics", "Game theory"],
        },
        {
          dates: "Aug. 2025 - Present",
          title: "Master of Science in Financial Economics",
          subtitle: "Erasmus University Rotterdam",
          detail:
            "GPA 8.6/10 with coursework in advanced asset pricing and financial machine learning.",
          tags: ["Asset pricing", "Financial ML"],
        },
        {
          dates: "Sep. 2021 - Jan. 2025",
          title: "Bachelor of Science in Economics",
          subtitle: "University of Mannheim, Mannheim",
          detail: "Bachelor thesis awarded the highest possible grade, 1.0. Overall GPA 2.2/5.",
          tags: ["Public finance", "Causal inference"],
        },
        {
          dates: "Sep. 2008 - Nov. 2020",
          title: "Abitur",
          subtitle: "Colegio Aleman Mariscal Braun, La Paz",
          detail: "German high school diploma abroad.",
          tags: ["German diploma", "Bolivia"],
        },
      ],
    },
    experience: {
      label: "Experience",
      title: "Experience",
      intro:
        "Roles across development banking, economic research, public finance, and accounting.",
      entries: [
        {
          dates: "Jul. 2025 - Nov. 2025",
          title: "Internship at KfW Development Bank",
          subtitle: "Results Management Unit, Frankfurt am Main",
          detail:
            "Designed and tested an NLP-based review system in Python, produced portfolio analyses for senior economists, and supported SQL, Access, and Power BI data architecture.",
          tags: ["NLP", "Power BI", "SQL"],
        },
        {
          dates: "Oct. 2024 - Jan. 2025",
          title: "Research Assistant at ZEW",
          subtitle: "Corporate Taxation and Public Finance, Mannheim",
          detail:
            "Continued a public investment research project and prepared electoral datasets and briefings for senior economists during Germany's federal election work.",
          tags: ["Research", "Election data"],
        },
        {
          dates: "Jul. 2024 - Oct. 2024",
          title: "Internship at ZEW",
          subtitle: "Corporate Taxation and Public Finance, Mannheim",
          detail:
            "Analyzed large public investment datasets in Stata and R, contributed to econometric scenario models, and presented findings in research seminars.",
          tags: ["Stata", "R", "Econometrics"],
        },
        {
          dates: "Feb. 2021 - Aug. 2021",
          title: "Internship at Profesionales en Talento",
          subtitle: "Accounting Department, La Paz",
          detail:
            "Entered and reconciled transaction data in Excel while gaining exposure to audit processes and internal controls.",
          tags: ["Excel", "Accounting"],
        },
      ],
    },
    projects: {
      label: "Research projects",
      title: "Research Projects",
      intro:
        "Academic projects centered on prediction, mechanism design, regulation, and public investment.",
      entries: [
        {
          dates: "Ongoing",
          title: "Replication Paper - Gu, Kelly & Xiu (2020)",
          subtitle: "Erasmus University Rotterdam",
          detail:
            "Built a Python pipeline from CRSP/WRDS and macro predictors, benchmarking linear models, random forests, boosted trees, and neural networks for return prediction.",
          tags: ["Python", "WRDS", "Machine learning"],
        },
        {
          dates: "Ongoing",
          title: "Master's Thesis: Mechanism Design for AI Safety",
          subtitle: "Tilburg University",
          detail:
            "Developing a dynamic principal-agent model using MDP-based mechanism design to study shutdown and honesty constraints for AI agents.",
          tags: ["AI safety", "Mechanism design"],
        },
        {
          dates: "2025",
          title: "Computational Replication - Baron (1982)",
          subtitle: "Tilburg University",
          detail:
            "Replicated and extended Baron's regulation model in Python with a self-financing constraint and simulations of welfare and truth-telling outcomes.",
          tags: ["Python", "Simulation"],
        },
        {
          dates: "2025",
          title: "Bachelor Thesis - Mayoral Tenure and Public Investment",
          subtitle: "University of Mannheim",
          detail:
            "Analyzed a Lower Saxony natural experiment with over 1M observations to estimate causal effects on long-term public investment.",
          tags: ["1M+ observations", "Grade 1.0"],
        },
      ],
    },
    skills: {
      label: "Skills",
      title: "Skills",
      intro:
        "Programming, analytics, and communication tools used across research and professional work.",
      groups: [
        {
          title: "Programming & Data",
          items: ["Python", "pandas", "NumPy", "scikit-learn", "PyTorch", "R", "Stata", "SQL / WRDS"],
        },
        {
          title: "Tools & Platforms",
          items: ["Power BI", "Azure ML Studio", "MS Office", "Git", "Gradio"],
        },
        {
          title: "AI Workflow",
          items: ["OpenAI API", "Prompt Engineering", "NLP review systems", "Applied automation"],
        },
      ],
      languages: "Spanish native | German C2 | English C2",
    },
    contact: {
      label: "Contact",
      title: "Let’s build something useful from the data.",
      intro:
        "Best for research assistantships, economics projects, analytics work, and AI-enabled internal tools.",
      email: "Email Julian",
      cv: "Download CV",
    },
  },
  de: {
    languageName: "Deutsch",
    nav: [
      { label: "Start", icon: "home", active: true, href: "#top" },
      { label: "Profil", icon: "user", href: "#profile" },
      { label: "Ausbildung", icon: "book", href: "#education" },
      { label: "Erfahrung", icon: "briefcase", href: "#experience" },
      { label: "Forschung", icon: "spark", href: "#projects" },
      { label: "Kontakt", icon: "mail", href: "#contact" },
    ],
    download: "CV herunterladen",
    intro: "Hallo, ich bin",
    role: "MSc Economics & Financial Economics",
    summary:
      "Ich verbinde empirische Ökonomie, Financial Machine Learning und KI-gestützte Tools, um komplexe Daten in nutzbare Entscheidungen zu übersetzen.",
    viewWork: "CV ansehen",
    learnMore: "Ausbildung",
    profile: {
      label: "Profil",
      title: "Profil",
      intro:
        "Meine Arbeit liegt zwischen wirtschaftswissenschaftlicher Forschung, Dateninfrastruktur und angewandten KI-Systemen.",
      body:
        "Ich komme aus Bolivien und absolviere derzeit zwei Masterabschlüsse: Economics an der Universität Tilburg und Financial Economics an der Erasmus-Universität Rotterdam. Mein akademischer Weg verbindet Ökonometrie, Spieltheorie, Asset Pricing und Financial Machine Learning mit praktischer Erfahrung in Forschungsteams.",
      highlights: [
        { value: "2x MSc", label: "Economics und Financial Economics" },
        { value: "1,0", label: "Note der Bachelorarbeit" },
        { value: "C2", label: "Deutsch und Englisch" },
        { value: "KI + Daten", label: "Python, Power BI, OpenAI API" },
      ],
    },
    education: {
      label: "Ausbildung",
      title: "Ausbildung",
      intro:
        "Ausbildung in Economics, Financial Economics, Ökonometrie und quantitativer Forschung.",
      entries: [
        {
          dates: "Jan. 2025 - heute",
          title: "Master of Science in Economics",
          subtitle: "Tilburg University, Tilburg",
          detail: "Notendurchschnitt 7,8 mit Schwerpunkten in Spieltheorie und fortgeschrittener Ökonometrie.",
          tags: ["Ökonometrie", "Spieltheorie"],
        },
        {
          dates: "Aug. 2025 - heute",
          title: "Master of Science in Financial Economics",
          subtitle: "Erasmus Universität Rotterdam",
          detail:
            "Notendurchschnitt 8,6 mit Schwerpunkten in Advanced Asset Pricing und Financial Machine Learning.",
          tags: ["Asset Pricing", "Financial ML"],
        },
        {
          dates: "Sep. 2021 - Jan. 2025",
          title: "Bachelor of Science in Volkswirtschaftslehre",
          subtitle: "Universität Mannheim, Mannheim",
          detail: "Bachelorarbeit mit Bestnote 1,0 bewertet. Gesamtnote 2,2/5.",
          tags: ["Öffentliche Finanzen", "Kausale Analyse"],
        },
        {
          dates: "Sep. 2008 - Nov. 2020",
          title: "Abitur",
          subtitle: "Colegio Alemán Mariscal Braun, La Paz",
          detail: "Deutsches Auslandsabitur.",
          tags: ["Deutsches Abitur", "Bolivien"],
        },
      ],
    },
    experience: {
      label: "Berufserfahrung",
      title: "Berufserfahrung",
      intro:
        "Stationen in Entwicklungsbank, Wirtschaftsforschung, öffentlichen Finanzen und Buchhaltung.",
      entries: [
        {
          dates: "Jul. 2025 - Nov. 2025",
          title: "Praktikum bei KfW Entwicklungsbank",
          subtitle: "Zentrale Wirkungseinheit, Frankfurt am Main",
          detail:
            "Konzeption und Test eines NLP-basierten Review-Systems in Python, Portfolioanalysen für leitende Volkswirte sowie Mitarbeit an SQL-, Access- und Power-BI-Datenarchitektur.",
          tags: ["NLP", "Power BI", "SQL"],
        },
        {
          dates: "Okt. 2024 - Jan. 2025",
          title: "Studentische Hilfskraft am ZEW",
          subtitle: "Unternehmensbesteuerung und Öffentliche Finanzwirtschaft, Mannheim",
          detail:
            "Fortführung des Forschungsprojekts zu öffentlichen Investitionen sowie Aufbereitung von Wahldatensätzen und Briefings für leitende Volkswirte.",
          tags: ["Research", "Wahldaten"],
        },
        {
          dates: "Jul. 2024 - Okt. 2024",
          title: "Praktikum am ZEW",
          subtitle: "Unternehmensbesteuerung und Öffentliche Finanzwirtschaft, Mannheim",
          detail:
            "Analyse umfangreicher Investitionsdatensätze in Stata und R, Mitarbeit an ökonometrischen Szenariomodellen und Präsentation in Forschungsseminaren.",
          tags: ["Stata", "R", "Ökonometrie"],
        },
        {
          dates: "Feb. 2021 - Aug. 2021",
          title: "Praktikum bei Profesionales en Talento",
          subtitle: "Buchhaltung, La Paz",
          detail:
            "Erfassung und Abstimmung von Transaktionsdaten in Excel sowie erste Einblicke in Prüfungsprozesse und interne Kontrollsysteme.",
          tags: ["Excel", "Buchhaltung"],
        },
      ],
    },
    projects: {
      label: "Forschungsprojekte",
      title: "Forschungsprojekte",
      intro:
        "Akademische Projekte zu Prognosemodellen, Mechanism Design, Regulierung und öffentlichen Investitionen.",
      entries: [
        {
          dates: "Laufend",
          title: "Replikationsarbeit - Gu, Kelly & Xiu (2020)",
          subtitle: "Erasmus Universität Rotterdam",
          detail:
            "Aufbau einer Python-Pipeline mit CRSP/WRDS- und Makrodaten sowie Benchmarking linearer Modelle, Random Forests, Boosted Trees und neuronaler Netze.",
          tags: ["Python", "WRDS", "Machine Learning"],
        },
        {
          dates: "Laufend",
          title: "Masterarbeit: Mechanism Design für KI-Sicherheit",
          subtitle: "Tilburg University",
          detail:
            "Entwicklung eines dynamischen Principal-Agent-Modells mit MDP-basiertem Mechanism Design zu Shutdown- und Ehrlichkeitsanforderungen für KI-Agenten.",
          tags: ["KI-Sicherheit", "Mechanism Design"],
        },
        {
          dates: "2025",
          title: "Computergestützte Replikation - Baron (1982)",
          subtitle: "Tilburg University",
          detail:
            "Python-Replikation und Erweiterung von Barons Regulierungsmodell mit Selbstfinanzierungsbedingung und Simulationen zu Wohlfahrt und Wahrhaftigkeit.",
          tags: ["Python", "Simulation"],
        },
        {
          dates: "2025",
          title: "Bachelorarbeit - Amtszeiten und öffentliche Investitionen",
          subtitle: "Universität Mannheim",
          detail:
            "Analyse eines natürlichen Experiments in Niedersachsen mit über 1 Mio. Beobachtungen zur Schätzung kausaler Effekte auf langfristige öffentliche Investitionen.",
          tags: ["1 Mio.+ Beobachtungen", "Note 1,0"],
        },
      ],
    },
    skills: {
      label: "Kenntnisse",
      title: "Kenntnisse",
      intro:
        "Programmier-, Analyse- und Kommunikationstools aus Forschung und beruflicher Praxis.",
      groups: [
        {
          title: "Programmierung & Daten",
          items: ["Python", "pandas", "NumPy", "scikit-learn", "PyTorch", "R", "Stata", "SQL / WRDS"],
        },
        {
          title: "Tools & Plattformen",
          items: ["Power BI", "Azure ML Studio", "MS Office", "Git", "Gradio"],
        },
        {
          title: "KI-Workflow",
          items: ["OpenAI API", "Prompt Engineering", "NLP-Review-Systeme", "Automatisierung"],
        },
      ],
      languages: "Spanisch Muttersprache | Deutsch C2 | Englisch C2",
    },
    contact: {
      label: "Kontakt",
      title: "Lass uns aus Daten etwas Nützliches bauen.",
      intro:
        "Passend für Research Assistantships, Economics-Projekte, Analytics-Arbeit und KI-gestützte interne Tools.",
      email: "Julian kontaktieren",
      cv: "CV herunterladen",
    },
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
    book: (
      <>
        <path d="M5.2 4.4h5.2a3.2 3.2 0 0 1 3.2 3.2v12a3.4 3.4 0 0 0-3.2-2.1H5.2z" />
        <path d="M18.8 4.4h-5.2a3.2 3.2 0 0 0-3.2 3.2v12a3.4 3.4 0 0 1 3.2-2.1h5.2z" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3.6 1.6 5 5 1.6-5 1.6-1.6 5-1.6-5-5-1.6 5-1.6z" />
        <path d="m18 15.4.7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7z" />
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

function SectionHeader({ intro, label, title }: SectionCopy) {
  return (
    <div className="section-header">
      <p className="card-label">
        <span className="blue-dot" aria-hidden="true" />
        {label}
      </p>
      <div>
        <h2>{title}</h2>
        <p>{intro}</p>
      </div>
    </div>
  );
}

function TagList({ tags }: { tags?: string[] }) {
  if (!tags?.length) {
    return null;
  }

  return (
    <div className="tag-list" aria-label="Related skills and themes">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

function TimelineRows({ items }: { items: DetailItem[] }) {
  return (
    <div className="timeline long-timeline">
      {items.map((item) => (
        <article className="timeline-item" key={`${item.dates}-${item.title}`}>
          <span className="timeline-node" aria-hidden="true" />
          <p className="timeline-date">{item.dates}</p>
          <div>
            <h3>{item.title}</h3>
            <p className="timeline-subtitle">{item.subtitle}</p>
            <p>{item.detail}</p>
            <TagList tags={item.tags} />
          </div>
        </article>
      ))}
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const copy = pageCopy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    updateLanguageUrl(language);

    const hashTarget = window.location.hash.slice(1);
    if (hashTarget) {
      requestAnimationFrame(() => {
        document.getElementById(hashTarget)?.scrollIntoView({ block: "start" });
      });
    }
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
              <span>Julian</span>{" "}
              <span>Reynolds</span>
            </h1>
            <p className="role">{copy.role}</p>
            <p className="summary">{copy.summary}</p>
            <div className="hero-actions">
              <a className="primary-action" href="#profile">
                {copy.viewWork}
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-action" href="#education">
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

        <div className="section-stack">
          <section className="section-panel profile-section" id="profile">
            <DottedMatrix />
            <SectionHeader
              intro={copy.profile.intro}
              label={copy.profile.label}
              title={copy.profile.title}
            />
            <div className="profile-layout">
              <p className="profile-lede">{copy.profile.body}</p>
              <div className="highlight-grid">
                {copy.profile.highlights.map((item) => (
                  <div className="highlight-item" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-panel education-section" id="education">
            <DottedMatrix />
            <SectionHeader
              intro={copy.education.intro}
              label={copy.education.label}
              title={copy.education.title}
            />
            <div className="education-grid">
              {copy.education.entries.map((item) => (
                <article className="education-item" key={`${item.dates}-${item.title}`}>
                  <p className="timeline-date">{item.dates}</p>
                  <h3>{item.title}</h3>
                  <p className="timeline-subtitle">{item.subtitle}</p>
                  <p>{item.detail}</p>
                  <TagList tags={item.tags} />
                </article>
              ))}
            </div>
          </section>

          <section className="section-panel experience-section" id="experience">
            <DottedMatrix />
            <SectionHeader
              intro={copy.experience.intro}
              label={copy.experience.label}
              title={copy.experience.title}
            />
            <TimelineRows items={copy.experience.entries} />
          </section>

          <section className="section-panel projects-section" id="projects">
            <DottedMatrix />
            <SectionHeader
              intro={copy.projects.intro}
              label={copy.projects.label}
              title={copy.projects.title}
            />
            <div className="project-grid">
              {copy.projects.entries.map((item) => (
                <article className="project-item" key={`${item.dates}-${item.title}`}>
                  <p className="timeline-date">{item.dates}</p>
                  <h3>{item.title}</h3>
                  <p className="timeline-subtitle">{item.subtitle}</p>
                  <p>{item.detail}</p>
                  <TagList tags={item.tags} />
                </article>
              ))}
            </div>
          </section>

          <section className="section-panel skills-section" id="skills">
            <DottedMatrix />
            <SectionHeader
              intro={copy.skills.intro}
              label={copy.skills.label}
              title={copy.skills.title}
            />
            <div className="skill-groups">
              {copy.skills.groups.map((group) => (
                <article className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="skill-chip-list">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <p className="language-line">{copy.skills.languages}</p>
          </section>

          <section className="section-panel contact-panel" id="contact">
            <DottedMatrix />
            <SectionHeader
              intro={copy.contact.intro}
              label={copy.contact.label}
              title={copy.contact.title}
            />
            <div className="contact-actions">
              <a className="primary-action" href={`mailto:${emailAddress}`}>
                {copy.contact.email}
                <span aria-hidden="true">↗</span>
              </a>
              <a className="secondary-button" download href={cvPath}>
                {copy.contact.cv}
                <span className="blue-dot" aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>

        <footer className="site-footer">
          <p>
            © 2026 Julian Reynolds
            <span className="blue-dot" aria-hidden="true" />
          </p>
          <div className="footer-links">
            <a href={`mailto:${emailAddress}`}>Email</a>
            <span className="blue-dot" aria-hidden="true" />
            <a download href={cvPath}>
              CV
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

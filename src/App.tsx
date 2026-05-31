import { useEffect, useMemo, useState } from "react";

type SiteVersion = {
  id: string;
  label: string;
  title: string;
  status: string;
  note: string;
};

const siteVersions: SiteVersion[] = [
  {
    id: "minimal",
    label: "Minimal",
    title: "Julian Reynolds",
    status: "Website in progress.",
    note: "A clean baseline for testing copy, spacing, and structure.",
  },
  {
    id: "editorial",
    label: "Editorial",
    title: "Julian Reynolds",
    status: "Personal site draft.",
    note: "A sharper magazine-like direction with stronger type and contrast.",
  },
  {
    id: "studio",
    label: "Studio",
    title: "Julian Reynolds",
    status: "Digital CV experiment.",
    note: "A more expressive direction for portfolio-style storytelling.",
  },
];

function getInitialVersion() {
  const params = new URLSearchParams(window.location.search);
  const version = params.get("style");

  return siteVersions.some((item) => item.id === version)
    ? version!
    : siteVersions[0].id;
}

export default function App() {
  const [activeVersionId, setActiveVersionId] = useState(getInitialVersion);
  const activeVersion = useMemo(
    () =>
      siteVersions.find((version) => version.id === activeVersionId) ??
      siteVersions[0],
    [activeVersionId],
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("style", activeVersionId);
    const nextUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", nextUrl);
  }, [activeVersionId]);

  return (
    <main className={`site-shell ${activeVersion.id}`}>
      <nav className="version-switcher" aria-label="Website style versions">
        {siteVersions.map((version) => (
          <button
            aria-pressed={version.id === activeVersion.id}
            className="version-button"
            key={version.id}
            onClick={() => setActiveVersionId(version.id)}
            type="button"
          >
            {version.label}
          </button>
        ))}
      </nav>

      <section className="landing-card" aria-label={`${activeVersion.label} website version`}>
        <p className="domain">julianreynolds.github.io</p>
        <h1>{activeVersion.title}</h1>
        <p className="status">{activeVersion.status}</p>
        <p className="version-note">{activeVersion.note}</p>
      </section>
    </main>
  );
}

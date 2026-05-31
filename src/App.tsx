import { ExperienceList } from "./components/ExperienceList";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectGrid } from "./components/ProjectGrid";
import { Section } from "./components/Section";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Section
          id="about"
          title="About"
          intro="A clean space for the short professional story that recruiters should remember."
        >
          <div className="about-panel">
            <p>
              This placeholder section is ready for a concise introduction:
              background, strengths, current focus, and what kind of opportunity
              you are looking for.
            </p>
            <p>
              The structure is already set up so the site can become polished
              quickly once your real content is available.
            </p>
          </div>
        </Section>
        <Section
          id="projects"
          title="Projects"
          intro="Use these cards for case studies, technical projects, writing, research, or coursework."
        >
          <ProjectGrid />
        </Section>
        <Section
          id="experience"
          title="Experience"
          intro="A compact timeline for education, work, internships, and application focus."
        >
          <ExperienceList />
        </Section>
      </main>
      <Footer />
    </>
  );
}

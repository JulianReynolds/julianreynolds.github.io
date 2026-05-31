import { profile } from "../data/siteContent";

const navItems = ["About", "Projects", "Experience", "Contact"];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Go to home">
        <span className="brand-mark">YR</span>
        <span>{profile.name}</span>
      </a>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

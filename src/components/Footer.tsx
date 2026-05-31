import { profile } from "../data/siteContent";

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div>
        <h2>Contact</h2>
        <p>Replace these links with your real application links when ready.</p>
      </div>
      <div className="footer-links">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        {profile.links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

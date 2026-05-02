import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? "border-b border-blue-500/20 bg-slate-950/95 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between py-5">
        <a
          href="#home"
          className="font-display text-2xl tracking-tight text-blue-500"
        >
          K.Charuka
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              spy
              duration={600}
              offset={-80}
              className="cursor-pointer text-sm text-slate-400 transition hover:text-slate-100"
              activeClass="text-blue-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="contact"
          smooth
          duration={600}
          offset={-80}
          className="btn btn-primary hidden px-6 py-2 text-xs md:inline-flex"
        >
          Hire Me
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-slate-100 md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-blue-500/20 bg-slate-950/95 px-8 py-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              spy
              duration={600}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-blue-500/10 py-3 text-slate-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

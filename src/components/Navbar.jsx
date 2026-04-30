import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(10,15,30,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(59,130,246,0.15)' : 'none',
      transition: 'all .4s',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 2rem' }}>
        <a href="#home" style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.4rem', color: '#3b82f6', letterSpacing: '-0.5px' }}>
          K.Charuka
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '2.2rem' }} className="desktop-nav">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} smooth spy duration={600} offset={-80}
              style={{ fontSize: '.9rem', color: '#94a3b8', cursor: 'pointer', transition: 'color .2s' }}
              activeStyle={{ color: '#3b82f6' }}
              onMouseEnter={e => e.target.style.color='#f8fafc'}
              onMouseLeave={e => e.target.style.color='#94a3b8'}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hire me button */}
        <Link to="contact" smooth duration={600} offset={-80}
          className="btn btn-primary" style={{ fontSize: '.85rem', padding: '.55rem 1.4rem' }}>
          Hire Me
        </Link>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#f8fafc', fontSize: '1.4rem' }}
          className="hamburger">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'rgba(10,15,30,0.98)', padding: '1.5rem 2rem', borderTop: '1px solid rgba(59,130,246,0.15)' }}>
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} smooth spy duration={600} offset={-80}
              onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '.75rem 0', color: '#94a3b8', cursor: 'pointer', borderBottom: '1px solid rgba(59,130,246,0.1)' }}>
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
          .btn-primary { display: none !important; }
        }
      `}</style>
    </header>
  );
}

import { useEffect, useState } from 'react';
import Icon from './Icon';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Sorts', href: '#sort' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

export default function Header({ search, onSearchChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#top" aria-label="Medication Guide home">
          <span className="brand__logo">
            <Icon name="pills" />
          </span>
          <span>
            <strong>Medication Guide</strong>
            <small>Trusted healthcare navigation</small>
          </span>
        </a>

        <div className="header-tools">
          <label className="search-box" htmlFor="medicine-search">
            <Icon name="search" />
            <input
              id="medicine-search"
              className="search-input"
              type="search"
              placeholder="Search for medicine, service, or category"
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
            />
          </label>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? 'is-active' : ''}`}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../../data/navLinks';
import { clinicInfo } from '../../data/clinicInfo';
import logo from '../../assets/images/logo/majid-healthcare-logo.webp';
import Button from '../common/Button';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import './Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useOnClickOutside(navRef, () => setOpen(false));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="topbar">
        <div className="container topbar__inner">
          <a href={clinicInfo.phoneHref} className="topbar__item">
            <FaPhoneAlt aria-hidden="true" /> {clinicInfo.phoneDisplay}
          </a>
          <span className="topbar__item topbar__hours">
            OPD: Mon–Sat, 10 AM–1 PM &amp; 6 PM–10 PM
          </span>
        </div>
      </div>

      <div className="container navbar">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={logo} alt={clinicInfo.fullName} className="brand__logo" />
        </NavLink>

        <nav className={`nav${open ? ' is-open' : ''}`} ref={navRef} aria-label="Primary">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="nav__cta">
            <Button to="/appointment" variant="accent" size="sm" onClick={() => setOpen(false)}>
              Book Appointment
            </Button>
          </div>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

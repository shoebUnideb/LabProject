import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/research', label: 'Research' },
    { path: '/publications', label: 'Publications' },
    { path: '/team', label: 'Team' },
    { path: '/positions', label: 'Positions' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <div className="logo-image">
              <img src="/logo.png" alt="Lab Logo" />
            </div>
            <span className={`logo-text ${isScrolled ? 'hidden' : ''}`}>
              Siddiqui Lab
            </span>
          </Link>

          <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            {navItems.map((item, index) => (
              <div 
                key={item.path}
                className="nav-item-wrapper"
                onMouseEnter={() => setActiveHover(index)}
                onMouseLeave={() => setActiveHover(null)}
              >
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="nav-link-text">{item.label}</span>
                  <div className="nav-link-background"></div>
                </Link>
              </div>
            ))}
            <div className="nav-highlight" style={{ 
              transform: `translateX(${activeHover * 100}%)`,
              opacity: activeHover !== null ? 1 : 0
            }} />
          </div>

          <button
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(25px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 0.5rem 0;
        }

        .header.scrolled {
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(30px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.25rem 0;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px;
          position: relative;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          padding: 0.5rem;
          border-radius: 12px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .logo::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .logo:hover::before {
          left: 100%;
        }

        .logo-image {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--highlight), #667eea);
          border-radius: 10px;
          padding: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 212, 255, 0.2);
        }

        .logo:hover .logo-image {
          transform: scale(1.05) rotate(5deg);
          box-shadow: 0 6px 20px rgba(0, 212, 255, 0.3);
        }

        .logo-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }

        .logo-text {
          font-family: &quot; Segoe Script&quot;, cursive;

          font-size: 1.5rem;
          font-weight: 800;
          color: var(--accent-white);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: linear-gradient(135deg, var(--accent-white), var(--highlight));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .logo-text.hidden {
          opacity: 0;
          transform: translateX(-15px);
          pointer-events: none;
        }

        .nav-menu {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          padding: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          backdrop-filter: blur(10px);
        }

        .nav-item-wrapper {
          position: relative;
        }

        .nav-link {
          color: var(--accent-gray);
          text-decoration: none;
          font-weight: 500;
          padding: 0.75rem 1.25rem;
          border-radius: 12px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          display: block;
        }

        .nav-link-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(102, 126, 234, 0.1));
          border-radius: 12px;
          opacity: 0;
          transition: all 0.3s ease;
          transform: scale(0.8);
        }

        .nav-link:hover .nav-link-background,
        .nav-link.active .nav-link-background {
          opacity: 1;
          transform: scale(1);
        }

        .nav-link-text {
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .nav-link:hover .nav-link-text,
        .nav-link.active .nav-link-text {
          color: var(--accent-white);
          transform: translateY(-1px);
        }

        .nav-link.active {
          color: var(--accent-white);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--highlight), #667eea);
          border-radius: 2px;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link.active::after {
          width: 60%;
        }

        .nav-link:hover::after {
          width: 80%;
        }

        .nav-highlight {
          position: relative;
          top: 0.5rem;
          left: 0;
          width: calc(100% / 6);
          height: calc(100% - 1rem);
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(102, 126, 234, 0.15));
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
          z-index: 0;
          backdrop-filter: blur(10px);
        }

        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .mobile-menu-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .mobile-menu-btn:hover::before {
          left: 100%;
        }

        .mobile-menu-btn span {
          width: 25px;
          height: 2px;
          background: var(--accent-white);
          margin: 3px 0;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .mobile-menu-btn.active span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .mobile-menu-btn.active span:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-btn.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        @media (max-width: 968px) {
          .nav-menu {
            gap: 0.25rem;
          }

          .nav-link {
            padding: 0.6rem 1rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex;
          }

          .nav-menu {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(-20px);
            width: 90%;
            max-width: 400px;
            background: var(--secondary-black);
            border: 1px solid var(--accent-dark-gray);
            flex-direction: column;
            padding: 1.5rem;
            gap: 0.5rem;
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(30px);
          }

          .nav-menu.active {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(10px);
          }

          .nav-link {
            padding: 1rem 1.5rem;
            text-align: center;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.02);
          }

          .nav-highlight {
            display: none;
          }

          .logo-text {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .logo-text {
            font-size: 1.1rem;
          }
          
          .logo-image {
            width: 36px;
            height: 36px;
          }

          .nav {
            height: 60px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import { labData } from '../data/labData';

const Home = () => {
  const { hero, features, stats } = labData.home;

  return (
    <div className="home">
      {/* Hero Section with GIF Background */}
      <section className="hero-section">
        {/* GIF Background */}
        <div className="hero-gif-background"></div>
        
        {/* Overlay */}
        <div className="hero-overlay"></div>
        
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title fade-in-up">
              {hero.title}
            </h1>
            <p className="hero-subtitle fade-in-up" style={{ animationDelay: '0.2s' }}>
              {hero.subtitle}
            </p>
            <Link 
              to="/research" 
              className="btn btn-primary fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              {hero.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item stagger-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section">
        <div className="container">
          <h2 className="section-title">Research Focus Areas</h2>
          <div className="grid grid-3">
            {features.map((feature, index) => (
              <div key={index} className="card stagger-item hover-lift">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: var(--primary-black);
        }

        .hero-gif-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('/hero-background.gif');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          animation: backgroundPan 30s linear infinite;
          opacity: 100%;
          filter: brightness(1) contrast(1);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(10, 10, 10, 0.9) 0%,
            rgba(10, 10, 10, 0.7) 50%,
            rgba(10, 10, 10, 0.9) 100%
          );
          z-index: 1;
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, var(--accent-white), var(--highlight));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--accent-white);
          margin-bottom: 2.5rem;
          line-height: 1.6;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .stats-section {
          background: var(--secondary-black);
          padding: 4rem 0;
          border-top: 1px solid var(--accent-dark-gray);
          border-bottom: 1px solid var(--accent-dark-gray);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }

        .stat-item {
          padding: 1rem;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          color: var(--highlight);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--accent-gray);
          font-size: 1rem;
          font-weight: 500;
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .feature-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--accent-white);
        }

        .feature-description {
          color: var(--accent-gray);
          line-height: 1.6;
        }

        @keyframes backgroundPan {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        /* Alternative: If you want the GIF to pan instead of zoom */
        @keyframes backgroundSlide {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-gif-background {
            animation: backgroundPan 20s linear infinite;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stat-number {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .hero-gif-background {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
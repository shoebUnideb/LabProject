import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">MyLab</h3>
            <p className="footer-description">
              Advancing the frontiers of quantum computing and artificial intelligence research.
            </p>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: contact@quantumlab.edu</p>
            <p>Phone: 5611115</p>
            <p>Address: Wayne Tower, Gotham City</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="/research" className="footer-link">Research</a>
            <a href="/publications" className="footer-link">Publications</a>
            <a href="/team" className="footer-link">Team</a>
            <a href="/positions" className="footer-link">Positions</a>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">GitHub</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy;  All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--secondary-black);
          border-top: 1px solid var(--accent-dark-gray);
          padding: 3rem 0 1rem;
          margin-top: auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h3,
        .footer-section h4 {
          margin-bottom: 1rem;
          color: var(--accent-white);
        }

        .footer-title {
          background: linear-gradient(135deg, var(--accent-white), var(--highlight));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 1.5rem;
        }

        .footer-description {
          color: var(--accent-gray);
          line-height: 1.6;
        }

        .footer-link,
        .social-link {
          display: block;
          color: var(--accent-gray);
          text-decoration: none;
          margin-bottom: 0.5rem;
          transition: var(--transition);
        }

        .footer-link:hover,
        .social-link:hover {
          color: var(--highlight);
        }

        .footer-bottom {
          border-top: 1px solid var(--accent-dark-gray);
          padding-top: 1rem;
          text-align: center;
          color: var(--accent-gray);
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
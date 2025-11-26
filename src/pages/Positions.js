import React, { useState } from 'react';
import { labData } from '../data/labData';

const Positions = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [applyPosition, setApplyPosition] = useState(null);
  const positions = labData.positions;

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
    setApplyPosition(null);
  };

  const handleApply = (id) => {
    setApplyPosition(applyPosition === id ? null : id);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="positions">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Open Positions</h1>
          <p className="section-subtitle">
            Join our innovative research team and contribute to cutting-edge quantum computing research.
          </p>
          
          <div className="positions-list">
            {positions.map((position) => (
              <div key={position.id} className="position-card card stagger-item">
                <div className="position-header">
                  <div className="position-basic-info">
                    <h2 className="position-title">{position.title}</h2>
                    <div className="position-meta">
                      <span className="position-type">{position.type}</span>
                      <span className="position-duration">{position.duration}</span>
                      <span className="position-deadline">
                        Apply by: {formatDate(position.deadline)}
                      </span>
                    </div>
                  </div>
                  <div className="position-actions">
                    <button
                      className="btn expand-btn"
                      onClick={() => toggleExpand(position.id)}
                    >
                      {expandedId === position.id ? 'Hide Details' : 'View Details'}
                    </button>
                  </div>
                </div>

                {expandedId === position.id && (
                  <div className="position-details">
                    <div className="position-description">
                      <p>{position.description}</p>
                    </div>

                    <div className="position-sections">
                      <div className="position-section">
                        <h4>Requirements</h4>
                        <ul>
                          {position.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="position-section">
                        <h4>Responsibilities</h4>
                        <ul>
                          {position.responsibilities.map((resp, index) => (
                            <li key={index}>{resp}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="position-section">
                        <h4>Benefits</h4>
                        <ul>
                          {position.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="apply-section">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleApply(position.id)}
                      >
                        Apply for this Position
                      </button>

                      {applyPosition === position.id && (
                        <div className="application-form">
                          <h4>Apply for {position.title}</h4>
                          <form className="application-form-content">
                            <div className="form-group">
                              <label>Full Name</label>
                              <input type="text" required />
                            </div>
                            <div className="form-group">
                              <label>Email</label>
                              <input type="email" required />
                            </div>
                            <div className="form-group">
                              <label>CV/Resume</label>
                              <input type="file" accept=".pdf,.doc,.docx" required />
                            </div>
                            <div className="form-group">
                              <label>Cover Letter</label>
                              <textarea rows="4" required></textarea>
                            </div>
                            <div className="form-actions">
                              <button type="submit" className="btn btn-primary">
                                Submit Application
                              </button>
                              <button 
                                type="button" 
                                className="btn"
                                onClick={() => setApplyPosition(null)}
                              >
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .positions-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .position-card {
          transition: var(--transition);
        }

        .position-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .position-basic-info {
          flex: 1;
        }

        .position-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--accent-white);
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .position-meta {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .position-type,
        .position-duration,
        .position-deadline {
          color: var(--accent-gray);
          font-size: 0.9rem;
          padding: 0.25rem 0.75rem;
          background: var(--primary-black);
          border-radius: 20px;
          border: 1px solid var(--accent-dark-gray);
        }

        .position-actions {
          flex-shrink: 0;
        }

        .expand-btn {
          background: transparent;
          border: 1px solid var(--accent-dark-gray);
          color: var(--accent-white);
        }

        .expand-btn:hover {
          border-color: var(--highlight);
          color: var(--highlight);
        }

        .position-details {
          border-top: 1px solid var(--accent-dark-gray);
          padding-top: 1.5rem;
          margin-top: 1rem;
        }

        .position-description {
          margin-bottom: 2rem;
        }

        .position-description p {
          color: var(--accent-gray);
          line-height: 1.6;
          font-size: 1.1rem;
        }

        .position-sections {
          display: grid;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .position-section h4 {
          color: var(--accent-white);
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .position-section ul {
          list-style: none;
          padding: 0;
        }

        .position-section li {
          color: var(--accent-gray);
          padding: 0.5rem 0;
          position: relative;
          padding-left: 1.5rem;
          line-height: 1.5;
        }

        .position-section li::before {
          content: '▸';
          color: var(--highlight);
          position: absolute;
          left: 0;
        }

        .apply-section {
          text-align: center;
          padding-top: 1.5rem;
          border-top: 1px solid var(--accent-dark-gray);
        }

        .application-form {
          margin-top: 2rem;
          padding: 2rem;
          background: var(--primary-black);
          border-radius: 8px;
          border: 1px solid var(--accent-dark-gray);
        }

        .application-form h4 {
          margin-bottom: 1.5rem;
          color: var(--accent-white);
        }

        .application-form-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .form-group label {
          color: var(--accent-white);
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          padding: 0.75rem;
          background: var(--secondary-black);
          border: 1px solid var(--accent-dark-gray);
          border-radius: 6px;
          color: var(--accent-white);
          font-family: inherit;
          transition: var(--transition);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--highlight);
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 1rem;
        }

        .section-subtitle {
          text-align: center;
          color: var(--accent-gray);
          font-size: 1.2rem;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 768px) {
          .position-header {
            flex-direction: column;
            gap: 1rem;
          }

          .position-meta {
            gap: 0.75rem;
          }

          .position-type,
          .position-duration,
          .position-deadline {
            font-size: 0.8rem;
          }

          .form-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Positions;
import React, { useState } from 'react';
import { labData } from '../data/labData';

const Publications = () => {
  const [expandedId, setExpandedId] = useState(null);
  const publications = labData.publications;

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="publications">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Publications</h1>
          <div className="publications-list">
            {publications.map((pub, index) => (
              <div key={index} className="publication-card card stagger-item">
                <div className="publication-header">
                  <h2 className="publication-title">{pub.title}</h2>
                  <button
                    className="expand-btn"
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedId === index ? '−' : '+'}
                  </button>
                </div>
                
                <div className="publication-meta">
                  <span className="authors">{pub.authors.join(', ')}</span>
                  <span className="journal">{pub.journal}</span>
                  <span className="year">{pub.year}</span>
                </div>

                {expandedId === index && (
                  <div className="publication-details">
                    <p className="abstract">{pub.abstract}</p>
                    <div className="publication-actions">
                      <a href={`https://doi.org/${pub.doi}`} className="btn" target="_blank" rel="noopener noreferrer">
                        View Paper
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .publications-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .publication-card {
          transition: var(--transition);
        }

        .publication-header {
          display: flex;
          justify-content: between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .publication-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--accent-white);
          flex: 1;
          line-height: 1.4;
        }

        .expand-btn {
          background: none;
          border: 1px solid var(--accent-dark-gray);
          color: var(--accent-white);
          width: 2rem;
          height: 2rem;
          border-radius: 4px;
          cursor: pointer;
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .expand-btn:hover {
          border-color: var(--highlight);
          color: var(--highlight);
        }

        .publication-meta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .authors,
        .journal,
        .year {
          color: var(--accent-gray);
          font-size: 0.9rem;
        }

        .authors {
          font-weight: 500;
        }

        .journal {
          font-style: italic;
        }

        .publication-details {
          border-top: 1px solid var(--accent-dark-gray);
          padding-top: 1rem;
          margin-top: 1rem;
        }

        .abstract {
          color: var(--accent-gray);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .publication-actions {
          display: flex;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .publication-header {
            flex-direction: column;
            gap: 0.5rem;
          }

          .publication-meta {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Publications;
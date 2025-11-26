import React, { useState } from 'react';
import { labData } from '../data/labData';

const Research = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { research } = labData;

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="research">
      {/* Section 1: Research Images Gallery */}
      <section className="section">
        <div className="container">
          <h1 className="section-title">Research Gallery</h1>
          <p className="section-subtitle">
            Explore our cutting-edge research facilities and experimental setups
          </p>
          
          <div className="gallery-grid">
            {research.images.map((image) => (
              <div 
                key={image.id} 
                className="gallery-item card stagger-item"
                onClick={() => openImageModal(image)}
              >
                <div className="image-container">
                  <div className="image-placeholder">
                    {image.alt}
                  </div>
                </div>
                <div className="image-caption">
                  <h4>{image.alt}</h4>
                  <p>{image.caption}</p>
                </div>
                <div className="image-overlay">
                  <span className="view-icon">👁️</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Research Summary */}
      <section className="section research-summary-section">
        <div className="container">
          <div className="research-summary">
            <div className="summary-header fade-in-up">
              <h2 className="summary-title">{research.summary.title}</h2>
              <p className="summary-description">{research.summary.description}</p>
            </div>

            <div className="research-areas-grid">
              {research.summary.keyAreas.map((area, index) => (
                <div key={index} className="research-area-card card stagger-item">
                  <div className="area-icon">🔬</div>
                  <h3 className="area-title">{area.title}</h3>
                  <p className="area-description">{area.description}</p>
                </div>
              ))}
            </div>

            <div className="achievements-section fade-in-up">
              <h3 className="achievements-title">Key Achievements</h3>
              <div className="achievements-list">
                {research.summary.achievements.map((achievement, index) => (
                  <div key={index} className="achievement-item">
                    <span className="achievement-bullet">✓</span>
                    <span className="achievement-text">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Research Funding */}
      <section className="section funding-section">
        <div className="container">
          <div className="funding-header fade-in-up">
            <h2 className="section-title">{research.funding.title}</h2>
            <p className="funding-description">{research.funding.description}</p>
          </div>

          <div className="grants-grid">
            {research.funding.grants.map((grant, index) => (
              <div key={index} className="grant-card card stagger-item">
                <div className="grant-header">
                  <h3 className="grant-title">{grant.title}</h3>
                  <span className={`grant-status ${grant.status.toLowerCase()}`}>
                    {grant.status}
                  </span>
                </div>
                
                <div className="grant-details">
                  <div className="grant-detail">
                    <span className="detail-label">Amount:</span>
                    <span className="detail-value highlight">{grant.amount}</span>
                  </div>
                  <div className="grant-detail">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{grant.duration}</span>
                  </div>
                  <div className="grant-detail">
                    <span className="detail-label">Provider:</span>
                    <span className="detail-value">{grant.provider}</span>
                  </div>
                  <div className="grant-detail">
                    <span className="detail-label">Focus Area:</span>
                    <span className="detail-value">{grant.focus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="partners-section fade-in-up">
            <h3 className="partners-title">Our Research Partners</h3>
            <div className="partners-grid">
              {research.funding.partners.map((partner, index) => (
                <div key={index} className="partner-item">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeImageModal}>×</button>
            <div className="modal-image-container">
              <div className="modal-image-placeholder">
                {selectedImage.alt}
              </div>
            </div>
            <div className="modal-caption">
              <h3>{selectedImage.alt}</h3>
              <p>{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .research-summary-section {
          background: var(--secondary-black);
          border-top: 1px solid var(--accent-dark-gray);
          border-bottom: 1px solid var(--accent-dark-gray);
        }

        .funding-section {
          background: var(--primary-black);
        }

        /* Gallery Styles */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .gallery-item {
          position: relative;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
          border-radius: 16px;
        }

        .gallery-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .image-container {
          width: 100%;
          height: 200px;
          background: var(--accent-dark-gray);
          border-radius: 12px 12px 0 0;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-placeholder {
          color: var(--accent-gray);
          font-size: 0.9rem;
          text-align: center;
          padding: 1rem;
        }

        .image-caption {
          padding: 1.5rem;
        }

        .image-caption h4 {
          color: var(--accent-white);
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }

        .image-caption p {
          color: var(--accent-gray);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 212, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .gallery-item:hover .image-overlay {
          opacity: 1;
        }

        .view-icon {
          font-size: 2rem;
          transform: scale(0.8);
          transition: all 0.3s ease;
        }

        .gallery-item:hover .view-icon {
          transform: scale(1);
        }

        /* Research Summary Styles */
        .research-summary {
          max-width: 1200px;
          margin: 0 auto;
        }

        .summary-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .summary-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, var(--accent-white), var(--highlight));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .summary-description {
          font-size: 1.2rem;
          color: var(--accent-gray);
          line-height: 1.7;
          max-width: 800px;
          margin: 0 auto;
        }

        .research-areas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .research-area-card {
          text-align: center;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .research-area-card:hover {
          transform: translateY(-5px);
          border-color: var(--highlight);
        }

        .area-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .area-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--accent-white);
        }

        .area-description {
          color: var(--accent-gray);
          line-height: 1.6;
        }

        .achievements-section {
          background: var(--primary-black);
          padding: 2rem;
          border-radius: 16px;
          border: 1px solid var(--accent-dark-gray);
        }

        .achievements-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--accent-white);
          text-align: center;
        }

        .achievements-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
        }

        .achievement-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
        }

        .achievement-bullet {
          color: var(--highlight);
          font-weight: bold;
          font-size: 1.1rem;
        }

        .achievement-text {
          color: var(--accent-gray);
          line-height: 1.5;
        }

        /* Funding Styles */
        .funding-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .funding-description {
          font-size: 1.2rem;
          color: var(--accent-gray);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .grants-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .grant-card {
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .grant-card:hover {
          transform: translateY(-5px);
          border-color: var(--highlight);
        }

        .grant-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .grant-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--accent-white);
          margin-right: 1rem;
        }

        .grant-status {
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .grant-status.active {
          background: rgba(0, 255, 0, 0.1);
          color: #00ff00;
          border: 1px solid rgba(0, 255, 0, 0.3);
        }

        .grant-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .grant-detail {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .detail-label {
          color: var(--accent-gray);
          font-weight: 500;
        }

        .detail-value {
          color: var(--accent-white);
          font-weight: 600;
        }

        .detail-value.highlight {
          color: var(--highlight);
        }

        .partners-section {
          text-align: center;
        }

        .partners-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
          color: var(--accent-white);
        }

        .partners-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .partner-item {
          padding: 1rem 1.5rem;
          background: var(--secondary-black);
          border: 1px solid var(--accent-dark-gray);
          border-radius: 8px;
          color: var(--accent-gray);
          transition: all 0.3s ease;
        }

        .partner-item:hover {
          border-color: var(--highlight);
          color: var(--accent-white);
          transform: translateY(-2px);
        }

        /* Modal Styles */
        .image-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }

        .modal-content {
          background: var(--secondary-black);
          border-radius: 20px;
          max-width: 800px;
          width: 100%;
          position: relative;
          border: 1px solid var(--accent-dark-gray);
          overflow: hidden;
        }

        .close-button {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0, 0, 0, 0.7);
          border: none;
          color: var(--accent-white);
          font-size: 2rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .close-button:hover {
          background: var(--highlight);
          color: var(--primary-black);
        }

        .modal-image-container {
          width: 100%;
          height: 400px;
          background: var(--accent-dark-gray);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-image-placeholder {
          color: var(--accent-gray);
          font-size: 1.2rem;
          text-align: center;
          padding: 2rem;
        }

        .modal-caption {
          padding: 2rem;
        }

        .modal-caption h3 {
          color: var(--accent-white);
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .modal-caption p {
          color: var(--accent-gray);
          line-height: 1.6;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }

          .research-areas-grid {
            grid-template-columns: 1fr;
          }

          .grants-grid {
            grid-template-columns: 1fr;
          }

          .grant-header {
            flex-direction: column;
            gap: 1rem;
          }

          .summary-title {
            font-size: 2rem;
          }

          .modal-content {
            margin: 1rem;
          }

          .modal-image-container {
            height: 300px;
          }
        }

        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }

          .partners-grid {
            grid-template-columns: 1fr;
          }

          .achievements-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Research;
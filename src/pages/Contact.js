import React, { useState } from 'react';
import { labData } from '../data/labData';

const Contact = () => {
 
  const { contact } = labData;
  return (
    <div className="contact">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Contact Us</h1>
          
          <div className="contact-content-centered">
            <div className="contact-info">
              <div className="contact-card card">
                <h2>Get in Touch</h2>
                <p>We'd love to hear from you. Reach out to us for collaborations, inquiries, or just to say hello.</p>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <div className="contact-text">
                      <h4>Address : {contact.address}</h4>
                      
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">📞</div>
                    <div className="contact-text">
                      <h4>Phone : {contact.phone}</h4>
                   
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">✉️</div>
                    <div className="contact-text">
                      <h4>Email : {contact.email}</h4>
                    
                    </div>
                  </div>
                </div>

                <div className="social-links">
                  <h4>Follow Us</h4>
                  <div className="social-icons">
                    <a href={contact.social.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                      Twitter
                    </a>
                    <a href={contact.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                      LinkedIn
                    </a>
                    <a href={contact.social.github} target="_blank" rel="noopener noreferrer" className="social-link">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
          align-items: start;
        }

        .contact-card h2,
        .contact-form-card h2 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          color: var(--accent-white);
        }

        .contact-card p {
          color: var(--accent-gray);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .contact-details {
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .contact-icon {
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .contact-text h4 {
          color: var(--accent-white);
          margin-bottom: 0.25rem;
          font-size: 1rem;
        }

        .contact-text p {
          color: var(--accent-gray);
          margin: 0;
          line-height: 1.5;
        }

        .social-links h4 {
          color: var(--accent-white);
          margin-bottom: 1rem;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          color: var(--accent-gray);
          text-decoration: none;
          padding: 0.5rem 1rem;
          border: 1px solid var(--accent-dark-gray);
          border-radius: 6px;
          transition: var(--transition);
        }

        .social-link:hover {
          color: var(--highlight);
          border-color: var(--highlight);
        }


        @media (max-width: 968px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-item {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }

          .social-icons {
            justify-content: center;
          }

          .submit-btn {
            align-self: stretch;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
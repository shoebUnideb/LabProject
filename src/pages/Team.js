import React from 'react';
import { labData } from '../data/labData';

const Team = () => {
  const { faculty, students } = labData.team;

  return (
    <div className="team">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Our Team</h1>
          
          {/* Faculty Section */}
          <div className="team-section">
            <h2 className="team-section-title">Faculty</h2>
            <div className="grid grid-2">
              {faculty.map((member, index) => (
                <div key={index} className="team-card card stagger-item">
                  <div className="team-member">
                    <div className="member-image">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="member-info">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-role">{member.role}</p>
                      <p className="member-bio">{member.bio}</p>
                      <div className="member-details">
                        <p><strong>Research:</strong> {member.research}</p>
                        <p><strong>Email:</strong> {member.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Students Section */}
          <div className="team-section">
            <h2 className="team-section-title">Students & Researchers</h2>
            <div className="grid grid-3">
              {students.map((student, index) => (
                <div key={index} className="team-card card stagger-item">
                  <div className="team-member">
                    <div className="member-image">
                      <img src={student.image} alt={student.name} />
                    </div>
                    <div className="member-info">
                      <h3 className="member-name">{student.name}</h3>
                      <p className="member-role">{student.role}</p>
                      <p className="member-research">{student.research}</p>
                      <p className="member-year">{student.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .team-section {
          margin-bottom: 4rem;
        }

        .team-section-title {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 2rem;
          color: var(--accent-white);
          text-align: center;
        }

        .team-member {
          text-align: center;
        }

        .member-image {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 1.5rem;
          background: var(--accent-dark-gray);
          border: 3px solid var(--accent-dark-gray);
        }

        .member-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .member-name {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--accent-white);
        }

        .member-role {
          color: var(--highlight);
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .member-bio,
        .member-research,
        .member-details {
          color: var(--accent-gray);
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }

        .member-details p {
          margin-bottom: 0.25rem;
        }

        @media (max-width: 768px) {
          .member-image {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>
    </div>
  );
};

export default Team;
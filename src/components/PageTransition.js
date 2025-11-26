import React from 'react';

const PageTransition = ({ children }) => {
  return (
    <div className="page-transition">
      {children}
      <style jsx>{`
        .page-transition {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out 0.2s forwards;
        }
      `}</style>
    </div>
  );
};

export default PageTransition;
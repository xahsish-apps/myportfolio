import React from "react";

const PageTransition = ({ children }) => {
  return (
    <div className="animate-fade-in min-h-[60vh]">
      {children}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in {
          animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
};

export default PageTransition;

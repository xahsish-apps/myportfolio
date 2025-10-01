import React from "react";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech) (MDU), Rohtak Haryana",
    field: "Computer Science & Engineering",
    institution: "st.andrews institute of technology and management farukhnagar Haryana",
  year: "2023 - 2027",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><path d="M12 3L2 9l10 6 10-6-10-6zm0 13.5l-8-4.8V17a2 2 0 002 2h12a2 2 0 002-2v-5.3l-8 4.8z" fill="#14b8a6"/></svg>
    )
  },
  {
    degree: "Skills FullStack Developer",
    field: "Training With Apna College",
    institution: "Java (DSA)",
    year: "2024",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#22d3ee"/><path d="M8 16l4-8 4 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    )
  },
   {
    degree: "10+2 G.P Maurya inter College SahJanwa Gorakhpur (UP)",
    field: "Science (PCM)",
    institution: "G.P Maurya inter College SahJanwa Gorakhpur (UP)",
    year: "2021 - 2023",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#22d3ee"/><path d="M8 16l4-8 4 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    )
  }
];

const Education = () => (
  <section className="py-24 px-4 bg-gradient-to-br from-pink-200 via-yellow-100 via-orange-100 to-teal-100 text-orange-900 relative overflow-hidden" id="education">
    {/* Animated background blobs */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
      <div className="absolute left-[-80px] top-[-80px] w-96 h-96 bg-gradient-to-br from-pink-400 via-yellow-300 to-teal-400 rounded-full blur-3xl opacity-40 animate-blob1"></div>
      <div className="absolute right-[-60px] bottom-[-60px] w-80 h-80 bg-gradient-to-tr from-cyan-400 via-pink-300 to-yellow-200 rounded-full blur-3xl opacity-40 animate-blob2"></div>
      <div className="absolute left-1/2 top-1/2 w-72 h-72 bg-gradient-to-tl from-yellow-200 via-teal-300 to-pink-200 rounded-full blur-2xl opacity-30 animate-blob3"></div>
    </div>
    <div className="max-w-5xl mx-auto relative z-10">
      <h2 className="text-5xl font-extrabold mb-14 text-center bg-gradient-to-r from-pink-500 via-yellow-400 to-teal-400 bg-clip-text text-transparent drop-shadow-2xl animate-gradient-move">Education</h2>
      <div className="grid md:grid-cols-2 gap-12">
        {education.map((item, idx) => (
          <div key={idx} className="relative group rounded-3xl p-1 bg-gradient-to-tr from-pink-400/70 via-yellow-200/60 to-teal-400/80 shadow-2xl animate-fade-in hover:scale-[1.05] transition-transform duration-500 border-4 border-transparent hover:border-pink-400/80 hover:shadow-pink-200/60">
            <div className="absolute -top-8 right-6 w-20 h-20 bg-pink-400 opacity-30 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 z-0 animate-blob1"></div>
            <div className="absolute -bottom-8 left-6 w-16 h-16 bg-yellow-300 opacity-30 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500 z-0 animate-blob2"></div>
            <div className="relative z-10 bg-white/60 backdrop-blur-2xl rounded-2xl p-10 flex flex-col items-center text-center border-2 border-white/30 bg-clip-padding min-h-[260px] text-gray-900 shadow-xl glassmorphism-card">
              <div className="mb-4 animate-bounce-slow">{item.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg animated-border-text" style={{ color: '#111' }}>{item.degree}</h3>
              <div className="text-lg font-medium mb-1 text-blue-600 group-hover:text-blue-700 transition-colors duration-300">{item.field}</div>
              <div className="mb-2 text-gray-600 font-semibold">{item.institution}</div>
              <div className="text-sm text-teal-700 font-bold tracking-wide">{item.year}</div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradientMove 3s linear infinite alternate;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 3.5s ease-in-out infinite alternate;
        }
        @keyframes float {
          0% { transform: translateY(0); }
          100% { transform: translateY(-12px); }
        }
        .animate-fade-in {
          animation: fadeIn 1.2s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob1 {
          animation: blob1 12s ease-in-out infinite alternate;
        }
        @keyframes blob1 {
          0% { transform: scale(1) translate(0,0); }
          100% { transform: scale(1.15) translate(40px, 30px); }
        }
        .animate-blob2 {
          animation: blob2 10s ease-in-out infinite alternate;
        }
        @keyframes blob2 {
          0% { transform: scale(1) translate(0,0); }
          100% { transform: scale(1.1) translate(-30px, -20px); }
        }
        .animate-blob3 {
          animation: blob3 14s ease-in-out infinite alternate;
        }
        @keyframes blob3 {
          0% { transform: scale(1) translate(0,0); }
          100% { transform: scale(1.08) translate(-20px, 40px); }
        }
        .glassmorphism-card {
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
          border-radius: 2rem;
          border: 1.5px solid rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.35);
          backdrop-filter: blur(12px);
        }
        .animate-bounce-slow {
          animation: bounce 2.2s infinite cubic-bezier(.5,1.8,.5,1);
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(-10%); }
          50% { transform: translateY(10%); }
        }
        .animated-border-text {
          position: relative;
        }
        .animated-border-text:after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -6px; height: 4px;
          background: linear-gradient(90deg, #f472b6, #facc15, #2dd4bf, #f472b6);
          background-size: 200% 200%;
          animation: borderMove 2.5s linear infinite alternate;
          border-radius: 2px;
        }
        @keyframes borderMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  </section>
);

export default Education;

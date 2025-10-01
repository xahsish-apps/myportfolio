
import React from "react";

const About = () => (
  <section className="relative py-24 px-4 bg-gradient-to-br from-fuchsia-200 via-cyan-100 via-yellow-100 to-pink-200 text-orange-900 overflow-hidden animate-about-bg" id="about">
    {/* Unique animated background shapes */}
    <div className="absolute -top-24 left-1/4 w-96 h-96 bg-gradient-to-tr from-fuchsia-400 via-yellow-300 to-cyan-400 opacity-30 rounded-full blur-3xl animate-blob1"></div>
    <div className="absolute -bottom-32 right-1/3 w-80 h-80 bg-gradient-to-br from-cyan-400 via-pink-300 to-yellow-200 opacity-30 rounded-full blur-3xl animate-blob2"></div>
    <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-tl from-yellow-200 via-teal-300 to-pink-200 opacity-20 rounded-full blur-2xl animate-blob3"></div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Animated Logo with Glow */}
        <div className="flex-shrink-0 animate-bounce-slow shadow-2xl">
          <div className="bg-gradient-to-tr from-teal-400 to-cyan-400 rounded-full p-2 shadow-2xl border-4 border-white ring-8 ring-teal-500/20">
            <img src="/profile4.jpg" alt="Logo" className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg" />
          </div>
        </div>
        {/* Animated Text and Card */}
        <div className="flex-1 bg-gradient-to-br from-fuchsia-100 via-yellow-50 to-cyan-100 rounded-3xl p-10 shadow-2xl border-4 border-fuchsia-200/60 backdrop-blur-xl text-gray-900 unique-panel animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2 animate-gradient-move drop-shadow-lg unique-animated-text" style={{ color: 'darkgreen', background: 'linear-gradient(90deg,#16a34a,#f472b6,#facc15,#2dd4bf,#16a34a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Hey.. I am Neha Chaudhary</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-teal-400 pr-2" style={{animation: 'typing 2.5s steps(30, end), blink-caret .75s step-end infinite'}}>Frontend Developer & Designer</h3>
          <p className="mb-4 text-lg" style={{ color: '#111' }}>I am a passionate frontend developer with experience in building responsive and accessible web applications using React and modern web technologies.</p>
          <ul className="list-disc pl-6 space-y-1" style={{ color: '#111' }}>
            <li>React, JavaScript, TypeScript</li>
            <li>Tailwind CSS, Styled Components</li>
            <li>UI/UX Design</li>
            <li>REST APIs</li>
          </ul>
        </div>
      </div>
    {/* Custom Animations */}
    <style>{`
      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }
      @keyframes blink-caret {
        0%, 100% { border-color: transparent }
        50% { border-color: #14b8a6; }
      }
      .animate-typing {
        animation: typing 2.5s steps(30, end), blink-caret .75s step-end infinite;
        width: fit-content;
        max-width: 100%;
        display: inline-block;
      }
      .animate-gradient-move {
        background-size: 200% 200%;
        animation: gradientMove 3s ease-in-out infinite;
      }
      @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-bounce-slow {
        animation: bounce 2.5s infinite;
      }
      .animate-pulse-slow {
        animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      .animate-about-bg {
        background-size: 200% 200%;
        animation: aboutBgMove 8s linear infinite alternate;
      }
      @keyframes aboutBgMove {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
      }
      .unique-panel {
        box-shadow: 0 8px 32px 0 rgba(244,114,182,0.18);
        border-radius: 2rem;
        border: 2.5px solid rgba(244,114,182,0.25);
        background: rgba(255,255,255,0.55);
        backdrop-filter: blur(16px);
        position: relative;
        overflow: hidden;
      }
      .unique-animated-text {
        background-size: 300% 300%;
        animation: uniqueTextMove 4s linear infinite alternate;
      }
      @keyframes uniqueTextMove {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
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
    `}</style>
  </section>
);

export default About;

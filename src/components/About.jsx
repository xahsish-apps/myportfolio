
import React from "react";

const About = () => (
  <section className="relative py-24 px-4 bg-gradient-to-br from-orange-100 via-yellow-200 via-pink-100 to-orange-200 text-orange-900 overflow-hidden" id="about">
    {/* Decorative blurred shapes */}
    <div className="absolute -top-20 -left-20 w-96 h-96 bg-teal-400 opacity-20 rounded-full filter blur-3xl animate-pulse-slow"></div>
    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400 opacity-20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Animated Logo with Glow */}
        <div className="flex-shrink-0 animate-bounce-slow shadow-2xl">
          <div className="bg-gradient-to-tr from-teal-400 to-cyan-400 rounded-full p-2 shadow-2xl border-4 border-white ring-8 ring-teal-500/20">
            <img src="/profile2.jpg" alt="Logo" className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg" />
          </div>
        </div>
        {/* Animated Text and Card */}
        <div className="flex-1 bg-white/80 rounded-2xl p-8 shadow-xl backdrop-blur-md border border-white/10 text-gray-900">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-move drop-shadow-lg">Hi, I'm Ashish Kumar</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-teal-400 pr-2" style={{animation: 'typing 2.5s steps(30, end), blink-caret .75s step-end infinite'}}>Frontend Developer & Designer</h3>
          <p className="mb-4 text-lg text-gray-800">I am a passionate frontend developer with experience in building responsive and accessible web applications using React and modern web technologies.</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
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
    `}</style>
  </section>
);

export default About;

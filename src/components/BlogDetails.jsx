
import React from "react";

const BlogDetails = () => (
  <section className="py-24 px-4 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-fuchsia-200 via-sky-200 via-emerald-100 to-yellow-200">
    {/* Animated background blobs */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
      <div className="absolute left-[-80px] top-[-80px] w-96 h-96 bg-gradient-to-br from-fuchsia-400 via-sky-300 to-emerald-300 rounded-full blur-3xl opacity-40 animate-blob1"></div>
      <div className="absolute right-[-60px] bottom-[-60px] w-80 h-80 bg-gradient-to-tr from-sky-400 via-fuchsia-300 to-yellow-200 rounded-full blur-3xl opacity-40 animate-blob2"></div>
      <div className="absolute left-1/2 top-1/2 w-72 h-72 bg-gradient-to-tl from-yellow-200 via-emerald-300 to-fuchsia-200 rounded-full blur-2xl opacity-30 animate-blob3"></div>
    </div>
    <div className="max-w-3xl mx-auto bg-white/90 rounded-3xl shadow-2xl p-10 border-2 border-sky-300 animate-fade-in-up relative z-10">
      <h1 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-fuchsia-600 via-sky-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-lg animate-gradient-move">My Journey as a Developer: <span className="block">Embracing the Power of Code</span></h1>
      <article className="prose prose-lg" style={{ color: '#222', maxHeight: '60vh', overflowY: 'auto', lineHeight: '1.7' }}>
        <p>Technology has always fascinated me. From the first time I interacted with a computer, I knew I wanted to create, build, and solve problems using code. My journey as a developer began with curiosity and a desire to understand how things work beneath the surface.</p>
        <p>Learning programming languages like JavaScript and frameworks like React opened up a world of possibilities. I started building small projects, each one teaching me something new about logic, design, and user experience. The satisfaction of seeing an idea come to life on the screen is unmatched.</p>
        <p>As I delved deeper, I realized that development is not just about writing code—it's about solving real-world problems. I learned the importance of clean code, maintainability, and collaboration. Working on group projects taught me the value of teamwork and communication.</p>
        <p>One of the most rewarding aspects of being a developer is the ability to continuously learn. The tech world evolves rapidly, and staying updated with the latest tools and best practices is both a challenge and a thrill. I embrace this ever-changing landscape, always eager to explore new technologies.</p>
        <p>Building a blog platform was a milestone in my journey. It allowed me to combine my love for writing with my technical skills. Designing a user-friendly interface, implementing markdown support, and ensuring accessibility were all part of the process. Each challenge pushed me to grow and refine my craft.</p>
        <p>Through blogging, I discovered the power of sharing knowledge. Writing tutorials and documenting my experiences not only helped others but also deepened my own understanding. The feedback and connections I made through my blog have been invaluable.</p>
        <p>As a full-stack developer, I enjoy working on both the frontend and backend. Creating seamless user experiences, optimizing performance, and ensuring security are all aspects I take pride in. I believe that great software is built with attention to detail and a passion for excellence.</p>
        <p>Looking ahead, I am excited to tackle new challenges and contribute to meaningful projects. My goal is to build applications that make a positive impact, whether it's simplifying daily tasks or enabling new forms of creativity.</p>
        <p>Thank you for reading my story. If you're interested in collaborating, have questions, or just want to connect, feel free to reach out. Let's continue to learn, build, and inspire each other in this amazing world of technology!</p>
        <p>Happy coding!<br/>— Neha Chaudhary</p>
      </article>
    </div>
    <style>{`
      .animate-fade-in-up {
        opacity: 1 !important;
        animation: fadeInUp 1s cubic-bezier(0.4,0,0.2,1);
      }
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: none; }
      }
      .animate-gradient-move {
        background-size: 200% 200%;
        animation: gradientMove 3s linear infinite alternate;
      }
      @keyframes gradientMove {
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

export default BlogDetails;

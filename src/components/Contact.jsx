
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";





const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setSent(false);
    setError("");
  emailjs.sendForm('service_ci5vare', 'template_17somzk', form.current, 'DGtUjrCVBZLLgAArT')
      .then((result) => {
        setSent(true);
      }, (error) => {
        setError("Failed to send. Please try again.");
      });
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-pink-200 via-yellow-100 via-orange-100 to-teal-100 text-orange-900" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-pink-500 via-yellow-400 to-teal-400 bg-clip-text text-transparent drop-shadow-2xl animate-gradient-move">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Animated Card with Info */}
          <div className="relative group rounded-3xl p-1 bg-gradient-to-tr from-pink-400/70 via-yellow-200/60 to-teal-400/80 shadow-2xl animate-fade-in">
            <div className="absolute -top-8 right-6 w-20 h-20 bg-pink-400 opacity-30 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 z-0"></div>
            <div className="absolute -bottom-8 left-6 w-16 h-16 bg-yellow-300 opacity-30 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500 z-0"></div>
            <div className="relative z-10 bg-white/90 backdrop-blur-2xl rounded-2xl p-10 flex flex-col items-center text-center border-2 border-transparent bg-clip-padding min-h-[340px] text-gray-900 shadow-xl">
              <div className="mb-4 animate-float">
                <svg width="56" height="56" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#f472b6" opacity="0.18" />
                  <path d="M7 9l5 5 5-5" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-400 via-yellow-400 to-teal-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">Let's Connect</h3>
              <p className="mb-4 text-blue-600 group-hover:text-blue-700 transition-colors duration-300 font-medium">I'm open to opportunities, collaborations, and new connections. Reach out and I'll reply soon!</p>
              <div className="flex space-x-4 mt-2">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-yellow-400 transition-colors text-3xl" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-teal-400 transition-colors text-3xl" title="GitHub"><i className="fab fa-github"></i></a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-pink-400 transition-colors text-3xl" title="Twitter"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
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
        `}</style>
          {/* Right: Contact Form Card */}
          <form ref={form} onSubmit={sendEmail} className="relative group rounded-3xl p-1 bg-gradient-to-tr from-pink-400 via-yellow-300 to-teal-400 shadow-2xl animate-fade-in">
            <div className="relative z-10 bg-white/90 backdrop-blur-2xl rounded-2xl p-8 flex flex-col border-2 border-transparent bg-clip-padding text-gray-900">
              <input name="user_name" type="text" placeholder="Your Name" className="rounded-2xl px-5 py-3 mb-5 border-2 border-transparent bg-gradient-to-r from-orange-100 via-yellow-100 to-pink-100 focus:border-cyan-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300 shadow-lg placeholder:text-pink-400/80 text-gray-900 font-semibold hover:scale-105" required />
              <input name="user_email" type="email" placeholder="Your Email" className="rounded-2xl px-5 py-3 mb-5 border-2 border-transparent bg-gradient-to-r from-orange-100 via-yellow-100 to-pink-100 focus:border-cyan-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all duration-300 shadow-lg placeholder:text-yellow-500/80 text-gray-900 font-semibold hover:scale-105" required />
              <textarea name="message" placeholder="Your Message" className="rounded-2xl px-5 py-3 mb-5 border-2 border-transparent bg-gradient-to-r from-orange-100 via-yellow-100 to-pink-100 focus:border-cyan-400 focus:ring-2 focus:ring-teal-200 outline-none transition-all duration-300 shadow-lg placeholder:text-teal-400/80 text-gray-900 font-semibold hover:scale-105" rows="5" required></textarea>
              <button type="submit" className="inline-block mt-auto px-10 py-4 rounded-full font-extrabold text-lg text-white shadow-2xl relative overflow-hidden animated-contact-btn unique-contact-btn group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl animate-bounce-slow z-20">✉️</span>
                <span className="relative z-10 pl-8 pr-2">Send Message</span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 animate-btn-gradient opacity-80 group-hover:opacity-100 transition-opacity"></span>
                <span className="absolute -inset-1 rounded-full border-4 border-pink-400/60 group-hover:border-yellow-400/80 blur-sm opacity-60 group-hover:opacity-90 transition-all duration-300 pointer-events-none"></span>
              </button>
              {sent && <p className="mt-4 text-green-600 font-bold">Message sent successfully!</p>}
              {error && <p className="mt-4 text-red-600 font-bold">{error}</p>}
            </div>
        <style>{`
          .animated-contact-btn {
            box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18);
            transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s;
          }
          .animated-contact-btn:hover {
            transform: scale(1.06) translateY(-2px) rotate(-1deg);
            box-shadow: 0 12px 40px 0 rgba(255, 105, 180, 0.25), 0 2px 8px 0 rgba(0,0,0,0.10);
          }
          .animated-contact-btn span.absolute {
            z-index: 1;
            opacity: 0.85;
            transition: opacity 0.3s;
          }
          .animated-contact-btn:hover span.absolute {
            opacity: 1;
            filter: blur(2px) brightness(1.2) drop-shadow(0 0 12px #f472b6);
          }
          .animated-contact-btn span.relative {
            z-index: 10;
          }
          .unique-contact-btn span.animate-bounce-slow {
            animation: bounceSlow 2.2s infinite cubic-bezier(.5,1.8,.5,1);
          }
          @keyframes bounceSlow {
            0%, 100% { transform: translateY(-10%); }
            50% { transform: translateY(10%); }
          }
          .animate-btn-gradient {
            background-size: 200% 200%;
            animation: btnGradientMove 2.5s linear infinite alternate;
          }
          @keyframes btnGradientMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}</style>
          </form>
        <style>{`
          .animate-fade-in {
            animation: fadeIn 1.2s cubic-bezier(0.4,0,0.2,1);
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
        </div>
        <style>{`
          .animate-float {
            animation: float 3.5s ease-in-out infinite alternate;
          }
          @keyframes float {
            0% { transform: translateY(0); }
            100% { transform: translateY(-12px); }
          }
        `}</style>
      </div>
    </section>
  );
}


export default Contact;

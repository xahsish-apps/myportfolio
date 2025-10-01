
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import AnimatedSection from "./components/AnimatedSection";
import Support from "./components/Support";
import BlogDetails from "./components/BlogDetails";
import EcommerceBusiness from "./components/EcommerceBusiness";
import PortfolioSummary from "./components/PortfolioSummary";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-200 via-yellow-100 via-orange-100 to-teal-100 animate-bg-gradient">
        {/* Animated background blobs */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute left-[-80px] top-[-80px] w-96 h-96 bg-gradient-to-br from-pink-400 via-yellow-300 to-teal-400 rounded-full blur-3xl opacity-40 animate-blob1"></div>
          <div className="absolute right-[-60px] bottom-[-60px] w-80 h-80 bg-gradient-to-tr from-cyan-400 via-pink-300 to-yellow-200 rounded-full blur-3xl opacity-40 animate-blob2"></div>
          <div className="absolute left-1/2 top-1/2 w-72 h-72 bg-gradient-to-tl from-yellow-200 via-teal-300 to-pink-200 rounded-full blur-2xl opacity-30 animate-blob3"></div>
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={
                <PageTransition>
                  {/* Hero removed as requested */}
                  <AnimatedSection><About /></AnimatedSection>
                  <AnimatedSection><Education /></AnimatedSection>
                  <AnimatedSection><Projects /></AnimatedSection>
                  <AnimatedSection><Contact /></AnimatedSection>
                </PageTransition>
              } />
              <Route path="/support" element={<PageTransition><Support /></PageTransition>} />
              <Route path="/education" element={<PageTransition><AnimatedSection><Education /></AnimatedSection></PageTransition>} />
              <Route path="/about" element={<PageTransition><AnimatedSection><About /></AnimatedSection></PageTransition>} />
              <Route path="/projects" element={<PageTransition><AnimatedSection><Projects /></AnimatedSection></PageTransition>} />
              <Route path="/contact" element={<PageTransition><AnimatedSection><Contact /></AnimatedSection></PageTransition>} />
              <Route path="/blog-details" element={<PageTransition><AnimatedSection><BlogDetails /></AnimatedSection></PageTransition>} />
              <Route path="/ecommerce-business" element={<PageTransition><AnimatedSection><EcommerceBusiness /></AnimatedSection></PageTransition>} />
              <Route path="/portfolio-summary" element={<PageTransition><AnimatedSection><PortfolioSummary /></AnimatedSection></PageTransition>} />
            </Routes>
          </main>
          <Footer />
        </div>
        <style>{`
          .animate-bg-gradient {
            background-size: 200% 200%;
            animation: gradientMove 6s linear infinite alternate;
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
      </div>
    </Router>
  );
}

export default App;

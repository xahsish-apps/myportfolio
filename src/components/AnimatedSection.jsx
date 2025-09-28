import React, { useRef, useEffect } from "react";

const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("opacity-0");
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add("animate-fade-in-up-section");
        el.classList.remove("opacity-0");
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section ref={ref} className={className + " transition-all duration-700"}>
      {children}
      <style>{`
        @keyframes fadeInUpSection {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in-up-section {
          opacity: 1 !important;
          animation: fadeInUpSection 1.1s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </section>
  );
};

export default AnimatedSection;

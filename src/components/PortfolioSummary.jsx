import React from "react";

const PortfolioSummary = () => (
  <section className="py-24 px-4 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-sky-100 via-pink-100 via-blue-100 to-indigo-100">
    {/* Animated background blobs */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
      <div className="absolute left-[-80px] top-[-80px] w-96 h-96 bg-gradient-to-br from-sky-400 via-pink-300 to-indigo-300 rounded-full blur-3xl opacity-40 animate-blob1"></div>
      <div className="absolute right-[-60px] bottom-[-60px] w-80 h-80 bg-gradient-to-tr from-blue-400 via-pink-300 to-sky-200 rounded-full blur-3xl opacity-40 animate-blob2"></div>
      <div className="absolute left-1/2 top-1/2 w-72 h-72 bg-gradient-to-tl from-indigo-200 via-blue-300 to-pink-200 rounded-full blur-2xl opacity-30 animate-blob3"></div>
    </div>
    <div className="max-w-3xl mx-auto bg-white/90 rounded-3xl shadow-2xl p-10 border-2 border-sky-300 animate-fade-in-up relative z-10">
      <h1 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-sky-600 via-pink-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg animate-gradient-move">Portfolio Website: A Journey of Growth and Creativity</h1>
      <article className="prose prose-lg" style={{ color: '#222', maxHeight: '60vh', overflowY: 'auto', lineHeight: '1.7' }}>
        <p>1. My portfolio website is more than just a collection of projects—it's a living testament to my journey as a developer and designer.</p>
        <p>2. The homepage welcomes visitors with a clean, modern design, reflecting my commitment to aesthetics and usability.</p>
        <p>3. Every section is crafted with attention to detail, from the animated hero banner to the interactive project cards.</p>
        <p>4. I built the site using React, leveraging component-based architecture for scalability and maintainability.</p>
        <p>5. Tailwind CSS powers the styling, enabling rapid prototyping and a consistent visual language throughout the site.</p>
        <p>6. The navigation bar is responsive and sticky, ensuring easy access to all sections on any device.</p>
        <p>7. The About section tells my story, highlighting my passion for technology and my growth mindset.</p>
        <p>8. I showcase my education, skills, and certifications, providing context for my technical expertise.</p>
        <p>9. The Projects section features a curated selection of my best work, each with detailed descriptions and live demos.</p>
        <p>10. I use subtle animations and transitions to create a delightful user experience without overwhelming the content.</p>
        <p>11. The Contact form is fully functional, allowing visitors to reach out for collaborations, feedback, or opportunities.</p>
        <p>12. Accessibility is a priority—color contrast, keyboard navigation, and ARIA labels are implemented throughout.</p>
        <p>13. The site is optimized for performance, with lazy loading, code splitting, and image optimization.</p>
        <p>14. I integrated analytics to track user engagement and continuously improve the site based on real data.</p>
        <p>15. The design is mobile-first, ensuring a seamless experience on smartphones, tablets, and desktops.</p>
        <p>16. I use SVG icons and custom illustrations to add personality and visual interest.</p>
        <p>17. The Footer includes social links, copyright information, and a subtle animated effect.</p>
        <p>18. I maintain a consistent color palette, typography, and spacing for a professional look.</p>
        <p>19. The codebase is well-organized, with clear naming conventions and modular components.</p>
        <p>20. I use Git for version control, documenting my progress and collaborating with others when needed.</p>
        {/* ...continue up to 200 lines with more summary, features, design decisions, challenges, and personal reflections... */}
        <p>21. Each project card includes a brief summary, tech stack, and links to GitHub and live demos.</p>
        <p>22. I implemented dark mode support for users who prefer a different visual experience.</p>
        <p>23. The site is deployed on a reliable hosting platform, ensuring uptime and fast load times.</p>
        <p>24. I use environment variables to manage sensitive information and API keys securely.</p>
        <p>25. The blog section allows me to share insights, tutorials, and industry trends with the community.</p>
        <p>26. I regularly update the content to reflect my latest achievements and learning milestones.</p>
        <p>27. The Testimonials section features feedback from clients, mentors, and peers.</p>
        <p>28. I use CSS Grid and Flexbox for flexible, responsive layouts.</p>
        <p>29. The site is SEO-optimized, with meta tags, structured data, and sitemap integration.</p>
        <p>30. I use Lighthouse and other tools to audit and improve performance, accessibility, and best practices.</p>
        <p>31. The design process involved wireframing, prototyping, and user testing for optimal usability.</p>
        <p>32. I use Figma and Adobe XD for design mockups and asset creation.</p>
        <p>33. The site supports multiple languages, making it accessible to a global audience.</p>
        <p>34. I implemented a custom loading spinner for a polished first impression.</p>
        <p>35. The code is documented with comments and README files for easy onboarding.</p>
        <p>36. I use ESLint and Prettier to enforce code quality and consistency.</p>
        <p>37. The deployment pipeline includes automated builds, tests, and previews.</p>
        <p>38. I use Netlify/Vercel for continuous deployment and instant rollbacks.</p>
        <p>39. The site is PWA-ready, supporting offline access and home screen installation.</p>
        <p>40. I use service workers to cache assets and improve load times.</p>
        <p>41. The design is inspired by leading portfolios and design systems.</p>
        <p>42. I participate in online communities to share my work and gather feedback.</p>
        <p>43. The site includes a changelog to track updates and new features.</p>
        <p>44. I use Google Fonts for beautiful, performant typography.</p>
        <p>45. The favicon and meta images are custom-designed for brand consistency.</p>
        <p>46. I use React Router for smooth, client-side navigation.</p>
        <p>47. The codebase is open source, inviting contributions and collaboration.</p>
        <p>48. I use feature flags to test new functionality before full rollout.</p>
        <p>49. The site is monitored for errors and uptime with third-party tools.</p>
        <p>50. I use A/B testing to optimize calls to action and conversion rates.</p>
        {/* ...add more up to 200 lines as needed... */}
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

export default PortfolioSummary;

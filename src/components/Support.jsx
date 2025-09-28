import React from "react";

const Education = () => {
  const sections = [
    {
      name: "Java",
      bg: "bg-gradient-to-br from-yellow-200 via-orange-200 to-red-200",
      icon: "☕",
      desc: "Java is a versatile, object-oriented programming language used for building robust applications."
    },
    {
      name: "Python",
      bg: "bg-gradient-to-br from-green-200 via-blue-200 to-purple-200",
      icon: "🐍",
      desc: "Python is a popular, easy-to-learn language known for its readability and wide range of applications."
    },
    {
      name: "C++",
      bg: "bg-gradient-to-br from-blue-200 via-gray-200 to-indigo-200",
      icon: "💻",
      desc: "C++ is a powerful language for system/software development and high-performance applications."
    },
    {
      name: "C#",
      bg: "bg-gradient-to-br from-purple-200 via-pink-200 to-blue-100",
      icon: "#️⃣",
      desc: "C# is a modern, object-oriented language developed by Microsoft for a wide range of enterprise applications."
    },
    {
      name: "JavaScript",
      bg: "bg-gradient-to-br from-yellow-100 via-green-100 to-blue-100",
      icon: "🟨",
      desc: "JavaScript is the language of the web, enabling interactive and dynamic user experiences."
    },
    {
      name: "Go",
      bg: "bg-gradient-to-br from-cyan-100 via-teal-100 to-blue-200",
      icon: "🐹",
      desc: "Go is a statically typed, compiled language designed for simplicity and high performance."
    }
  ];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-2 md:px-0 bg-gradient-to-br from-[#f8ffae] via-[#43cea2] to-[#185a9d] animate-gradient-move relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute left-1/4 top-10 w-72 h-72 bg-pink-300 opacity-30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute right-10 bottom-10 w-80 h-80 bg-cyan-300 opacity-30 rounded-full blur-3xl animate-pulse-slow delay-200" />
        <div className="absolute left-10 bottom-1/3 w-40 h-40 bg-yellow-200 opacity-40 rounded-full blur-2xl animate-pulse-slow delay-500" />
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 mb-10 animate-fade-in-up z-10">
        Education
      </h2>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
        {sections.map((section, idx) => (
          <div
            key={section.name}
            className={`rounded-3xl shadow-2xl ${section.bg} p-8 flex flex-col items-center text-center border-2 border-white/40 animate-fade-in-up transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-pink-300 relative overflow-hidden`}
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="text-5xl mb-4 animate-bounce-slow">{section.icon}</div>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
              {section.name}
            </h3>
            <p className="text-gray-700 font-medium mb-2">{section.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;

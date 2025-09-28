import React, { useState, useRef, useEffect } from "react";

const initialMessages = [
  { from: "ai", text: "Hi! I'm Help Us. How can I assist you today?" },
];

const exampleQuestions = [
  "How can I contact you?",
  "Show me your projects.",
  "What skills do you have?",
  "Tell me about your education.",
];

const AIChatBox = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { from: "user", text: input }]);
    setIsThinking(true);
    setInput("");
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        {
          from: "ai",
          text:
            "I'm here to help! (This is a demo. For real AI, connect to an API.)",
        },
      ]);
      setIsThinking(false);
    }, 1200);
  };

  return (
    <section className="fixed left-4 bottom-8 z-50 animate-float-ai flex flex-col items-start">
      <div className="w-80 max-w-xs rounded-2xl shadow-2xl bg-white/90 backdrop-blur-xl border border-cyan-100 p-0 overflow-hidden flex flex-col">
        <div className="bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300 p-4 text-white text-lg font-bold text-center animate-gradient-move">
          <span role="img" aria-label="AI">🤖</span> Help Us
        </div>
  <div className="flex-1 p-3 overflow-y-auto space-y-2 h-56 custom-scrollbar">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.from === "ai" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-[80%] text-base shadow-md animate-fade-in-fast "
                  ${msg.from === "ai"
                    ? "bg-gradient-to-r from-cyan-100 via-pink-100 to-yellow-100 text-gray-800"
                    : "bg-gradient-to-r from-pink-400 via-yellow-300 to-cyan-400 text-white font-semibold"}
                `}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isThinking && (
            <div className="flex justify-start">
              <div className="px-4 py-2 rounded-2xl bg-gradient-to-r from-cyan-100 via-pink-100 to-yellow-100 text-gray-800 max-w-[80%] animate-pulse">
                <span className="inline-block w-6 h-3 align-middle">
                  <span className="inline-block w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce mr-1"></span>
                  <span className="inline-block w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce delay-150 mr-1"></span>
                  <span className="inline-block w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce delay-300"></span>
                </span>
                Thinking...
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
  <form onSubmit={handleSend} className="flex items-center border-t border-cyan-100 bg-white/80 px-2 py-1">
          <input
            className="flex-1 px-4 py-2 rounded-full border border-cyan-200 focus:ring-2 focus:ring-pink-200 outline-none bg-white/80 text-gray-900 placeholder:text-cyan-400 font-medium transition-all duration-200"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            autoFocus
          />
          <button
            type="submit"
            className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-400 via-yellow-300 to-cyan-400 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Send
          </button>
        </form>
        <div className="bg-white/70 px-2 py-1 text-xs text-gray-500 text-center border-t border-cyan-100">
          <span className="font-semibold text-cyan-400">Try:</span> {exampleQuestions.map((q, i) => (
            <button
              key={i}
              className="mx-1 underline text-pink-400 hover:text-cyan-400 transition-colors"
              onClick={() => setInput(q)}
              type="button"
            >
              {q}
            </button>
          ))}
        </div>
        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #e0e7ef;
            border-radius: 8px;
          }
          .animate-gradient-move {
            background-size: 200% 200%;
            animation: gradientMove 3s linear infinite alternate;
          }
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .animate-float-ai {
            animation: floatAI 3.5s ease-in-out infinite alternate;
          }
          @keyframes floatAI {
            0% { transform: translateY(0); }
            100% { transform: translateY(-18px); }
          }
          .animate-fade-in-fast {
            animation: fadeInFast 0.5s cubic-bezier(.4,0,.2,1);
          }
          @keyframes fadeInFast {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default AIChatBox;

// @ts-nocheck
"use client";
import React, { useState } from 'react';

const MY_WORKFLOW = [
  { id: 'gest', name: "GESTIONALE", url: "https://gestionale.italianintunisia.com/", icon: "📊", color: "text-blue-400" },
  { id: 'ita', name: "ITARESORT", url: "https://itaresort.com", icon: "🏨", color: "text-emerald-400" },
  { id: 'repl1', name: "REPLIT (ACC A)", url: "https://replit.com", icon: "🌀", color: "text-orange-400" },
  { id: 'repl2', name: "REPLIT (ACC B)", url: "https://replit.com/~", icon: "⚙️", color: "text-orange-300" },
  { id: 'ver', name: "VERCEL PROD", url: "https://vercel.com", icon: "▲", color: "text-white" },
  { id: 'gem', name: "GEMINI AI", url: "https://gemini.google.com", icon: "💎", color: "text-purple-400" },
  { id: 'per', name: "PERPLEXITY", url: "https://perplexity.ai", icon: "🧠", color: "text-cyan-400" },
  { id: 'wa', name: "WHATSAPP", url: "https://web.whatsapp.com", icon: "💬", color: "text-green-500" },
];

export default function CommandHub() {
  const [activeId, setActiveId] = useState(MY_WORKFLOW[0].id);

  return (
    <main className="h-screen w-screen bg-black flex overflow-hidden font-sans">
      
      {/* BARRA LATERALE DEI LAVORI (Fissa, non si muove mai) */}
      <nav className="w-56 flex flex-col bg-[#0d0d0d] border-r border-zinc-800 shadow-2xl z-20">
        <div className="p-6 border-b border-zinc-800 mb-4">
          <h1 className="text-[10px] font-black tracking-[0.3em] text-zinc-500 uppercase italic">Control Center</h1>
        </div>
        
        <div className="flex-1 overflow-y-auto px-3 space-y-1 custom-scrollbar">
          {MY_WORKFLOW.map((app) => (
            <button
              key={app.id}
              onClick={() => setActiveId(app.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                activeId === app.id 
                ? 'bg-zinc-800 border border-zinc-700 shadow-lg' 
                : 'hover:bg-zinc-900 border border-transparent opacity-50 hover:opacity-100'
              }`}
            >
              <span className={`text-xl ${app.color}`}>{app.icon}</span>
              <span className={`text-[10px] font-bold tracking-tighter uppercase ${activeId === app.id ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                {app.name}
              </span>
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-zinc-800">
           <p className="text-[8px] text-zinc-700 text-center uppercase tracking-widest">Single Window Mode Active</p>
        </div>
      </nav>

      {/* VIEWPORT (Unico per tutti) */}
      <section className="flex-1 bg-[#050505] relative">
        {MY_WORKFLOW.map((app) => (
          <div 
            key={app.id} 
            className={`absolute inset-0 transition-opacity duration-300 ${activeId === app.id ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
          >
            <iframe 
              src={app.url} 
              className="w-full h-full border-none"
              title={app.name}
              allow="clipboard-read; clipboard-write; camera; microphone;"
            />
            
            {/* Overlay di sicurezza se il sito blocca l'iframe */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
               <span className="text-[15vw] font-black uppercase italic">{app.name}</span>
            </div>
          </div>
        ))}
      </section>

    </main>
  );
}
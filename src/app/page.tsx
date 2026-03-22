// @ts-nocheck
"use client";
import React from 'react';

const APPS = [
  { name: "Gestionale", url: "https://gestionale.italianintunisia.com/", icon: "📊" },
  { name: "Antigravity", url: "https://antigravity.so", icon: "🚀" },
  { name: "Replit", url: "https://replit.com", icon: "🌀" },
  { name: "Gemini", url: "https://gemini.google.com", icon: "💎" },
  { name: "Vercel", url: "https://vercel.com", icon: "▲" },
  { name: "GitHub", url: "https://github.com", icon: "🐙" },
];

export default function CommandLauncher() {
  const openApp = (url, name) => {
    // Questo apre ogni sito in una finestra separata, senza barre dei tab, 
    // così puoi affiancarle sul Mac come preferisci (Split View)
    window.open(url, name, "width=1000,height=800,menubar=no,toolbar=no,location=no");
  };

  return (
    <main className="h-screen w-screen bg-[#0a0a0a] flex items-center justify-center font-sans">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-10">
        {APPS.map((app) => (
          <button
            key={app.name}
            onClick={() => openApp(app.url, app.name)}
            className="group flex flex-col items-center justify-center p-8 bg-zinc-900 rounded-[32px] border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-800 transition-all duration-300 shadow-2xl"
          >
            <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">{app.icon}</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-emerald-400">
              {app.name}
            </span>
          </button>
        ))}
      </div>
      
      {/* Footer info */}
      <div className="absolute bottom-6 text-[9px] text-zinc-700 uppercase tracking-[0.5em]">
        Multi-Window Controller attivo
      </div>
    </main>
  );
}

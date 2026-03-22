// @ts-nocheck
"use client";
import React, { useState } from 'react';

export default function MultiViewDashboard() {
  // Qui inserisci i 4 o 6 siti che vuoi SEMPRE aperti contemporaneamente
  const [apps] = useState([
    { name: "Gestionale", url: "https://gestionale.italianintunisia.com/", icon: "📊" },
    { name: "Antigravity", url: "https://antigravity.so", icon: "🚀" },
    { name: "Replit", url: "https://replit.com", icon: "🌀" },
    { name: "Gemini", url: "https://gemini.google.com", icon: "💎" },
  ]);

  return (
    <main className="h-screen w-screen bg-black overflow-hidden flex flex-col font-sans">
      {/* Barra Superiore Sottile */}
      <header className="h-10 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-4 shadow-2xl">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <h1 className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase">Multi-Stream Command Center</h1>
        </div>
        <div className="text-[9px] text-zinc-600 font-mono tracking-tighter uppercase">Status: All Systems Operational</div>
      </header>

      {/* Griglia di Webview Live */}
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-1 p-1 bg-zinc-800">
        {apps.map((app, index) => (
          <div key={index} className="relative group bg-zinc-900 overflow-hidden rounded-lg border border-zinc-700/50">
            {/* Overlay Titolo Sito */}
            <div className="absolute top-2 left-2 z-10 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2 shadow-xl opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none">
              <span className="text-xs">{app.icon}</span>
              <span className="text-[9px] font-bold text-white uppercase tracking-widest">{app.name}</span>
            </div>
            
            {/* Tasto Ingrandisci (Opzionale) */}
            <a href={app.url} target="_blank" className="absolute top-2 right-2 z-10 bg-zinc-800 p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-zinc-700">
              <span className="text-[10px]">↗️</span>
            </a>

            {/* Il Sito Vero e Proprio */}
            <iframe 
              src={app.url} 
              className="w-full h-full border-none pointer-events-auto"
              title={app.name}
              allow="clipboard-read; clipboard-write; camera; microphone;"
            />
          </div>
        ))}
      </div>
    </main>
  );
}

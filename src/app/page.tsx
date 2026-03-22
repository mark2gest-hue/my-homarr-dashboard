// @ts-nocheck
"use client";
import React, { useState } from 'react';

const APPS = [
  { id: 'gest', name: "Gestionale", url: "https://gestionale.italianintunisia.com/", icon: "📊" },
  { id: 'repl', name: "Replit", url: "https://replit.com", icon: "🌀" },
  { id: 'gem', name: "Gemini", url: "https://gemini.google.com", icon: "💎" },
  { id: 'anti', name: "Antigravity", url: "https://antigravity.so", icon: "🚀" },
  { id: 'wa', name: "WhatsApp", url: "https://web.whatsapp.com", icon: "💬" },
];

export default function SidebarOS() {
  const [activeApp, setActiveApp] = useState(APPS[0]);

  return (
    <main className="h-screen w-screen bg-black flex overflow-hidden">
      {/* SIDEBAR ULTRA-SLIM */}
      <nav className="w-16 flex flex-col items-center py-4 bg-zinc-900 border-r border-zinc-800 gap-4">
        <div className="mb-4 opacity-50 text-[10px] font-black">MENU</div>
        {APPS.map((app) => (
          <button
            key={app.id}
            onClick={() => setActiveApp(app)}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transition-all duration-200 ${
              activeApp.id === app.id 
              ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)] scale-110' 
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
            }`}
            title={app.name}
          >
            {app.icon}
          </button>
        ))}
      </nav>

      {/* VIEWPORT PRINCIPALE */}
      <section className="flex-1 flex flex-col bg-zinc-950">
        {/* Header con URL Reale per Siti che bloccano iframe */}
        <div className="h-8 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-4">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            {activeApp.name} — <span className="lowercase font-normal">{activeApp.url}</span>
          </span>
          <button 
            onClick={() => window.open(activeApp.url, '_blank')}
            className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded hover:bg-zinc-700"
          >
            Apri Esterno ↗
          </button>
        </div>

        {/* L'area di lavoro */}
        <div className="flex-1 relative">
          <iframe 
            src={activeApp.url} 
            className="w-full h-full border-none"
            title={activeApp.name}
            allow="clipboard-read; clipboard-write; camera; microphone;"
          />
          
          {/* Overlay di aiuto se il sito è bloccato */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
             <span className="text-8xl font-black uppercase rotate-12">{activeApp.name}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
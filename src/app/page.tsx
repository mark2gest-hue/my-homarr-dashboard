// @ts-nocheck
"use client";
import React from 'react';

const COMBOS = [
  { 
    id: 'replit-dual', 
    name: "COMBO REPLIT (Account A + B)", 
    desc: "Apre 2 finestre separate per i tuoi 2 account",
    icon: "🌀🌀",
    action: () => {
      window.open("https://replit.com", "replit1", "width=800,height=900,left=0");
      // Per il secondo account, il trucco è usare un URL leggermente diverso o un altro browser
      // Se usi Chrome come principale, questa si aprirà lì.
      window.open("https://replit.com/~", "replit2", "width=800,height=900,left=800");
    }
  },
  { 
    id: 'ai-dual', 
    name: "COMBO AI (Gemini + Perplexity)", 
    icon: "🤖✨",
    desc: "Ricerca e Generazione affiancate",
    action: () => {
      window.open("https://gemini.google.com", "gemini", "width=800,height=900,left=0");
      window.open("https://perplexity.ai", "perplexity", "width=800,height=900,left=800");
    }
  },
  { 
    id: 'prod-dual', 
    name: "COMBO PROD (Gestionale + Itaresort)", 
    icon: "🏨📊",
    desc: "Monitoraggio produzione live",
    action: () => {
      window.open("https://gestionale.italianintunisia.com/", "gestionale", "width=800,height=900,left=0");
      window.open("https://itaresort.com", "itaresort", "width=800,height=900,left=800");
    }
  }
];

export default function ComboLauncher() {
  return (
    <main className="h-screen w-screen bg-[#050505] text-white p-10 font-sans">
      <header className="mb-12 border-b border-zinc-800 pb-6">
        <h1 className="text-2xl font-black tracking-tighter text-emerald-500">WORKFLOW SELECTOR</h1>
        <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1">Scegli la postazione di lavoro</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {COMBOS.map((combo) => (
          <button
            key={combo.id}
            onClick={combo.action}
            className="group p-8 bg-zinc-900/50 border border-zinc-800 rounded-[40px] hover:border-emerald-500 transition-all text-left shadow-2xl"
          >
            <div className="text-5xl mb-6">{combo.icon}</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{combo.name}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{combo.desc}</p>
            <div className="mt-6 text-[10px] font-black text-zinc-700 uppercase tracking-tighter">Lancia Postazione →</div>
          </button>
        ))}
      </div>
    </main>
  );
}
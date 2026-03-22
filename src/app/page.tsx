// @ts-nocheck
"use client";
import React, { useState } from 'react';
import { CONFIG } from './links'; // Importa i tuoi link dal file creato prima

export default function Dashboard() {
  // Stato per gestire i Tab (Sviluppo, Google Pro, ecc.)
  const [activeTab, setActiveTab] = useState(CONFIG.tabs[0].id);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-6 sm:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            My Command Center
          </h1>
          <p className="text-zinc-500 mt-2 text-sm uppercase tracking-widest">Organizzazione Totale</p>
        </header>
        
        {/* Navigazione Tab stile Homarr */}
        <nav className="flex justify-center gap-2 mb-12 p-1 bg-zinc-900/50 rounded-2xl w-fit mx-auto border border-zinc-800">
          {CONFIG.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id 
                ? 'bg-zinc-100 text-black shadow-lg scale-105' 
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Griglia di Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONFIG.tabs.find(t => t.id === activeTab)?.links.map((link) => (
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-6 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-zinc-600 hover:bg-zinc-800/50 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                <span className="text-[10px] font-bold text-zinc-600 bg-zinc-800 px-2 py-1 rounded uppercase tracking-tighter">
                  {link.label}
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-1">{link.name}</h3>
              <p className="text-xs text-zinc-500">Apri risorsa →</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

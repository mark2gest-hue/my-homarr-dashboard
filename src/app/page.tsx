// @ts-nocheck
"use client";
import React, { useState } from 'react';
import { CONFIG } from './links';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(CONFIG.tabs[0].id);

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto p-6 sm:p-10">
        
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-black tracking-tighter bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
            COMMAND CENTER
          </h1>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em]">Sistemi Operativi Online</p>
          </div>
        </header>
        
        {/* Navigazione Tab */}
        <nav className="flex justify-center gap-1.5 mb-10 p-1.5 bg-zinc-900/40 backdrop-blur-md rounded-2xl w-fit mx-auto border border-zinc-800/50 shadow-2xl">
          {CONFIG.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                activeTab === tab.id 
                ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.15)] scale-105' 
                : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
          {/* Nuovo Tab Speciale per il Gestionale */}
          <button
            onClick={() => setActiveTab('live-gestionale')}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
              activeTab === 'live-gestionale' 
              ? 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)] scale-105' 
              : 'text-zinc-500 hover:text-emerald-400 hover:bg-emerald-900/20'
            }`}
          >
            📊 LIVE GESTIONALE
          </button>
        </nav>

        {/* Contenuto Dinamico */}
        {activeTab === 'live-gestionale' ? (
          /* VISTA GESTIONALE FULL SCREEN */
          <div className="animate-in fade-in zoom-in duration-500">
            <div className="w-full h-[75vh] rounded-3xl overflow-hidden border border-emerald-500/30 bg-zinc-900 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <iframe 
                src="https://gestionale.italianintunisia.com/" 
                className="w-full h-full border-none"
                title="Gestionale Live"
              />
            </div>
            <p className="text-center text-zinc-600 text-[10px] mt-4 uppercase tracking-widest">Accesso Diretto Crittografato</p>
          </div>
        ) : (
          /* GRIGLIA CARD CLASSICA */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-in slide-in-from-bottom-4 duration-500">
            {CONFIG.tabs.find(t => t.id === activeTab)?.links.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-6 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl hover:border-zinc-500/50 hover:bg-zinc-800/80 transition-all duration-300 shadow-lg relative overflow-hidden"
              >
                <div className="flex items-start justify-between relative z-10">
                  <div className="text-3xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {link.icon}
                  </div>
                  <span className="text-[9px] font-black text-zinc-500 bg-zinc-950 px-2 py-1 rounded-md uppercase tracking-tighter border border-zinc-800">
                    {link.label}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-zinc-100 group-hover:text-white transition-colors">{link.name}</h3>
                <p className="text-[10px] text-zinc-600 mt-1 uppercase tracking-wider">Avvia Sessione →</p>
                
                {/* Effetto luce al passaggio del mouse */}
                <div className="absolute -inset-x-20 -top-20 h-40 w-40 bg-white/5 blur-[80px] group-hover:bg-white/10 transition-all duration-700"></div>
              </a>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

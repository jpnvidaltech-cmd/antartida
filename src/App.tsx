/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Copy, 
  Check, 
  ExternalLink,
  ArrowRight,
  Menu,
  X,
  Plus
} from 'lucide-react';
import { SERVICES, PILLARS, FIREBASE_PROMPT, COLORS } from './constants/content';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(FIREBASE_PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#00D1FF]/20">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white px-4 sm:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#00D1FF] rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white transform rotate-45"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#0A2540]">AntartidaLabs</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 h-full">
          <a href="#services" className="text-sm font-medium text-[#00D1FF] border-b-2 border-[#00D1FF] h-full flex items-center mt-0.5">Strategic Profile</a>
          <a href="#pillars" className="text-sm font-medium text-slate-500 hover:text-[#0A2540] transition-colors">Solutions</a>
          <a href="#prompt" className="text-sm font-medium text-slate-500 hover:text-[#0A2540] transition-colors">ROI Model</a>
          <span className="text-sm font-medium text-slate-300 cursor-not-allowed">2026 Roadmap</span>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-[#0A2540] text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-slate-800 transition-all">
            Request PoC
          </button>
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-[#0A2540]">Strategic Profile</a>
              <a href="#pillars" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-[#0A2540]">Solutions</a>
              <a href="#prompt" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-[#0A2540]">ROI Model</a>
              <button className="w-full rounded-md bg-[#0A2540] py-3 text-white font-semibold">Request PoC</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-16 flex min-h-screen">
        <div className="mx-auto w-full flex flex-col md:grid md:grid-cols-12 gap-0">
          
          {/* Sidebar / Identity */}
          <aside className="md:col-span-3 border-r border-slate-200 p-8 bg-slate-50 space-y-8 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
            <section>
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Company Profile</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                AntartidaLabs is an <strong>Active Synthetic Workforce</strong> architect. We specialize in the transition from passive tools (SaaS) to autonomous Agents (AaaS) for the 2026 corporate landscape.
              </p>
            </section>

            <section>
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Value Proposition</h3>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <p className="text-sm font-semibold text-[#0A2540] leading-snug">"Orchestrating the transition from software stacks to synthetic workforces at unprecedented velocity."</p>
              </div>
            </section>

            <section>
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Visual Identity</h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-[#0A2540] rounded-lg shadow-inner flex items-center justify-center text-[10px] font-mono text-white">#0A</div>
                  <div className="text-[10px] font-medium text-slate-500">Arctic Navy</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-[#00D1FF] rounded-lg shadow-inner flex items-center justify-center text-[10px] font-mono text-[#0A2540]">#00</div>
                  <div className="text-[10px] font-medium text-slate-500">Glacier Neon</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-white border border-slate-200 rounded-lg shadow-inner flex items-center justify-center text-[10px] font-mono text-slate-400">#FF</div>
                  <div className="text-[10px] font-medium text-slate-500">Frost White</div>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 mt-4 italic font-medium">Inspired by Arctic Precision and Aurora Innovation.</p>
            </section>
          </aside>

          {/* Main Content Area */}
          <div className="md:col-span-9 p-8 md:p-12 flex flex-col gap-12 bg-white">
            <header>
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-tight"
              >
                Agentic <span className="text-[#00D1FF]">Intelligence</span> Solutions
              </motion.h1>
              <p className="text-slate-500 mt-3 text-lg font-medium">Strategic service matrix for addressing high-value enterprise niches.</p>
            </header>

            {/* Service Matrix */}
            <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#00D1FF] transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-[#00D1FF]" />
                  </div>
                  <div className="w-12 h-12 bg-slate-100 rounded-xl mb-4 flex items-center justify-center group-hover:bg-[#00D1FF]/10 transition-colors">
                    <service.icon className="w-6 h-6 text-[#0A2540]" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                     <span className="text-[10px] font-bold text-[#00D1FF] uppercase tracking-wider">{service.tag}</span>
                  </div>
                  <h4 className="font-bold text-xl text-[#0A2540]">{service.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-500 mt-2">{service.description}</p>
                  
                  <div className="mt-6 flex items-center justify-between border-t border-slate-50 pt-4">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Success Metric</div>
                    <div className="text-sm font-bold text-[#0A2540] uppercase tracking-tight">{service.roi}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Section: ROI & Developer Prompt */}
            <div id="prompt" className="mt-auto pt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* ROI Formula Card */}
              <div className="bg-[#0A2540] text-white p-8 rounded-[2rem] shadow-2xl flex flex-col justify-between">
                <div>
                  <h5 className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#00D1FF] mb-4">The Master ROI Formula</h5>
                  <div className="font-mono text-2xl text-center py-6 border-y border-white/10 my-4">
                    ROI = <span className="text-white/40 text-sm align-middle px-1">[(Savings + Uplift) - Costs]</span> 
                    <div className="border-t border-white/20 w-1/3 mx-auto my-1" />
                    <span className="text-white/40 text-sm align-middle block">Costs</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                  Includes human net savings against a 45% reduction in reconciliation hours as industry benchmark. Deployment cycles are modeled for 90-day ROI recapture.
                </p>
              </div>

              {/* Developer Prompt Box */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                   <h5 className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Dev Tool: Firebase Spec</h5>
                   <button 
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 text-[10px] font-bold text-[#00D1FF] hover:text-[#00D1FF]/80 transition-colors uppercase tracking-widest"
                  >
                    {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    {copied ? 'Captured' : 'Copy Spec'}
                  </button>
                </div>
                <div className="flex-1 bg-slate-900 border border-slate-800 text-slate-300 p-5 rounded-2xl text-[10px] font-mono leading-relaxed whitespace-pre-wrap overflow-y-auto max-h-[220px] shadow-lg relative group">
                  <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-100 transition-opacity">
                    <Plus className="w-4 h-4 text-[#00D1FF]" />
                  </div>
                  {FIREBASE_PROMPT}
                </div>
                <button className="w-full bg-[#00D1FF] text-[#0A2540] py-3 rounded-lg text-xs font-bold uppercase tracking-widest hover:brightness-105 transition-all shadow-lg active:scale-[0.98]">
                  Initialize Firebase Deployment
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 relative z-10">
        <div className="mx-auto max-w-7xl px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-6 h-6 bg-[#0A2540] rounded flex items-center justify-center">
              <div className="w-2.5 h-2.5 border border-white transform rotate-45"></div>
            </div>
            <span className="text-xs font-bold tracking-tight text-[#0A2540]">AntartidaLabs</span>
          </div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            © 2026 Active Synthetic Workforce Architectures. SOC2 II Certified.
          </p>
        </div>
      </footer>
    </div>
  );
}

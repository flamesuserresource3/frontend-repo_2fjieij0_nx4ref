import React from 'react';
import { CreditCard, Send, Shield, Smartphone } from 'lucide-react';

const NavButton = ({ children }) => (
  <button className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
    {children}
  </button>
);

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 text-white">
            <div className="h-9 w-9 rounded-xl bg-emerald-500 grid place-items-center shadow-lg shadow-emerald-500/30">
              <Send size={20} className="text-white" />
            </div>
            <span className="font-semibold tracking-tight text-lg">CashApp</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-white/80">
            <a href="#features" className="hover:text-white transition-colors flex items-center gap-2">
              <Smartphone size={18} /> App
            </a>
            <a href="#features" className="hover:text-white transition-colors flex items-center gap-2">
              <Send size={18} /> Payments
            </a>
            <a href="#features" className="hover:text-white transition-colors flex items-center gap-2">
              <CreditCard size={18} /> Card
            </a>
            <a href="#features" className="hover:text-white transition-colors flex items-center gap-2">
              <Shield size={18} /> Security
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <NavButton>Sign in</NavButton>
            <button className="px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors">
              Get the app
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

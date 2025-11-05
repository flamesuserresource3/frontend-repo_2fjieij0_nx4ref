import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/70">
          <p className="text-sm">© {new Date().getFullYear()} CashApp — All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

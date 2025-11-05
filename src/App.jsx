import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section className="py-16 bg-gradient-to-b from-black to-zinc-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold">Ready to move money smarter?</h3>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">
              Join millions who use CashApp to send, spend, and save with confidence.
            </p>
            <div className="mt-6">
              <a href="#" className="inline-block px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors font-medium">
                Get started free
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

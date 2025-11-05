import React from 'react';
import { ArrowRight, Download, Shield, Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Send, spend, and save money — instantly
            </h1>
            <p className="mt-5 text-lg text-white/70 max-w-prose">
              CashApp makes it effortless to pay friends, shop online, and manage your money. Fast, secure, and built for everyone.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <button className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors text-white font-medium">
                <Download size={18} />
                Download the app
              </button>
              <button className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 hover:border-white/40 text-white/90 hover:text-white transition-colors">
                Learn more <ArrowRight size={18} />
              </button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-emerald-400" />
                Bank‑level security
              </div>
              <div className="flex items-center gap-2">
                <Smartphone size={18} className="text-emerald-400" />
                Available on iOS & Android
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-emerald-500/40 via-emerald-400/20 to-transparent blur-xl" />
              <div className="relative rounded-3xl bg-zinc-900/80 border border-white/10 p-6 shadow-2xl">
                <div className="h-10 w-24 rounded-full bg-zinc-800/80 mx-auto" />
                <div className="mt-6 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 p-4">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="text-sm text-white/70">Cash Card</p>
                      <p className="text-xl font-semibold">$1,250.45</p>
                    </div>
                    <div className="h-10 w-14 rounded-xl bg-emerald-500" />
                  </div>
                </div>
                <div className="mt-4 rounded-2xl bg-zinc-800/60 border border-white/10 p-4 space-y-3">
                  {["Paid @alex • $20.00", "Received from @maya • $150.00", "Boost: Coffee • -$2.00"].map((row, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span className="text-white/80">{row}</span>
                      <span className="text-emerald-400">Now</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    { label: 'Pay' },
                    { label: 'Request' },
                    { label: 'Cash Out' },
                  ].map((a) => (
                    <button key={a.label} className="px-3 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-sm transition-colors">
                      {a.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

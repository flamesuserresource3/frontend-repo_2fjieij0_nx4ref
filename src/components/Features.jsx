import React from 'react';
import { CreditCard, Send, Shield, TrendingUp, Users } from 'lucide-react';

const Feature = ({ icon: Icon, title, children }) => (
  <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 hover:border-white/20 transition-colors">
    <div className="h-12 w-12 rounded-xl bg-emerald-500/15 text-emerald-400 grid place-items-center">
      <Icon size={22} />
    </div>
    <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-white/70 leading-relaxed">{children}</p>
  </div>
);

export default function Features() {
  const items = [
    {
      icon: Send,
      title: 'Instant payments',
      desc: 'Send and receive money in seconds. Split bills, pay friends, or settle up without fees between friends.'
    },
    {
      icon: CreditCard,
      title: 'Cash Card',
      desc: 'A customizable debit card you control. Spend online and in‑store, and boost your savings with perks.'
    },
    {
      icon: Shield,
      title: 'Serious security',
      desc: 'Encrypted transactions, passcode and Face/Touch ID support, and instant card freeze to keep you safe.'
    },
    {
      icon: TrendingUp,
      title: 'Grow smarter',
      desc: 'Track spending, set goals, and stay on top of your money with rich insights and notifications.'
    },
  ];

  return (
    <section id="features" className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Everything you need in one app</h2>
          <p className="mt-3 text-white/70">Designed to be simple, fast, and secure — so you can focus on what matters.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon, title, desc }) => (
            <Feature key={title} icon={icon} title={title}>
              {desc}
            </Feature>
          ))}
        </div>
      </div>
    </section>
  );
}

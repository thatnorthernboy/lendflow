'use client';
import Image from 'next/image';
import ProgressBar from './ProgressBar';

export default function FeaturedStory() {
  // Placeholder content; replace with real entrepreneur story
  const pledged = 4200;
  const goal = 8000;
  const pct = Math.min(100, Math.round(pledged/goal*100));
  return (
    <section className="py-16 bg-slate-50">
      <div className="container-max grid md:grid-cols-2 gap-8 items-center">
        <div className="aspect-video bg-white rounded-2xl border overflow-hidden transition-transform hover:scale-105">
          <Image
            src="https://images.unsplash.com/photo-1505672678657-cc7037095e1d?auto=format&fit=crop&w=800&q=80"
            alt="Amina working in her pottery studio"
            width={800}
            height={450}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Amina • Artisan potter — Fès</h3>
          <p className="mt-2 text-sm opacity-80">Upgrading her kiln and glazes to expand production.</p>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="card p-4"><div className="text-xl font-bold">{pct}%</div><div className="text-xs opacity-70">funded</div></div>
            <div className="card p-4"><div className="text-xl font-bold">{pledged} MAD</div><div className="text-xs opacity-70">pledged</div></div>
            <div className="card p-4"><div className="text-xl font-bold">{goal} MAD</div><div className="text-xs opacity-70">goal</div></div>
          </div>
          <div className="mt-4"><ProgressBar value={pct} /></div>
          <a href="#donor" className="btn btn-primary mt-6">Become a backer</a>
        </div>
      </div>
    </section>
  );
}

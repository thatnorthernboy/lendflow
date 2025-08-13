'use client';
import {useTranslations} from 'next-intl';

export default function HowItWorks() {
  const t = useTranslations();
  const items = [
    { title: t('how.step1'), desc: 'Browse local projects by city and category.'},
    { title: t('how.step2'), desc: 'Choose an amount and pledge at 0% interest.'},
    { title: t('how.step3'), desc: 'Track progress and repayments easily.'}
  ];
  return (
    <section className="py-16" id="how">
      <div className="container-max">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">{t('how.title')}</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((it, i)=> (
            <div
              key={i}
              className="card p-6 transition-transform hover:scale-105"
            >
              <div className="text-xl font-semibold">{it.title}</div>
              <p className="mt-2 text-sm opacity-80">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

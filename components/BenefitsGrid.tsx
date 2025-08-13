import {useTranslations} from 'next-intl';

export default function BenefitsGrid() {
  const t = useTranslations();
  const items = [
    {title: t('benefits.trust'), desc: 'No-interest loans and clear terms.'},
    {title: t('benefits.community'), desc: 'Back Moroccan artisans and shop owners.'},
    {title: t('benefits.growth'), desc: 'Help small businesses expand sustainably.'},
    {title: t('benefits.transparency'), desc: 'Progress tracking for every project.'},
  ];
  return (
    <section className="py-16 bg-slate-50">
      <div className="container-max">
        <h3 className="text-2xl font-bold mb-8">Benefits</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((it,i)=> (
            <div key={i} className="card p-6">
              <div className="text-lg font-semibold">{it.title}</div>
              <p className="mt-2 text-sm opacity-80">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

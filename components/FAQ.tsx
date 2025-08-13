export default function FAQ() {
  const faqs = [
    {q: 'How are projects vetted?', a: 'We manually review ID, business details, and references during the pilot.'},
    {q: 'When do repayments happen?', a: 'Monthly, timeline varies per project. All at 0% interest.'},
    {q: 'Are donations tax-deductible?', a: 'Varies; please consult your local guidelines.'},
    {q: 'What fees are there?', a: 'The pilot charges no platform fees to backers or entrepreneurs.'},
    {q: 'How do I contact support?', a: 'Find email/WhatsApp in the footer.'}
  ];
  return (
    <section className="py-16" id="faq">
      <div className="container-max">
        <h3 className="text-2xl font-bold mb-8">FAQ</h3>
        <div className="space-y-4">
          {faqs.map((f,i)=> (
            <details key={i} className="card p-4">
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-2 text-sm opacity-80">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

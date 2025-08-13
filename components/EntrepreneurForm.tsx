'use client';
import { useState } from 'react';

export default function EntrepreneurForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); setOk(null); setError(null);
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch('/api/forms/entrepreneur', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      setOk(data.ok);
      if (!data.ok) setError(data.error || 'Failed');
      if (data.ok) (e.currentTarget as HTMLFormElement).reset();
    } catch (err:any) {
      setError(err.message);
      setOk(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form id="entrepreneur" onSubmit={onSubmit} className="card p-6 space-y-4 mt-8">
      <div className="grid sm:grid-cols-2 gap-4">
        <input className="border rounded-lg p-3" name="name" placeholder="Name" required />
        <input className="border rounded-lg p-3" name="business_type" placeholder="Business type" required />
        <input className="border rounded-lg p-3" name="city" placeholder="City" required />
        <input className="border rounded-lg p-3" name="funding_need" type="number" min="0" placeholder="Funding need (MAD)" required />
        <input className="border rounded-lg p-3 sm:col-span-2" name="whatsapp" placeholder="WhatsApp (optional)" />
      </div>
      <input type="hidden" name="hcaptcha_token" value="" />
      <button className="btn btn-secondary" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
      {ok && <div className="text-green-700 text-sm">Thanks! We’ll review your project.</div>}
      {ok===false && <div className="text-red-700 text-sm">Error: {error}</div>}
    </form>
  );
}

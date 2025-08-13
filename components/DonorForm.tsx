'use client';
import { useState } from 'react';

export default function DonorForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); setOk(null); setError(null);
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch('/api/forms/donor', {
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
    <form id="donor" onSubmit={onSubmit} className="card p-6 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input className="border rounded-lg p-3" name="name" placeholder="Name" required />
        <input className="border rounded-lg p-3" name="email" type="email" placeholder="Email" required />
        <input className="border rounded-lg p-3" name="city" placeholder="City" required />
        <select className="border rounded-lg p-3" name="amount_range" required>
          <option value="100-300 MAD">100–300 MAD</option>
          <option value="300-600 MAD">300–600 MAD</option>
          <option value="600-1000 MAD">600–1000 MAD</option>
          <option value="1000+ MAD">1000+ MAD</option>
        </select>
        <input className="border rounded-lg p-3 sm:col-span-2" name="whatsapp" placeholder="WhatsApp (optional)" />
      </div>
      {/* hCaptcha widget goes here (client) with sitekey, set hidden input 'hcaptcha_token' */}
      <input type="hidden" name="hcaptcha_token" value="" />
      <button className="btn btn-primary" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
      {ok && <div className="text-green-700 text-sm">Thanks! We’ll be in touch soon.</div>}
      {ok===false && <div className="text-red-700 text-sm">Error: {error}</div>}
    </form>
  );
}

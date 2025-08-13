type AirtableRecord = Record<string, any>;

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY!;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID!;

export async function airtableCreate(table: string, fields: AirtableRecord) {
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(table)}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ records: [{ fields }] })
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Airtable error: ${res.status} ${text}`);
  }
  return res.json();
}

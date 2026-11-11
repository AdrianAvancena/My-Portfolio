// api/contact.ts
// Vercel Serverless Function — receives the "Send Me a Message" form submission
// and sends it to the portfolio owner's inbox via Resend.
//
// Environment variables required:
//   RESEND_API_KEY    — your Resend API key (set in Vercel, or .env.local for local)
//   RESEND_FROM_EMAIL — sender address shown in the email (e.g. you@yourdomain.com)
//   RESEND_TO_EMAIL   — where the message lands (portfolio owner inbox)
//
// Local dev:  vercel dev        (serves the function at localhost:3000/api/contact)
// Publish:    push to GitHub, import repo in Vercel → builds & deploys.

export default async function handler(req: any, res: any) {
  // CORS preflight (only needed if the form is on a different origin than the API)
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Read the request body
  let rawBody = '';
  try {
    for await (const chunk of req) {
      rawBody += chunk;
    }
  } catch (err: any) {
    return res.status(400).json({ error: 'Failed to read request body: ' + err.message });
  }

  let data: any = {};
  try {
    data = JSON.parse(rawBody || '{}');
  } catch {
    return res.status(400).json({ error: 'Invalid JSON body' });
  }

  const { name, email, subject, message } = data ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Email not configured on the server (missing RESEND_API_KEY).' });
  }

  // Sanitize (the Resend call is unchanged)
  const sanitized = {
    name: String(name).trim(),
    email: String(email).trim(),
    subject: String(subject).trim(),
    message: String(message).trim(),
  };

  // Build the email with Resend
  const from = process.env.RESEND_FROM_EMAIL || 'adrian@example.com';
  const to = [process.env.RESEND_TO_EMAIL || 'adrian@example.com'];

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        replyTo: sanitized.email,
        subject: sanitized.subject || 'New portfolio message',
        text: `From: ${sanitized.name} <${sanitized.email}>\n\n${sanitized.message}`,
      }),
    });

    const result = await resendResponse.json();

    if (!resendResponse.ok) {
      return res.status(502).json({ error: result.message || 'Failed to send email via Resend' });
    }

    res.status(200).json({ success: true, emailSent: true, id: Date.now().toString(36) });
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Failed to send email' });
  }
}

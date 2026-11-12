import React, { useState } from "react";
import { Mail, Share2, Phone } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    title: "Email",
    placeholder: "avancena.021@gmail.com",
    action: "https://mail.google.com/mail/?view=cm&fs=1&to=",
  },
  {
    icon: Share2,
    title: "Facebook",
    placeholder: "https://www.facebook.com/adrian.avancena.37",
    action: "",
  },
  {
    icon: Phone,
    title: "Contact Number",
    placeholder: "+6393 0221 9978 / 0930 221 9978",
    text: true,
  },
];

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setErrorMsg('Please fill in all required fields.');
      setStatus('error');
      form.reportValidity();
      return;
    }
    const data: ContactForm = {
      name: (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value,
      email: (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
      subject: (e.currentTarget.elements.namedItem('subject') as HTMLInputElement).value,
      message: (e.currentTarget.elements.namedItem('message') as HTMLInputElement).value,
    };

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Failed to send your message');
      if (result.emailSent) {
        form.reset();
        setStatus('success');
      } else {
        setErrorMsg('Your message was saved on the server, but email delivery is not configured yet. Please try again in a moment.');
        setStatus('error');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold text-indigo-400">Contact</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Get In Touch
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Have a project in mind or want to discuss how I can help? Fill in the details
              below and I&apos;ll get back to you.
            </p>

            <div className="mt-8 space-y-4">
              {contactItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-secondary/40 p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-muted">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white/70">{item.title}</p>
                    {item.text ? (
                      <p className="text-sm font-semibold text-white transition">{item.placeholder}</p>
                    ) : (
                      <a
                        href={`${item.action}${item.placeholder}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.title}
                        className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition"
                      >
                        {item.placeholder}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-secondary/40 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white">Send Me a Message</h3>
            <p className="mt-1 text-sm text-white/70">
              A contact form included below. Your message is emailed to my inbox once
              email delivery is configured on the server.
            </p>

            {status === 'success' && (
              <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-4 text-sm text-green-400">
                Message sent! I&apos;ll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-sm text-red-400">
                {errorMsg}
              </div>
            )}

            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject (e.g. Web Development)"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 hover:bg-orange-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
              <p className="text-xs text-white/50">
                Note: your message is delivered to my inbox once email delivery is
                configured on the server.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
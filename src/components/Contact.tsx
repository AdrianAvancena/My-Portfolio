import React from "react";
import { Mail, Share2, Phone } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    title: "Email",
    placeholder: "avancena.021@gmail.com",
    action: "mailto:",
  },
  {
    icon: Share2,
    title: "Facebook",
    placeholder: "https://www.facebook.com/adrian.avancena.37",
    action: "#",
  },
  {
    icon: Phone,
    title: "Contact Number",
    placeholder: "+6393 0221 9978 / 0930 221 9978",
    action: "tel:",
  },
];

export const Contact: React.FC = () => {
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
              below and I&apos;ll get back to you. Placeholder fields are ready for your real
              information.
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
                    <a
                      href={`${item.action}${item.placeholder}`}
                      aria-label={item.title}
                      className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition"
                    >
                      {item.placeholder}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-secondary/40 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white">Send Me a Message</h3>
            <p className="mt-1 text-sm text-white/70">
              A contact form is included below — but it only delivers messages if a backend
              or email service is connected. Until then, the fields are for your real
              details.
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  required
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
                <input
                  type="text"
                  placeholder="Subject (e.g. Web Development)"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                required
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 hover:bg-orange-400 transition"
              >
                Send Message
              </button>
              <p className="text-xs text-white/50">
                Note: this form needs a backend or email service to actually send messages.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

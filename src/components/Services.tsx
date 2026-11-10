import React from "react";
import { services } from "../data/services";

export const Services: React.FC = () => {
  return (
    <section id="services" className="bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-orange-400">Services</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Services I Offer
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Practical, end-to-end development for schools, businesses, and organisations
            that need custom web applications and management systems.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.id}
              className="group rounded-2xl border border-white/10 bg-secondary/40 p-6 transition hover:border-orange-400/30 hover:bg-secondary hover:shadow-xl hover:shadow-orange-500/5"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 transition group-hover:bg-orange-500 group-hover:text-white">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

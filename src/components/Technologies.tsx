import React from "react";
import { technologies } from "../data/technologies";

export const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-indigo-400">Technologies</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Technologies I Use
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            A focused set of modern tools I rely on to build fast, reliable web
            applications and management systems.
          </p>
        </div>

        <div className="mt-12 flex gap-3 overflow-x-auto pb-4">
          {technologies.map((t) => (
            <span
              key={t.name}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-secondary/40 px-4 py-2.5 text-sm font-medium text-white/80"
            >
              <t.icon className="h-4 w-4" />
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

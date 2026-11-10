import React from "react";
import { projects } from "../data/projects";

const Screenshot: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div
    className="relative overflow-hidden rounded-xl bg-secondary/60 border border-white/10"
    style={{ width: "100%", aspectRatio: "16/9", minWidth: 360, maxWidth: 500 }}
  >
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
    />
  </div>
);

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-orange-400">Portfolio</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Selected work I&apos;ve built. These are real projects I have developed — descriptions
            and screenshots can be expanded later.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {projects.map((p) => (
            <div
              key={p.id}
              className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-secondary/40 p-6 sm:flex-row sm:gap-10 sm:p-8"
            >
              <div className="flex flex-1 flex-col justify-between sm:w-56">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-bold text-white">{p.title}</h3>
                </div>
                <p className="mt-3 leading-relaxed text-white/70">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={p.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-400 transition"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    Visit Website
                  </a>
                </div>
              </div>

              <div className="flex-shrink-0">
                <Screenshot src={p.screenshot} alt={`${p.title} screenshot`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

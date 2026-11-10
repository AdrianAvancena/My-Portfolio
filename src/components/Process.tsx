import React from "react";

const steps = [
  {
    num: "01",
    title: "Requirement Gathering",
    description:
      "I listen to your needs, understand your goals, and map out how the system should work.",
  },
  {
    num: "02",
    title: "Planning and Design",
    description:
      "We plan the features, structure, and design so the final system is clear, usable, and aligned with your operations.",
  },
  {
    num: "03",
    title: "Development and Testing",
    description:
      "I build the application step by step, then test it thoroughly to make sure it works reliably and is easy to use.",
  },
  {
    num: "04",
    title: "Deployment and Support",
    description:
      "I deploy the system and provide support to make sure everything continues running smoothly.",
  },
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-orange-400">Development Process</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            How I Work
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            A clear, client-focused process — from first conversation to a system that keeps
            running smoothly.
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {steps.map((s) => (
            <div
              key={s.num}
              className="relative pl-8 border-l border-white/10"
            >
              <span className="absolute left-0 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-extrabold text-white shadow-lg shadow-orange-500/25">
                {s.num}
              </span>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

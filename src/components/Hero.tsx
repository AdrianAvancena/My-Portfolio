import React from "react";
import { Photo } from "./Photo";

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-bg">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:py-20">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-muted backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" /> 
            Available for freelance work
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-white">Full-Stack Web Developer</span>
            <span className="block text-orange-500">Building Digital Solutions That Make Work Simpler.</span>
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted">
            I&apos;m a web developer focused on building practical, reliable, and user-friendly
            web applications and management systems that help schools, businesses, and
            organisations improve their operations.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 hover:bg-orange-400 hover:shadow-orange-400/30 transition"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" d="M2.01 12.288l7.182-7.182a1 1 0 011.414 0l7.182 7.182a1 1 0 010 1.414L4.424 16.64a1 1 0 01-1.414-1.414V4.71a1 1 0 011.414-1.414z" />
              </svg>
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 hover:border-white/30 transition"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" d="M15 19l-7-7 7-7" />
              </svg>
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative mx-auto w-[420px] h-[420px]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 via-indigo-500/20 to-transparent blur-xl" aria-hidden="true" />
            <div className="relative rounded-2xl border-2 border-white/10 bg-secondary/60 overflow-hidden shadow-2xl h-full">
              <Photo alt="My profile picture" fillContainer />
            </div>
            <div className="absolute -bottom-4 -right-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white shadow-lg shadow-orange-500/25">
              A
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

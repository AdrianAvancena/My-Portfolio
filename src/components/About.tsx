import React from "react";
import { Photo } from './Photo';

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                  <div className="relative">
                    <div className="relative mx-auto w-[340px] h-[400px]">
                                          <div className="absolute inset-0 rounded-2xl bg-[#FF6900]/20 blur-xl" aria-hidden="true" />
                                          <div className="relative rounded-2xl border-2 border-white/10 bg-secondary/60 overflow-hidden shadow-2xl h-full">
                                            <Photo alt="About me" fillContainer />
                                          </div>
                                          <div className="absolute -bottom-3 -right-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6900] text-xs font-bold text-white shadow-lg shadow-[#FF6900]/25">
                                            A
                                          </div>
                                        </div>
                    <p className="mt-4 text-center text-xs font-medium uppercase tracking-widest text-muted">Profile</p>
                  </div>

                  <div className="space-y-6">
                              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                                About <span className="text-orange-500">Me</span>
                              </h2>
                              <p className="text-lg leading-relaxed text-white/80">
                                I&apos;m a web developer who enjoys creating systems that solve real-world
                                problems. I focus on developing custom web applications, database-driven
                                solutions, and management systems that make everyday processes more efficient.
                              </p>
                              <p className="text-base leading-relaxed text-white/70">
                                I work closely with clients to understand their needs and deliver practical,
                                reliable, and user-friendly systems that make a real difference to their
                                organisation&apos;s daily operations.
                              </p>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-3">
              <div className="flex items-center justify-between gap-4">
                              <span className="text-sm font-medium text-muted">Full Name</span>
                              <span className="rounded-md bg-secondary/70 px-3 py-1.5 text-sm font-mono text-white/60">
                                Adrian D. Avanceña
                              </span>
                            </div>
              <div className="flex items-center justify-between gap-4">
                              <span className="text-sm font-medium text-muted">Location</span>
                              <span className="rounded-md bg-secondary/70 px-3 py-1.5 text-sm font-mono text-white/60">
                                Rosaria, Cavite, Philippines
                              </span>
                            </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-muted">Email</span>
                <span className="rounded-md bg-secondary/70 px-3 py-1.5 text-sm font-mono text-white/60">
                  avancena.021@gmail.com
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-muted">Phone / Contact Number</span>
                <span className="rounded-md bg-secondary/70 px-3 py-1.5 text-sm font-mono text-white/60">
                  +6393 0221 9978 / 0930 221 9978
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-muted">Professional Title</span>
                <span className="rounded-md bg-secondary/70 px-3 py-1.5 text-sm font-mono text-white/60">
                  Full-Stack Web Developer
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-muted">LinkedIn / Social</span>
                <span className="rounded-md bg-secondary/70 px-3 py-1.5 text-sm font-mono text-white/60">
                  https://www.linkedin.com/in/adrian-avancena/
                </span>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition"
            >
              Let&apos;s work together
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

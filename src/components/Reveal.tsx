import React, { useEffect, useRef, useState } from "react";

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  viewFactor?: number;
}

/**
 * Scroll-triggered entrance animation.
 *
 * The child element starts invisible and slides up; as soon as it enters the
 * viewport (within `viewFactor` of the section), it transitions to fully opaque.
 * Kept dependency-free and lightweight (no resize/debounce logic).
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  className = "",
  delay = 0,
  viewFactor = 0.15,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: viewFactor, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [viewFactor]);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "figure";
}

export function AnimatedSection({
  children,
  className = "",
  delay,
  as: Tag = "div",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.setAttribute("data-visible", "true");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayAttr = delay ? { "data-delay": String(delay) } : {};

  return (
    <Tag
      ref={ref as never}
      data-reveal=""
      {...delayAttr}
      className={className}
    >
      {children}
    </Tag>
  );
}

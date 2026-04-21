import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "moss" | "terra" | "neutral";
}

const variants = {
  moss: "bg-moss-100 text-moss-700",
  terra: "bg-terra-100 text-terra-700",
  neutral: "bg-bone border border-line text-ink-muted",
};

export function Badge({ children, variant = "moss" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}

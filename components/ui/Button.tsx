import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "tel" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  tel?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
  external?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-full";

const sizes: Record<Size, string> = {
  sm: "px-4 h-10 text-sm",
  md: "px-6 h-12 text-base",
  lg: "px-8 h-14 text-lg",
};

const variants: Record<Variant, string> = {
  primary: "bg-moss-600 text-paper hover:bg-moss-700 shadow-soft",
  tel: "bg-terra-500 text-white hover:bg-terra-700 shadow-soft",
  secondary:
    "bg-transparent border border-moss-600 text-moss-700 hover:bg-moss-50",
  ghost: "text-moss-700 underline underline-offset-4 decoration-moss-400 hover:decoration-moss-700 rounded-none",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  tel,
  onClick,
  type = "button",
  disabled,
  className = "",
  "aria-label": ariaLabel,
  external,
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (tel) {
    return (
      <a href={`tel:${tel}`} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

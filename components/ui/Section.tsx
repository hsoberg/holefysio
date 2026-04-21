import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  bg?: "bone" | "paper" | "moss" | "none";
  id?: string;
  "aria-labelledby"?: string;
}

const bgMap = {
  bone: "bg-bone",
  paper: "bg-paper",
  moss: "bg-moss-900 text-paper",
  none: "",
};

export function Section({
  children,
  className = "",
  bg = "bone",
  id,
  "aria-labelledby": labelledby,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledby}
      className={`py-20 md:py-28 lg:py-36 ${bgMap[bg]} ${className}`}
    >
      {children}
    </section>
  );
}

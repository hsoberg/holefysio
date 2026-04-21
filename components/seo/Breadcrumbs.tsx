import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbLd } from "@/lib/jsonld";

interface Crumb {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
}

export function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <>
      <JsonLd json={breadcrumbLd(crumbs)} />
      <nav aria-label="Brødsmulesti" className="mb-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-muted">
          {crumbs.map((crumb, i) => (
            <li key={crumb.path} className="flex items-center gap-1.5">
              {i < crumbs.length - 1 ? (
                <>
                  <Link
                    href={crumb.path}
                    className="link-underline hover:text-moss-600 transition-colors"
                  >
                    {crumb.name}
                  </Link>
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </>
              ) : (
                <span className="text-ink font-medium" aria-current="page">
                  {crumb.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

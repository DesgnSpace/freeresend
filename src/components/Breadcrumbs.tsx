"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-[#a3a3a3] mb-6">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
          {crumb.href ? (
            <Link href={crumb.href} className="hover:text-[#525252] transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-[#525252]">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

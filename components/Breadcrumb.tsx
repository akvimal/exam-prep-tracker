'use client';

import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-text-secondary mb-6">
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          {index > 0 && <span className="text-text-secondary/50">/</span>}
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-text-primary transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-text-primary font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

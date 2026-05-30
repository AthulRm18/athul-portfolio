interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ExternalLink({
  href,
  children,
  className = "",
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-underline inline-flex items-center gap-1 text-sm text-muted hover:text-fg transition-colors duration-300 ${className}`}
    >
      {children}
      <span className="text-[10px] rotate-45 inline-block" aria-hidden>
        ↗
      </span>
    </a>
  );
}

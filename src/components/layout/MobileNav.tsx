import Link from "next/link";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function MobileNav() {
  return (
    <nav
      className="sm:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-bg/90 backdrop-blur-md"
      aria-label="Mobile"
    >
      <div className="flex justify-around py-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[13px] text-muted hover:text-fg transition-colors px-4"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const links = [
  { href: "/#taboo", label: "Taboo or Not" },
  { href: "/library", label: "Library" },
];

/** Top navigation. Solid night, single hairline rule — no glass, no blur. */
export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-night">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-7">
          <ul className="hidden items-center gap-7 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink-2 transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink href="/#waitlist" className="px-4 py-2">
            Join the waitlist
          </ButtonLink>
        </nav>
      </Container>
    </header>
  );
}

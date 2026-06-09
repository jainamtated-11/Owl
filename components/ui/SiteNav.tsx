import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const links = [
  { href: "/#taboo", label: "Taboo or Not" },
  { href: "/library", label: "Library" },
];

/** Responsive top navigation. Sticky, with a subtle blurred night backdrop. */
export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-soft/60 bg-midnight/70 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-lavender transition-colors hover:text-moonlight"
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

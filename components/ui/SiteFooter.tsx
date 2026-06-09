import { Logo } from "@/components/brand/Logo";
import { AlwaysOnShift } from "@/components/brand/AlwaysOnShift";
import { Container } from "@/components/ui/Container";

/** Global footer with brand line and the recurring solidarity element. */
export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border-soft/60 py-12">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <Logo />
          <p className="max-w-xs text-sm text-muted">
            A calm corner of the internet for people who work while the world
            sleeps.
          </p>
        </div>
        <div className="space-y-3 sm:text-right">
          <AlwaysOnShift className="sm:justify-end" />
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Moonlighters. Made for the night shift.
          </p>
        </div>
      </Container>
    </footer>
  );
}

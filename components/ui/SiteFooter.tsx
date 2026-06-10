import { Logo } from "@/components/brand/Logo";
import { AlwaysOnShift } from "@/components/brand/AlwaysOnShift";
import { Container } from "@/components/ui/Container";

/** Global footer — brand line, solidarity readout, hairline structure. */
export function SiteFooter() {
  return (
    <footer className="mt-28 border-t border-line py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Evidence-based, judgment-free education for people who work while the
            world sleeps.
          </p>
        </div>
        <div className="space-y-3 sm:text-right">
          <AlwaysOnShift className="sm:justify-end" />
          <p className="data text-xs text-muted">
            © {new Date().getFullYear()} Moonlighters
          </p>
        </div>
      </Container>
    </footer>
  );
}

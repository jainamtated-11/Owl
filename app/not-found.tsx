import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <span className="data text-sm text-amber">404</span>
      <h1 className="mt-4 text-[clamp(2rem,5vw,3rem)] font-bold leading-tight text-ink">
        This page is off the clock.
      </h1>
      <p className="mt-4 max-w-md text-ink-2">
        The page you&apos;re looking for has clocked out. Let&apos;s get you back
        to somewhere lit.
      </p>
      <ButtonLink href="/" className="mt-8">
        Back to home
      </ButtonLink>
    </Container>
  );
}

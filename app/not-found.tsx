import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Glow } from "@/components/brand/Glow";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <Glow className="left-1/2 top-0 h-[24rem] w-[24rem] -translate-x-1/2" />
      <Container className="relative flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-serif text-6xl text-amber">404</p>
        <h1 className="mt-6 font-serif text-3xl text-moonlight sm:text-4xl">
          This page is off the clock.
        </h1>
        <p className="mt-4 max-w-md text-lavender">
          The page you&apos;re looking for has clocked out. Let&apos;s get you
          back to somewhere lit.
        </p>
        <ButtonLink href="/" className="mt-8">
          Back to home
        </ButtonLink>
      </Container>
    </section>
  );
}

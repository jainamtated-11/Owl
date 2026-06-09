import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Glow } from "@/components/brand/Glow";
import { AlwaysOnShift } from "@/components/brand/AlwaysOnShift";
import { Reveal } from "@/components/motion/Reveal";

/** Emotional hero — the front door of Moonlighters. */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Glow className="left-1/2 top-[-12rem] h-[34rem] w-[34rem] -translate-x-1/2" />
      <Container className="relative flex flex-col items-center py-24 text-center sm:py-32">
        <Reveal>
          <AlwaysOnShift className="mb-8" />
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mx-auto max-w-3xl font-serif text-4xl leading-[1.1] text-moonlight sm:text-6xl">
            For the people who keep the world running while it sleeps.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-lavender">
            Honest education about your body, mind, and life on the night shift —
            minus the shame. Built for India&apos;s night workers.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="/#waitlist">Join the waitlist</ButtonLink>
            <ButtonLink href="/#taboo" variant="ghost">
              Try “Taboo or Not”
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

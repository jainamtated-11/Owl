import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { AlwaysOnShift } from "@/components/brand/AlwaysOnShift";
import { CircadianChart } from "@/components/brand/CircadianChart";
import { Reveal } from "@/components/motion/Reveal";

/** Hero: the claim on the left, the evidence (circadian chart) on the right. */
export function Hero() {
  return (
    <section className="border-b border-line">
      <Container className="grid items-center gap-x-12 gap-y-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-24">
        <Reveal className="max-w-xl">
          <AlwaysOnShift className="mb-7" />
          <h1 className="text-[clamp(2.4rem,6vw,4rem)] font-bold leading-[1.04] text-ink">
            For the people who keep the world running while it sleeps.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-2">
            Night work fights your biology, and most advice about it is myth or
            shame. Moonlighters gives India&apos;s night workers the evidence
            instead: what the shift actually does to you, and what helps.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="/#waitlist">Join the waitlist</ButtonLink>
            <ButtonLink href="/#taboo" variant="ghost">
              See the evidence
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="rounded-xl border border-line bg-night-2 p-5 sm:p-6">
          <CircadianChart />
        </Reveal>
      </Container>
    </section>
  );
}

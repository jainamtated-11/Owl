import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { AlwaysOnShift } from "@/components/brand/AlwaysOnShift";
import { CircadianChart } from "@/components/brand/CircadianChart";
import { Reveal } from "@/components/motion/Reveal";

/** Hero: claim on the left, evidence (chart) on the right, over a violet-sky
 *  atmospheric backdrop (Superhuman's hero depth medium). */
export function Hero() {
  return (
    <section className="hero-atmosphere border-b border-line">
      <Container className="grid items-center gap-x-12 gap-y-12 py-20 sm:py-24 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        <Reveal className="max-w-xl">
          <AlwaysOnShift className="mb-7" />
          <h1 className="text-[clamp(2.6rem,6.4vw,4.25rem)] text-ink">
            For the people who keep the world running while it sleeps.
          </h1>
          <p className="mt-7 max-w-md text-lg font-[460] leading-[1.5] text-ink-2">
            Night work fights your biology, and most advice about it is myth or
            shame. Moonlighters gives India&apos;s night workers the evidence
            instead: what the shift actually does to you, and what helps.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="/#waitlist" variant="pill">
              Join the waitlist
            </ButtonLink>
            <ButtonLink href="/#taboo" variant="ghost">
              See the evidence
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="rounded-xl border border-line bg-night/50 p-5 sm:p-6">
          <CircadianChart />
        </Reveal>
      </Container>
    </section>
  );
}

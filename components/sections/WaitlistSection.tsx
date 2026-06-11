import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";

/**
 * The closing chord: a full-bleed deep-teal band (Superhuman's signature page
 * resolution), breaking the indigo rhythm with one warm-dark interlude.
 */
export function WaitlistSection() {
  return (
    <section id="waitlist" className="scroll-mt-16 bg-teal-deep py-24 sm:py-32">
      <Container>
        <Reveal className="max-w-xl">
          <h2 className="text-[clamp(2rem,4.6vw,3rem)] text-ink">
            Be first through the door.
          </h2>
          <p className="mt-5 max-w-md text-lg font-[460] leading-[1.5] text-on-teal-mute">
            New guides, the wellness kits, and a community that gets the 3am
            life. No spam, and never at the wrong hour.
          </p>
          <div className="mt-8">
            <WaitlistForm tone="teal" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";

/** Closing call-to-action with the email capture form. No glow. */
export function WaitlistSection() {
  return (
    <section id="waitlist" className="scroll-mt-16 py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-xl">
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold leading-tight text-ink">
            Be first through the door.
          </h2>
          <p className="mt-4 text-ink-2">
            New guides, the wellness kits, and a community that gets the 3am
            life. No spam, and never at the wrong hour.
          </p>
          <div className="mt-8 text-left">
            <WaitlistForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { Glow } from "@/components/brand/Glow";
import { Reveal } from "@/components/motion/Reveal";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";

/** Closing call-to-action with the email capture form. */
export function WaitlistSection() {
  return (
    <section id="waitlist" className="relative scroll-mt-20 py-20 sm:py-28">
      <Glow className="left-1/2 bottom-[-10rem] h-[28rem] w-[28rem] -translate-x-1/2" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="font-serif text-3xl text-moonlight sm:text-4xl">
            Be first through the door.
          </h2>
          <p className="mt-4 text-lavender">
            Join the waitlist for new guides, the wellness kits, and a community
            that gets the 3am life. No spam — and never at the wrong hour.
          </p>
          <div className="mt-8 text-left">
            <WaitlistForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

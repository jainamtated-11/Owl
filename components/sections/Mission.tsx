import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/** A confident, evidence-first statement of purpose. No section eyebrow. */
export function Mission() {
  return (
    <section className="border-b border-line py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-[clamp(1.5rem,3.2vw,2.2rem)] font-medium leading-[1.3] text-ink">
            The night shift has measurable costs to your sleep, metabolism,
            mood, and safety. You can&apos;t opt out of the biology, but you can
            stop flying blind.{" "}
            <span className="text-muted">
              We translate the research into plain, practical answers, and leave
              the lectures and the shame out of it.
            </span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

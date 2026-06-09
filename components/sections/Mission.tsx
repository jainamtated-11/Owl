import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/** A short, warm statement of why Moonlighters exists. */
export function Mission() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-amber">
            Why we&apos;re here
          </p>
          <p className="mt-6 font-serif text-2xl leading-relaxed text-moonlight sm:text-3xl">
            The night shift comes with real costs to your sleep, health, and
            relationships — and a pile of stigma on top. We&apos;re here to give
            you the honest information, without the lecture, so you can survive
            and thrive on your own clock.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

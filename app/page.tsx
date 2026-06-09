import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { TabooPreview } from "@/components/sections/TabooPreview";
import { LibraryPreview } from "@/components/sections/LibraryPreview";
import { WaitlistSection } from "@/components/sections/WaitlistSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <TabooPreview />
      <LibraryPreview />
      <WaitlistSection />
    </>
  );
}

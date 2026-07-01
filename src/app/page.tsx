import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { YadegarFeature } from "@/components/yadegar-feature";
import { AboutTeaser } from "@/components/about-teaser";
import { ContactBand } from "@/components/contact-band";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <SelectedWork />
      <YadegarFeature />
      <AboutTeaser />
      <ContactBand />
    </main>
  );
}

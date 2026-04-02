import { SplashScreen } from "@/components/SplashScreen";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ModuleCards } from "@/components/ModuleCards";
import { PainPoints } from "@/components/PainPoints";
import { ProductShowcase } from "@/components/ProductShowcase";
import { HowItWorks } from "@/components/HowItWorks";
import { OriginStory } from "@/components/OriginStory";
import { Capabilities } from "@/components/Capabilities";
import { Metrics } from "@/components/Metrics";
import { TrustSignal } from "@/components/TrustSignal";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingElements } from "@/components/FloatingElements";

export default function Home() {
  return (
    <SplashScreen>
      <Nav />
      <Hero />
      <ModuleCards />
      <PainPoints />
      <ProductShowcase />
      <HowItWorks />
      <OriginStory />
      <Capabilities />
      <Metrics />
      <TrustSignal />
      <CTA />
      <Footer />
      <FloatingElements />
    </SplashScreen>
  );
}

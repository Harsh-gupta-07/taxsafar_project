import { CtaSection } from "@/components/home/cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import { ServicesSection } from "@/components/home/services-section";
import { TrustStrip } from "@/components/home/trust-strip";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}

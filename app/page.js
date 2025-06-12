import HeroSection from "@/components/hero/Hero_1";
import Features from "@/components/features/Features_1"
import Pricing from "@/components/pricing/Pricing_1"
import Footer from "@/components/footer/Footer_1"
import NavBar from "@/components/navigation/Nav_1"
import Gallery from "@/components/gallery/Gallery_1"

export default function HomePage() {
  return (
      <main>
        <NavBar />
        <HeroSection
          headline="Launch Your Site Like a Pro"
          subheadline="Websites That Look £2,000 — Delivered for £249"
          description="Professionally designed, mobile-ready sites built and deployed in 48 hours. Zero fluff, all results."
          ctaText="Claim Your Spot"
          ctaLink="#contact"
          logos={[
            "/logo-placeholder-1.svg",
            "/logo-placeholder-2.svg",
          ]}
        />
        <Features />
        <Gallery />
        <Pricing />
        <Footer />
      </main>
  );
}

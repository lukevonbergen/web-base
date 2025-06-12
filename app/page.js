import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features"
import NavBar from "@/components/NavBar"

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
      </main>
  );
}

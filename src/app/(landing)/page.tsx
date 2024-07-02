import { HeroCarousel, AboutUs, BannerOne, DentistMap, StepsSection, SectionServices, LandingPricing, HeroOne, HeroTwo, HeroThree } from "@dentist/components/landing";

export default function Home() {
  return (
    <div className="h-full">
      <HeroCarousel />
      <AboutUs />
      <BannerOne />
      <StepsSection /> 
      <SectionServices />
      <LandingPricing />
      <DentistMap />
    </div>
  );
}
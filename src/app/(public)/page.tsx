
import { AboutUs } from "./_components/about-us";
import { BannerOne } from "./_components/banner-one";
import { DentistMap } from "./_components/dentist-map";
import { HeroCarousel } from "./_components/hero";
import { LandingPricing } from "./_components/landing-pricing";
import { SectionServices } from "./_components/section-services";
import { StepsSection } from "./_components/steps";


export default function Home() {
  return (
    <>
      <HeroCarousel />
      <AboutUs />
      <BannerOne />
      <StepsSection /> 
      <SectionServices />
      <LandingPricing />
      <DentistMap />
    </>
  );
}
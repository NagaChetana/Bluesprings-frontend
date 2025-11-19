import React from 'react'
import { NavigationBarSection } from './sections/NavigationBarSection/NavigationBarSection'
import { HeroBannerSection } from './sections/HeroBannerSection/HeroBannerSection'
import { AboutUsSection } from './sections/AboutUsSection/AboutUsSection'
// Removed unused sections: FeaturesOverviewSection, DemoShowcaseSection,
// ClientTestimonialsSection, FooterSection

export const Desktop = () => {
  return (
    <main className="bg-gray-50 overflow-hidden w-full min-w-[1024px] flex flex-col">
      <NavigationBarSection />
      <HeroBannerSection />
      <AboutUsSection />
    </main>
  )
}

export default Desktop

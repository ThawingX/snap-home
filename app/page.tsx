"use client";

import { NavbarResize } from "@/components/navbar-resize";
import { HeroMaskEffect } from "@/components/hero-mask-effect";
import { FeaturesSection } from "@/components/features-section";
export default function Home() {
  return (
    <div>
      <NavbarResize />
      <HeroMaskEffect />
      <FeaturesSection />
    </div>
  );
}

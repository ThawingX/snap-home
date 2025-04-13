"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function HeroMaskEffect() {
  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const featuresSection = document.querySelector(".py-10.lg\\:py-40");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex w-full items-center justify-center overflow-hidden" style={{
      height: "calc(100vh - 60px)",
      minHeight: "600px",
      maxHeight: "85vh",
      marginBottom: "-80px"
    }}>
      <MaskContainer
        revealText={
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-4xl font-bold text-slate-800 dark:text-white mb-8">
              The product <span className="text-blue-500">concept validation</span> stage is full of potential pitfalls.
            </p>
            <div className="flex gap-4 mt-8 justify-center">
              <div 
                className="px-8 py-4 text-lg rounded-full bg-white text-black font-medium shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] cursor-default"
              >
                Hover me
              </div>
            </div>
          </div>

        }
        className="h-full w-full text-white dark:text-black"
      >
        <div>
          SnapSnap helps you <span className="text-blue-500">solve those problems.</span>
          <div className="flex gap-4 mt-8 justify-center">
            <a 
              href="#features" 
              onClick={scrollToFeatures}
              className="px-6 py-3 rounded-full bg-white text-black font-medium shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            >
              Explore Now
            </a>
          </div>
        </div>
      </MaskContainer>
    </div>
  );
}

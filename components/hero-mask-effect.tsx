"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function HeroMaskEffect() {
  return (
    <div className="flex w-full items-center justify-center overflow-hidden" style={{
      height: "calc(100vh - 60px)",
      minHeight: "600px",
      maxHeight: "85vh",
      marginBottom: "-80px"
    }}>
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
            The product <span className="text-blue-500">concept validation</span> stage is full of potential pitfalls.
          </p>
        }
        className="h-full w-full text-white dark:text-black"
      >
        SnapSnap helps you  <span className="text-blue-500">solve those problems.</span>
      </MaskContainer>
    </div>
  );
}

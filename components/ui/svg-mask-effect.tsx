"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<any>({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<any>(null);
  
  const updateMousePosition = (e: any) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    setIsMounted(true);
    
    if (containerRef.current) {
      containerRef.current.addEventListener("mousemove", updateMousePosition);
    }
    
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "mousemove",
          updateMousePosition,
        );
      }
    };
  }, []);
  
  const maskSize = isHovered ? revealSize : size;
  
  // Default static values for server-side rendering to avoid hydration mismatch
  const initialMaskPosition = `0px 0px`;
  const initialMaskSize = `${size}px`;

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative h-screen", className)}
      animate={isMounted ? {
        backgroundColor: isHovered ? "var(--slate-900)" : "var(--white)",
      } : {}}
      transition={{
        backgroundColor: { duration: 0.3 },
      }}
    >
      <motion.div
        className="absolute flex h-full w-full items-center justify-center bg-black text-6xl [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] [mask-size:40px] dark:bg-white"
        style={!isMounted ? {
          maskPosition: initialMaskPosition,
          WebkitMaskPosition: initialMaskPosition,
          maskSize: initialMaskSize,
          WebkitMaskSize: initialMaskSize
        } : {}}
        animate={isMounted ? {
          maskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          maskSize: `${maskSize}px`,
        } : {}}
        transition={{
          maskSize: { duration: 0.3, ease: "easeInOut" },
          maskPosition: { duration: 0.15, ease: "linear" },
        }}
      >
        <div className="absolute inset-0 z-0 h-full w-full bg-black opacity-50 dark:bg-white" />
        <div
          onMouseEnter={() => {
            isMounted && setIsHovered(true);
          }}
          onMouseLeave={() => {
            isMounted && setIsHovered(false);
          }}
          className="relative z-20 mx-auto max-w-4xl text-center text-4xl font-bold"
        >
          {children}
        </div>
      </motion.div>

      <div className="flex h-full w-full items-center justify-center">
        {revealText}
      </div>
    </motion.div>
  );
};

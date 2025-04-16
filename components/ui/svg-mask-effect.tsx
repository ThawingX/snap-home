"use client";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// 防抖函数
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export const MaskContainer = ({
  children,
  revealText,
  size = 20,
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  
  // 使用useCallback优化函数定义
  const updateMousePosition = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      const rect = containerRef.current!.getBoundingClientRect();
      setMousePosition({ 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      });
      rafRef.current = null;
    });
  }, []);
  
  // 防抖后的鼠标移动处理函数 - 降低防抖时间
  const debouncedUpdateMousePosition = useMemo(
    () => debounce(updateMousePosition, 2),
    [updateMousePosition]
  );

  // 设置初始位置到屏幕中心
  const setInitialPosition = useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: rect.width / 2,
        y: rect.height / 2
      });
    }
  }, []);

  useEffect(() => {
    // 立即标记为已挂载
    setIsMounted(true);
    
    // 初始化鼠标位置到中心点
    setInitialPosition();
    
    const currentRef = containerRef.current;
    if (currentRef) {
      currentRef.addEventListener("mousemove", debouncedUpdateMousePosition);
    }
    
    return () => {
      if (currentRef) {
        currentRef.removeEventListener(
          "mousemove",
          debouncedUpdateMousePosition
        );
      }
      
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [debouncedUpdateMousePosition, setInitialPosition]);
  
  const maskSize = isHovered ? revealSize : size;
  
  // 静态SSR值避免水合不匹配
  const initialMaskPosition = `0px 0px`;
  const initialMaskSize = `${size}px`;

  // 优化动画配置 - 加快动画速度以使效果更即时
  const animationConfig = {
    maskSize: { duration: 0.1, ease: "easeOut" },
    maskPosition: { duration: 0.05, ease: "linear" },
  };

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative h-screen", className)}
      initial={{ backgroundColor: "var(--white)" }}
      animate={isMounted ? {
        backgroundColor: isHovered ? "var(--slate-900)" : "var(--white)",
      } : {}}
      transition={{
        backgroundColor: { duration: 0.1 },
      }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <motion.div
        className="absolute flex h-full w-full items-center justify-center bg-black text-6xl [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] [mask-size:40px] dark:bg-white will-change-transform"
        initial={{
          maskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
          maskSize: `${size}px`,
          WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        style={!isMounted ? {
          maskPosition: initialMaskPosition,
          WebkitMaskPosition: initialMaskPosition,
          maskSize: initialMaskSize,
          WebkitMaskSize: initialMaskSize
        } : {}}
        animate={{
          maskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          maskSize: `${maskSize}px`,
          WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          WebkitMaskSize: `${maskSize}px`,
        }}
        transition={animationConfig}
      >
        <div className="absolute inset-0 z-0 h-full w-full bg-black opacity-50 dark:bg-white" />
        <div
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

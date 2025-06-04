"use client";

import { NavbarResize } from "@/components/navbar-resize";
import { HeroMaskEffect } from "@/components/hero-mask-effect";
import { FeaturesSection } from "@/components/features-section";
import JsonLd, { generateProductData } from "@/components/json-ld";
import { useEffect, useState } from "react";
import { type Language } from "@/lib/seo-config";
export default function Home() {
  // 客户端检测语言
  const [language, setLanguage] = useState<Language>('en');
  
  useEffect(() => {
    // 从Cookie中获取语言设置
    const cookieLang = document.cookie
      .split('; ')
      .find(row => row.startsWith('NEXT_LOCALE='));
      
    if (cookieLang) {
      const lang = cookieLang.split('=')[1] as Language;
      if (lang === 'en' || lang === 'zh') {
        setLanguage(lang);
      }
    } else if (navigator.language.startsWith('zh')) {
      setLanguage('zh');
    }
  }, []);
  
  return (
    <div>
      {/* 添加产品结构化数据 */}
      <JsonLd type="Product" data={generateProductData(language)} />
      <NavbarResize />
      <HeroMaskEffect />
      <FeaturesSection />
    </div>
  );
}

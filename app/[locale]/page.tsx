'use client';

import { NavbarResize } from "@/components/navbar-resize";
import { HeroMaskEffect } from "@/components/hero-mask-effect";
import { FeaturesSection } from "@/components/features-section";
import JsonLd, { generateProductData } from "@/components/json-ld";
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { type Language } from "@/lib/seo-config";

export default function Home() {
  // 获取当前语言参数
  const params = useParams();
  const locale = params.locale as Language;
  
  // 获取翻译函数
  const t = useTranslations('home');
  
  return (
    <div>
      {/* 添加产品结构化数据 */}
      <JsonLd type="Product" data={generateProductData(locale)} />
      <NavbarResize />
      <HeroMaskEffect />
      <FeaturesSection />
    </div>
  );
}
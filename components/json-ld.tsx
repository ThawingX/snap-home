/**
 * JSON-LD结构化数据组件
 * 用于向搜索引擎提供结构化数据，提高SEO效果
 */

import { type Language } from '@/lib/seo-config';

interface JsonLdProps {
  type: 'Organization' | 'WebSite' | 'Product' | 'Article';
  data: Record<string, any>;
}

export default function JsonLd({ type, data }: JsonLdProps) {
  // 根据类型构建基础结构
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/**
 * 生成组织结构化数据
 * @param lang 语言代码
 * @returns 组织结构化数据对象
 */
export function generateOrganizationData(lang: Language) {
  return {
    name: 'SnapSnap',
    url: 'https://snapsnap.site',
    logo: 'https://snapsnap.site/logo.png',
    description: lang === 'en'
      ? 'SnapSnap helps product managers validate concepts, perform competitive analysis, and gain SaaS insights to build better MVPs.'
      : 'SnapSnap帮助产品经理验证概念、进行竞品分析并获取SaaS洞察，以构建更好的最小可行产品。',
    sameAs: [
      'https://twitter.com/snapsnap',
      'https://linkedin.com/company/snapsnap',
      'https://github.com/snapsnap',
    ],
  };
}

/**
 * 生成网站结构化数据
 * @param lang 语言代码
 * @returns 网站结构化数据对象
 */
export function generateWebsiteData(lang: Language) {
  return {
    name: 'SnapSnap',
    url: 'https://snapsnap.site',
    description: lang === 'en'
      ? 'SnapSnap helps product managers validate concepts, perform competitive analysis, and gain SaaS insights to build better MVPs.'
      : 'SnapSnap帮助产品经理验证概念、进行竞品分析并获取SaaS洞察，以构建更好的最小可行产品。',
    potentialAction: {
      '@type': 'SearchAction',
      'target': 'https://snapsnap.site/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * 生成产品结构化数据
 * @param lang 语言代码
 * @returns 产品结构化数据对象
 */
export function generateProductData(lang: Language) {
  return {
    name: 'SnapSeeker',
    description: lang === 'en'
      ? 'Competitive research tool designed to give you a market edge.'
      : '竞品研究工具，旨在为您提供市场优势。',
    brand: {
      '@type': 'Brand',
      'name': 'SnapSnap',
    },
    offers: {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/InStock',
    },
  };
}
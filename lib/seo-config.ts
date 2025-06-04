/**
 * SEO配置文件
 * 这个文件集中管理网站的SEO配置，包括元数据、关键词和描述
 * 支持英文和简体中文两种语言
 */

import { Metadata } from 'next';

// 语言类型定义
export type Language = 'en' | 'zh';

// 基础SEO配置
interface BaseSEOConfig {
  title: string;
  description: string;
  keywords: string[];
}

// 页面特定SEO配置
export interface PageSEOConfig {
  home: BaseSEOConfig;
  about: BaseSEOConfig;
  contact: BaseSEOConfig;
}

// 多语言SEO配置
export const seoConfig: Record<Language, PageSEOConfig> = {
  // 英文配置
  en: {
    home: {
      title: 'SnapSnap - MVP Design & Competitive Analysis Tools',
      description: 'SnapSnap helps product managers validate concepts, perform competitive analysis, and gain SaaS insights to build better MVPs.',
      keywords: ['MVP design', 'competitive analysis', 'SaaS insights', 'product validation', 'market research'],
    },
    about: {
      title: 'About SnapSnap - Our Mission & Story',
      description: 'Learn about SnapSnap\'s mission to help product managers and entrepreneurs validate their concepts efficiently through competitive research and market analysis.',
      keywords: ['product validation', 'competitive research', 'market analysis', 'MVP development', 'SnapSnap story'],
    },
    contact: {
      title: 'Contact SnapSnap - Get in Touch With Our Team',
      description: 'Have questions about SnapSnap? Contact our team for information about our MVP design and competitive analysis tools.',
      keywords: ['contact SnapSnap', 'product validation help', 'competitive analysis support', 'MVP design assistance'],
    },
  },
  // 中文配置
  zh: {
    home: {
      title: 'SnapSnap - MVP设计与竞品分析工具',
      description: 'SnapSnap帮助产品经理验证概念、进行竞品分析并获取SaaS洞察，以构建更好的最小可行产品。',
      keywords: ['MVP设计', '竞品分析', 'SaaS洞察', '产品验证', '市场研究'],
    },
    about: {
      title: '关于SnapSnap - 我们的使命与故事',
      description: '了解SnapSnap的使命，我们致力于通过竞争研究和市场分析帮助产品经理和企业家高效验证他们的概念。',
      keywords: ['产品验证', '竞争研究', '市场分析', 'MVP开发', 'SnapSnap故事'],
    },
    contact: {
      title: '联系SnapSnap - 与我们的团队取得联系',
      description: '对SnapSnap有疑问？联系我们的团队，了解有关我们的MVP设计和竞品分析工具的信息。',
      keywords: ['联系SnapSnap', '产品验证帮助', '竞品分析支持', 'MVP设计协助'],
    },
  },
};

/**
 * 获取基础元数据配置
 * @param lang 语言代码 ('en' | 'zh')
 * @returns 基础元数据对象
 */
export function getBaseMetadata(lang: Language = 'en'): Metadata {
  return {
    metadataBase: new URL('https://snapsnap.site'),
    alternates: {
      languages: {
        'en': '/en',
        'zh': '/zh',
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'SnapSnap',
      locale: lang === 'en' ? 'en_US' : 'zh_CN',
      alternateLocale: lang === 'en' ? 'zh_CN' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@snapsnap',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/**
 * 获取页面特定的元数据
 * @param pageName 页面名称
 * @param lang 语言代码 ('en' | 'zh')
 * @returns 合并了基础元数据和页面特定元数据的对象
 */
export function getPageMetadata(pageName: keyof PageSEOConfig, lang: Language = 'en'): Metadata {
  const baseMetadata = getBaseMetadata(lang);
  const pageConfig = seoConfig[lang][pageName];
  
  return {
    ...baseMetadata,
    title: pageConfig.title,
    description: pageConfig.description,
    keywords: pageConfig.keywords,
    openGraph: {
      ...baseMetadata.openGraph,
      title: pageConfig.title,
      description: pageConfig.description,
    },
  };
}
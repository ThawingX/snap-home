/**
 * Contact页面元数据配置
 */

import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo-config';
import { locales } from '@/i18n';

// 导出Contact页面的元数据配置
export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> => {
  // 验证locale是否有效
  const { locale } = await params;
  if (!locales.includes(locale)) {
    return {};
  }
  
  return getPageMetadata('contact', locale as 'en' | 'zh');
};
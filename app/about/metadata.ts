/**
 * About页面元数据配置
 */

import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo-config';
import { getCurrentLanguage } from '@/lib/language-utils';

// 导出About页面的元数据配置
export const generateMetadata = async (): Promise<Metadata> => {
  const lang = await getCurrentLanguage();
  return getPageMetadata('about', lang);
};
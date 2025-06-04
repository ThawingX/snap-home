/**
 * robots.txt配置
 * 控制搜索引擎爬虫如何索引网站
 */

import { MetadataRoute } from 'next';

// 导出robots.txt配置
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // 如果有不希望被索引的路径，可以在这里添加
      // disallow: '/private/',
    },
    sitemap: 'https://snapsnap.site/sitemap.xml',
  };
}
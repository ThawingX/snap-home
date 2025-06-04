/**
 * sitemap.xml配置
 * 帮助搜索引擎了解网站结构
 */

import { MetadataRoute } from 'next';

// 导出sitemap配置
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://snapsnap.site';
  
  // 定义网站的主要页面
  const routes = [
    '',
    '/about',
    '/contact',
  ];
  
  // 为每个页面创建sitemap条目
  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
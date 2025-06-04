// middleware.js
// 用于处理国际化路由中间件

import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './i18n';

// 创建国际化中间件
export default createMiddleware({
  // 定义支持的语言
  locales,
  // 默认语言
  defaultLocale,
  // 本地化检测策略
  localeDetection: true,
  // 本地化前缀策略 - 总是显示语言前缀
  localePrefix: 'always'
});

// 配置中间件匹配的路径
export const config = {
  // 匹配所有路径，除了以下内容：
  // - 以 `/api` 开头的路径 (API 路由)
  // - 以 `.` 开头的路径 (静态文件)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
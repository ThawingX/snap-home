/**
 * 语言工具函数
 * 用于检测和管理网站的语言设置
 */

import { cookies } from 'next/headers';
import { type Language } from './seo-config';

// 默认语言
export const DEFAULT_LANGUAGE: Language = 'en';

/**
 * 从请求头或Cookie中获取当前语言
 * @returns 当前语言代码 ('en' | 'zh')
 */
export async function getCurrentLanguage(): Promise<Language> {
  // 使用try-catch包裹cookies()调用，因为它只能在请求上下文中使用
  try {
    // 尝试从Cookie中获取语言设置
    const cookieStore = await cookies();
    const langCookie = cookieStore.get('NEXT_LOCALE');
    
    if (langCookie?.value === 'zh' || langCookie?.value === 'en') {
      return langCookie.value as Language;
    }
    
    // 如果没有Cookie，尝试从Accept-Language头部获取
    // 注意：这在客户端组件中不可用，只在服务器组件中有效
    try {
      const headers = new Headers();
      const acceptLanguage = headers.get('Accept-Language');
      
      if (acceptLanguage && acceptLanguage.includes('zh')) {
        return 'zh';
      }
    } catch (error) {
      // 忽略错误
    }
  } catch (error) {
    // 如果在非请求上下文中调用，cookies()会抛出错误
    // 忽略错误，使用默认语言
    console.log('Warning: cookies() was called outside request context');
  }
  
  // 默认返回英语
  return DEFAULT_LANGUAGE;
}

/**
 * 设置当前语言到Cookie
 * @param lang 要设置的语言代码
 */
export function setLanguage(lang: Language): void {
  document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=${60 * 60 * 24 * 365}`;
  window.location.reload();
}

/**
 * 获取备用语言
 * 如果当前是英文，返回中文；如果当前是中文，返回英文
 * @param currentLang 当前语言
 * @returns 备用语言
 */
export function getAlternateLanguage(currentLang: Language): Language {
  return currentLang === 'en' ? 'zh' : 'en';
}
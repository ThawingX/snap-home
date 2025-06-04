// i18n.js
// 用于配置next-intl的国际化设置

import {getRequestConfig} from 'next-intl/server';

// 定义支持的语言
export const locales = ['en', 'zh'];

// 默认语言
export const defaultLocale = 'en';

// 加载翻译消息
export default getRequestConfig(async ({locale}) => {
  // 确保locale有值，如果没有则使用默认语言
  const safeLocale = locale || defaultLocale;
  
  try {
    const messages = (await import(`@/messages/${safeLocale}.json`)).default;
    return { 
      locale: safeLocale, // 添加locale属性到返回对象
      messages 
    };
  } catch (error) {
    console.error(`Error loading messages for locale: ${safeLocale}`, error);
    // 如果加载失败，尝试使用默认语言
    if (safeLocale !== defaultLocale) {
      const defaultMessages = (await import(`@/messages/${defaultLocale}.json`)).default;
      return { 
        locale: defaultLocale, // 使用默认语言作为locale
        messages: defaultMessages 
      };
    }
    // 如果默认语言也加载失败，返回空对象
    return { 
      locale: defaultLocale, // 确保始终返回locale属性
      messages: {} 
    };
  }
});
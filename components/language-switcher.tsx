'use client';

/**
 * 语言切换组件
 * 允许用户在英文和中文之间切换
 */

import { useState, useEffect } from 'react';
import { type Language } from '@/lib/seo-config';

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  
  // 在客户端加载时检测当前语言
  useEffect(() => {
    const cookieLang = document.cookie
      .split('; ')
      .find(row => row.startsWith('NEXT_LOCALE='));
      
    if (cookieLang) {
      const lang = cookieLang.split('=')[1] as Language;
      if (lang === 'en' || lang === 'zh') {
        setCurrentLang(lang);
      }
    } else if (navigator.language.startsWith('zh')) {
      setCurrentLang('zh');
    }
  }, []);
  
  // 切换语言
  const toggleLanguage = () => {
    const newLang: Language = currentLang === 'en' ? 'zh' : 'en';
    document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=${60 * 60 * 24 * 365}`;
    setCurrentLang(newLang);
    window.location.reload();
  };
  
  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 text-sm rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
      aria-label={currentLang === 'en' ? 'Switch to Chinese' : 'Switch to English'}
    >
      {currentLang === 'en' ? '中文' : 'EN'}
    </button>
  );
}
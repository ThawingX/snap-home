'use client';

/**
 * 语言切换组件
 * 允许用户在英文和中文之间切换
 */

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/navigation';
import { type Language } from '@/lib/seo-config';

export default function LanguageSwitcher() {
  // 使用next-intl钩子获取当前语言和翻译
  const locale = useLocale() as Language;
  const t = useTranslations('common');
  const router = useRouter();
  const pathname = usePathname();
  
  // 切换语言
  const toggleLanguage = () => {
    const newLocale: Language = locale === 'en' ? 'zh' : 'en';
    router.replace(pathname, { locale: newLocale });
  };
  
  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 text-sm rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
      aria-label={t('switchToLanguage')}
    >
      {locale === 'en' ? '中文' : 'EN'}
    </button>
  );
}
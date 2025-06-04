// 根页面重定向到默认语言路径

import { redirect } from 'next/navigation';
import { defaultLocale } from '@/i18n';

export default function RootPage() {
  // 重定向到默认语言路径
  redirect(`/${defaultLocale}`);
}

// navigation.js
// 提供导航相关的工具函数和钩子

import {createNavigation} from 'next-intl/navigation';
import {locales} from './i18n';

// 创建本地化路径名导航
export const {Link, redirect, usePathname, useRouter} = createNavigation({
  locales
});
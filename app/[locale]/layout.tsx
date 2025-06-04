import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { getBaseMetadata } from "@/lib/seo-config";
import JsonLd, { generateOrganizationData, generateWebsiteData } from "@/components/json-ld";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 动态生成元数据
export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  // 验证locale是否有效
  const { locale } = await params;
  
  if (!locales.includes(locale)) {
    notFound();
  }
  
  return getBaseMetadata(locale as 'en' | 'zh');
}

// 生成静态参数
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // 验证locale是否有效
  const { locale } = await params;
  if (!locales.includes(locale)) {
    notFound();
  }

  // 加载当前语言的消息
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  
  return (
    <html lang={locale} className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 添加结构化数据 */}
        <JsonLd type="Organization" data={generateOrganizationData(locale as 'en' | 'zh')} />
        <JsonLd type="WebSite" data={generateWebsiteData(locale as 'en' | 'zh')} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
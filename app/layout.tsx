import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getBaseMetadata } from "@/lib/seo-config";
import { getCurrentLanguage, DEFAULT_LANGUAGE } from "@/lib/language-utils";
import JsonLd, { generateOrganizationData, generateWebsiteData } from "@/components/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 动态生成元数据
export async function generateMetadata(): Promise<Metadata> {
  const lang = await getCurrentLanguage();
  return getBaseMetadata(lang);
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 在服务器组件中，我们可以安全地使用DEFAULT_LANGUAGE作为后备
  // 实际的语言检测会在请求上下文中的generateMetadata函数中完成
  const lang = DEFAULT_LANGUAGE;
  
  return (
    <html lang={lang} className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 添加结构化数据 */}
        <JsonLd type="Organization" data={generateOrganizationData(lang)} />
        <JsonLd type="WebSite" data={generateWebsiteData(lang)} />
        {children}
      </body>
    </html>
  );
}

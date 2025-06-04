'use client';

import { NavbarResize } from "@/components/navbar-resize";
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { type Language } from "@/lib/seo-config";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function About() {
  // 获取当前语言参数
  const params = useParams();
  const locale = params.locale as Language;
  
  // 获取翻译函数
  const t = useTranslations('about');
  
  return (
    <div className="min-h-screen bg-background">
      <NavbarResize />
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">{t('title')}</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {t('description')}
            </p>
          </div>
          
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl">{t('mission.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                {t('mission.paragraph1')}
              </p>
              <p className="text-lg">
                {t('mission.paragraph2')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl">{t('story.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                {t('story.paragraph1')}
              </p>
              <p className="text-lg">
                {t('story.paragraph2')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl">{t('values.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>{t('values.value1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>{t('values.value2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>{t('values.value3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>{t('values.value4')}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <div className="text-center pt-8">
            <Button size="lg" className="px-8">
              {t('contactButton')}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
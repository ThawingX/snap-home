'use client';

import { NavbarResize } from "@/components/navbar-resize";
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { type Language } from "@/lib/seo-config";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Contact() {
  // 获取当前语言参数
  const params = useParams();
  const locale = params.locale as Language;
  
  // 获取翻译函数
  const t = useTranslations('contact');
  const tForm = useTranslations('contact.form');
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // 模拟表单提交
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <NavbarResize />
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">{t('title')}</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {t('description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl">{t('info.title')}</CardTitle>
                <CardDescription>{t('info.description')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-3 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">{t('info.phone.title')}</h3>
                    <p className="text-muted-foreground">{t('info.phone.value')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">{t('info.email.title')}</h3>
                    <p className="text-muted-foreground">{t('info.email.value')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">{t('info.address.title')}</h3>
                    <p className="text-muted-foreground">{t('info.address.value')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl">{t('form.title')}</CardTitle>
                <CardDescription>{t('form.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{tForm('name')}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">{tForm('email')}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">{tForm('subject')}</Label>
                    <Select
                      name="subject"
                      value={formData.subject}
                      onValueChange={(value) => {
                        setFormData(prev => ({ ...prev, subject: value }));
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={tForm('subjectPlaceholder')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="general">{tForm('subjectOptions.general')}</SelectItem>
                          <SelectItem value="support">{tForm('subjectOptions.support')}</SelectItem>
                          <SelectItem value="feedback">{tForm('subjectOptions.feedback')}</SelectItem>
                          <SelectItem value="other">{tForm('subjectOptions.other')}</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">{tForm('message')}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? tForm('submitting') : tForm('submit')}
                  </Button>
                  
                  {formStatus === "success" && (
                    <div className="p-3 rounded-md bg-green-500/10 text-green-500 text-center">
                      {tForm('successMessage')}
                    </div>
                  )}
                  
                  {formStatus === "error" && (
                    <div className="p-3 rounded-md bg-red-500/10 text-red-500 text-center">
                      {tForm('errorMessage')}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
"use client";

import { NavbarResize } from "@/components/navbar-resize";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <NavbarResize />
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">关于 SnapSnap</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              我们致力于帮助产品经理和创业者高效验证他们的概念，做出数据驱动的决策。
            </p>
          </div>
          
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl">我们的使命</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                SnapSnap 致力于帮助产品经理和创业者高效验证他们的概念。我们理解产品验证阶段的挑战，并提供工具来克服常见的陷阱。
              </p>
              <p className="text-lg">
                我们的平台简化了竞争研究、市场分析和用户反馈收集，使团队能够自信地做出数据驱动的决策。
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl">我们的故事</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                SnapSnap 成立于2023年，源于我们创始团队对现有产品验证工具的不满。在亲身经历了这些挑战后，我们着手构建一个能够满足产品团队真正需求的解决方案。
              </p>
              <p className="text-lg">
                如今，SnapSnap 帮助成千上万的团队更快、更自信地验证他们的想法，降低了构建不符合市场需求的产品的风险。
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl">我们的价值观</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold">数据驱动决策：</span>我们相信让市场证据指导产品开发。
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold">效率：</span>我们帮助团队事半功倍，将资源集中在真正重要的事情上。
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold">透明度：</span>我们提供清晰的见解，不掩盖关键信息。
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold">持续改进：</span>我们根据用户反馈不断完善我们的工具。
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <div className="text-center pt-8">
            <Button size="lg" className="rounded-full px-8">
              了解我们的产品
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
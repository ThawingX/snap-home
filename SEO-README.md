# SnapSnap SEO 实现文档

## 概述

本文档详细说明了SnapSnap网站的SEO实现方案。我们使用Next.js提供的原生SEO功能，实现了多语言支持（英语和简体中文）的SEO优化。

## 实现架构

我们的SEO实现采用了集中式配置管理，主要包括以下几个部分：

1. **集中式配置文件**：所有SEO相关的元数据、关键词和描述都集中在`lib/seo-config.ts`文件中
2. **多语言支持**：通过`lib/language-utils.ts`实现语言检测和切换
3. **页面特定元数据**：每个页面目录下的`metadata.ts`文件提供页面特定的SEO配置
4. **结构化数据**：使用JSON-LD提供结构化数据，帮助搜索引擎更好地理解网站内容
5. **其他SEO优化**：包括robots.txt、sitemap.xml和Open Graph图片

## 文件结构

```
├── lib/
│   ├── seo-config.ts       # SEO配置文件
│   └── language-utils.ts   # 语言工具函数
├── components/
│   ├── json-ld.tsx         # JSON-LD结构化数据组件
│   └── language-switcher.tsx # 语言切换组件
├── app/
│   ├── metadata.ts         # 主页元数据
│   ├── robots.ts           # robots.txt配置
│   ├── sitemap.ts          # sitemap.xml配置
│   ├── opengraph-image.tsx # Open Graph图片生成器
│   ├── about/
│   │   └── metadata.ts     # About页面元数据
│   └── contact/
│       └── metadata.ts     # Contact页面元数据
└── SEO-README.md           # 本文档
```

## 使用指南

### 修改SEO配置

要修改网站的SEO配置，只需编辑`lib/seo-config.ts`文件中的相关内容：

```typescript
// 示例：修改主页英文标题和描述
seoConfig.en.home.title = '新的标题';
seoConfig.en.home.description = '新的描述';

// 示例：修改关于页面中文关键词
seoConfig.zh.about.keywords = ['新关键词1', '新关键词2'];
```

### 添加新页面的SEO

1. 在`lib/seo-config.ts`中的`PageSEOConfig`接口添加新页面配置：

```typescript
export interface PageSEOConfig {
  home: BaseSEOConfig;
  about: BaseSEOConfig;
  contact: BaseSEOConfig;
  newPage: BaseSEOConfig; // 添加新页面
}
```

2. 在`seoConfig`对象中添加新页面的英文和中文配置：

```typescript
export const seoConfig: Record<Language, PageSEOConfig> = {
  en: {
    // 现有配置...
    newPage: {
      title: 'New Page Title',
      description: 'New page description',
      keywords: ['keyword1', 'keyword2'],
    },
  },
  zh: {
    // 现有配置...
    newPage: {
      title: '新页面标题',
      description: '新页面描述',
      keywords: ['关键词1', '关键词2'],
    },
  },
};
```

3. 在新页面目录下创建`metadata.ts`文件：

```typescript
import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo-config';
import { getCurrentLanguage } from '@/lib/language-utils';

export const generateMetadata = async (): Promise<Metadata> => {
  const lang = getCurrentLanguage();
  return getPageMetadata('newPage', lang);
};
```

### 添加结构化数据

要为特定页面添加结构化数据，可以使用`JsonLd`组件：

```tsx
import JsonLd from '@/components/json-ld';

export default function YourPage() {
  return (
    <div>
      <JsonLd 
        type="Article" 
        data={{
          headline: '文章标题',
          datePublished: '2023-01-01',
          author: {
            '@type': 'Person',
            name: '作者名',
          },
        }} 
      />
      {/* 页面内容 */}
    </div>
  );
}
```

## 最佳实践

1. **保持配置集中**：所有SEO相关配置应集中在`lib/seo-config.ts`文件中
2. **定期更新关键词**：根据业务发展和市场趋势，定期更新SEO关键词
3. **检查结构化数据**：使用[Google的结构化数据测试工具](https://search.google.com/test/rich-results)验证结构化数据
4. **监控SEO效果**：使用Google Search Console等工具监控SEO效果，并根据数据调整策略

## 注意事项

- 修改`robots.ts`和`sitemap.ts`时，确保不会阻止重要页面被索引
- 添加新页面时，记得更新sitemap配置
- 结构化数据应准确反映页面内容，避免误导搜索引擎

## 未来改进

- 实现动态生成的sitemap，自动包含所有页面
- 添加更多类型的结构化数据
- 实现更完善的多语言URL路由
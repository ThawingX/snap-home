/**
 * Open Graph图片生成器
 * 为社交媒体分享创建动态图片
 */

import { ImageResponse } from 'next/og';
import { getCurrentLanguage, DEFAULT_LANGUAGE } from '@/lib/language-utils';

// 图片配置
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// 生成Open Graph图片元数据
export async function generateImageMetadata() {
  return [
    {
      contentType: 'image/png',
      size: { width: 1200, height: 630 },
      id: 'open-graph',
    },
  ];
}

// 生成Open Graph图片
export default async function Image() {
  // 在请求上下文中安全地调用getCurrentLanguage
  let lang;
  try {
    lang = await getCurrentLanguage();
  } catch (e) {
    // 如果在非请求上下文中调用，使用默认语言
    lang = DEFAULT_LANGUAGE;
  }
  
  // 根据语言选择标题文本
  const title = lang === 'en' 
    ? 'SnapSnap - MVP Design & Competitive Analysis Tools'
    : 'SnapSnap - MVP设计与竞品分析工具';
  
  // 根据语言选择描述文本
  const description = lang === 'en'
    ? 'Validate concepts, perform competitive analysis, and gain SaaS insights'
    : '验证概念、进行竞品分析并获取SaaS洞察';

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(to bottom, #000000, #111827)',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 48,
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: 24,
            textAlign: 'center',
          }}
        >
          <span style={{ color: '#3B82F6' }}>Snap</span>Snap
        </div>
        <div
          style={{
            fontSize: 48,
            marginBottom: 48,
            textAlign: 'center',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 32,
            opacity: 0.8,
            textAlign: 'center',
          }}
        >
          {description}
        </div>
      </div>
    ),
    size
  );
}
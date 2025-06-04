/**
 * JSON-LD Structured Data Component
 * Used to provide structured data to search engines, improving SEO effectiveness
 */

import { type Language } from '@/lib/seo-config';

interface JsonLdProps {
  type: 'Organization' | 'WebSite' | 'Product' | 'Article';
  data: Record<string, any>;
}

export default function JsonLd({ type, data }: JsonLdProps) {
  // Build base structure according to type
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/**
 * Generate organization structured data
 * @param lang Language code
 * @returns Organization structured data object
 */
export function generateOrganizationData(lang: Language) {
  return {
    name: 'SnapSnap',
    url: 'https://snapsnap.site',
    logo: 'https://snapsnap.site/logo.png',
    description: lang === 'en'
      ? 'SnapSnap helps product managers validate concepts, perform competitive analysis, and gain SaaS insights to build better MVPs.'
      : 'SnapSnap helps product managers validate concepts, perform competitive analysis, and gain SaaS insights to build better MVPs.',
    sameAs: [
      'https://twitter.com/snapsnap',
      'https://linkedin.com/company/snapsnap',
      'https://github.com/snapsnap',
    ],
  };
}

/**
 * Generate website structured data
 * @param lang Language code
 * @returns Website structured data object
 */
export function generateWebsiteData(lang: Language) {
  return {
    name: 'SnapSnap',
    url: 'https://snapsnap.site',
    description: lang === 'en'
      ? 'SnapSnap helps product managers validate concepts, perform competitive analysis, and gain SaaS insights to build better MVPs.'
      : 'SnapSnap helps product managers validate concepts, perform competitive analysis, and gain SaaS insights to build better MVPs.',
    potentialAction: {
      '@type': 'SearchAction',
      'target': 'https://snapsnap.site/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate product structured data
 * @param lang Language code
 * @returns Product structured data object
 */
export function generateProductData(lang: Language) {
  return {
    name: 'SnapSeeker',
    description: lang === 'en'
      ? 'Competitive research tool designed to give you a market edge.'
      : 'Competitive research tool designed to give you a market edge.',
    brand: {
      '@type': 'Brand',
      'name': 'SnapSnap',
    },
    offers: {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/InStock',
    },
  };
}
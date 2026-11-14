import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/src/utils/site';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.url.replace(/\/+$/, '');

  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}

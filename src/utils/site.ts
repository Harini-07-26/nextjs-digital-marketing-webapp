export const SITE_CONFIG = {
  name: 'Growth Voice',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://growthvoice.in',
  description:
    'Transform your business with Chennai’s most awarded digital marketing agency. 500+ clients, 12 years, 10x ROI. Get your free strategy session now.',
  defaultTitle: 'Best Digital Marketing Agency in Chennai | Growth Voice'
};

export function getCanonicalUrl(path: string = ''): string {
  const base = SITE_CONFIG.url.replace(/\/+$/, '');
  const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
  return `${base}${cleanPath}`;
}

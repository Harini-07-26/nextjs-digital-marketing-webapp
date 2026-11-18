import { Metadata } from 'next';
import Script from 'next/script';
import SeoServicesClient from '@/src/components/seo-services/SeoServicesClient';
import { seoFaqs } from '@/src/data/seo-services';

export const metadata: Metadata = {
  title: 'SEO Company for Higher Rankings & Organic Growth',
  description:
    'Partner with GrowthVoice, a professional SEO company, to boost search visibility, attract qualified website traffic, and turn organic visitors into customers.',
  alternates: {
    canonical: '/seo-services'
  },
  openGraph: {
    title: 'SEO Company for Higher Rankings & Organic Growth',
    description:
      'Partner with GrowthVoice, a professional SEO company, to boost search visibility, attract qualified website traffic, and turn organic visitors into customers.',
    url: 'https://growthvoice.in/seo-services',
    type: 'website',
    siteName: 'GrowthVoice'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company for Higher Rankings & Organic Growth',
    description:
      'Partner with GrowthVoice, a professional SEO company, to boost search visibility, attract qualified website traffic, and turn organic visitors into customers.'
  }
};

export default function SeoServicesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: seoFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SEO Services',
    serviceType: 'Search Engine Optimization',
    provider: {
      '@type': 'Organization',
      name: 'GrowthVoice',
      url: 'https://growthvoice.in'
    },
    description:
      'Improve your search rankings, attract qualified traffic, and grow your business with GrowthVoice SEO services. We combine strategic keyword research, technical SEO, quality content, and link building with the latest AI search trends.',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Comprehensive SEO Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Technical SEO Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'On-Page SEO Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Off-Page SEO Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Local SEO Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecommerce SEO Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Enterprise SEO Services' } }
      ]
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://growthvoice.in'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'SEO Services',
        item: 'https://growthvoice.in/seo-services'
      }
    ]
  };

  return (
    <>
      <Script
        id="seo-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="seo-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="seo-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main>
        <SeoServicesClient />
      </main>
    </>
  );
}

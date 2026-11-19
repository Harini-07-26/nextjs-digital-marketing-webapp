import { Metadata } from 'next';
import Script from 'next/script';
import ServicesLandingClient from '@/src/components/services-landing/ServicesLandingClient';
import { digitalMarketingServices } from '@/src/data/services-landing';

export const metadata: Metadata = {
  title: 'Digital Marketing Services for Business Growth | GrowthVoice',
  description:
    'Build your online presence with GrowthVoice. Explore practical marketing solutions for visibility, customer engagement, lead generation, and business growth.',
  alternates: {
    canonical: '/services'
  },
  openGraph: {
    title: 'Digital Marketing Services for Business Growth | GrowthVoice',
    description:
      'Build your online presence with GrowthVoice. Explore practical marketing solutions for visibility, customer engagement, lead generation, and business growth.',
    url: 'https://growthvoice.in/services',
    type: 'website',
    siteName: 'GrowthVoice'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services for Business Growth | GrowthVoice',
    description:
      'Build your online presence with GrowthVoice. Explore practical marketing solutions for visibility, customer engagement, lead generation, and business growth.'
  }
};

export default function ServicesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Digital Marketing Services',
    serviceType: 'Full-Funnel Digital Marketing',
    provider: {
      '@type': 'Organization',
      name: 'GrowthVoice',
      url: 'https://growthvoice.in'
    },
    description:
      'Digital Marketing Services to Build Visibility, Generate Leads, and Drive Growth. From SEO and targeted PPC to social media marketing and conversion-focused websites.',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'GrowthVoice Digital Marketing Services',
      itemListElement: digitalMarketingServices.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.shortDesc
        }
      }))
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
        name: 'Services',
        item: 'https://growthvoice.in/services'
      }
    ]
  };

  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="services-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="w-full">
        <ServicesLandingClient />
      </main>
    </>
  );
}

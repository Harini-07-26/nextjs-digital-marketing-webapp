const StructuredData = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Growth Voice',
    url: 'https://growthvoice.in',
    logo: 'https://growthvoice.in/icon.png',
    description:
      'Growth Voice is a digital marketing agency helping businesses grow through performance marketing, SEO, social media marketing, and data-driven digital strategies.'
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Growth Voice',
    url: 'https://growthvoice.in'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
    </>
  );
};

export default StructuredData;

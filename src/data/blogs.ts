export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  image: string;
  commentsCount: number;
  excerpt: string;
  category?: string;
  readTime?: string;
  content: {
    paragraphs: string[];
    sections?: {
      heading: string;
      body: string[];
      list?: string[];
    }[];
  };
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'ai-powered-digital-marketing-strategies-2027',
    title: 'AI-Powered Digital Marketing: 10 Strategies for 2027',
    author: 'Harini',
    date: 'November 14, 2026',
    image: '/blogs/ai-powered-digital-marketing-2027.png',
    commentsCount: 0,
    category: 'Digital Marketing',
    readTime: '5 min read',
    excerpt:
      'Discover 10 powerful AI-driven digital marketing strategies for 2027, from predictive analytics and personalized campaigns to AI-powered SEO and marketing automation.',
    tags: [
      'AI Marketing',
      'Digital Marketing 2027',
      'Marketing Automation',
      'Artificial Intelligence',
      'SEO Strategy',
      'Business Growth'
    ],
    content: {
      paragraphs: [
        'Artificial Intelligence is transforming how businesses attract customers, create content, and optimize digital marketing campaigns. In 2027, AI-powered marketing will become an essential part of building competitive and scalable business strategies.',
        'From predictive analytics to automated customer engagement, businesses can use AI technologies to understand audience behavior, improve campaign performance, and deliver personalized experiences. Here are 10 strategies to strengthen your digital marketing approach in 2027.'
      ],
      sections: [
        {
          heading: '1. AI-Powered Content Marketing',
          body: [
            'Use AI tools to research topics, generate content ideas, and create audience-focused articles. Combine AI efficiency with human creativity to maintain quality and brand authenticity.'
          ]
        },
        {
          heading: '2. Predictive Analytics for Customer Insights',
          body: [
            'Analyze customer behavior and historical data to predict purchasing patterns, identify potential leads, and make smarter marketing decisions.'
          ]
        },
        {
          heading: '3. Hyper-Personalized Marketing Campaigns',
          body: [
            'Deliver personalized emails, product recommendations, and advertisements based on individual customer interests, preferences, and browsing behavior.'
          ]
        },
        {
          heading: '4. AI-Driven SEO and Generative Engine Optimization',
          body: [
            'Optimize websites for traditional search engines and AI-powered discovery platforms. Focus on helpful content, search intent, structured data, and topical authority.'
          ]
        },
        {
          heading: '5. Intelligent Marketing Automation',
          body: [
            'Automate repetitive marketing activities such as email sequences, lead nurturing, customer segmentation, and campaign scheduling to improve productivity.'
          ]
        },
        {
          heading: '6. AI-Powered Chatbots and Customer Support',
          body: [
            'Implement intelligent chatbots to answer customer questions, qualify leads, provide instant assistance, and improve customer experiences around the clock.'
          ]
        },
        {
          heading: '7. Smarter Social Media Marketing',
          body: [
            'Use AI to identify trending topics, analyze audience engagement, optimize publishing schedules, and create relevant social media campaigns.'
          ]
        },
        {
          heading: '8. AI-Based Advertising Optimization',
          body: [
            'Leverage machine learning to analyze advertising performance, optimize audience targeting, adjust budgets, and improve conversion rates.'
          ]
        },
        {
          heading: '9. Video Marketing with Generative AI',
          body: [
            'Create engaging video concepts, captions, scripts, and localized content using generative AI tools to expand reach across digital platforms.'
          ]
        },
        {
          heading: '10. Real-Time Performance Tracking',
          body: [
            'Combine AI-powered dashboards with marketing analytics to monitor campaign performance, identify opportunities, and continuously improve return on investment.'
          ]
        }
      ]
    }
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const normalized = slug.toLowerCase().trim();
  return blogPosts.find(
    (post) =>
      post.slug.toLowerCase() === normalized ||
      post.id === normalized ||
      post.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') === normalized ||
      normalized.includes(post.slug) ||
      post.slug.includes(normalized)
  );
}

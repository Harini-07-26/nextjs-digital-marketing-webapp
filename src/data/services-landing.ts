import {
  Search,
  Target,
  Megaphone,
  FileText,
  Code2,
  Mail,
  TrendingUp,
  ShieldCheck,
  Compass,
  Cpu,
  BarChart3,
  Repeat,
  Layers,
  Sparkles,
  Rocket,
  Building2,
  ShoppingBag,
  Briefcase,
  Users
} from 'lucide-react';

export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string[];
  objective: string;
  icon: React.ElementType;
  tag: string;
  inclusions: string[];
  dedicatedUrl?: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface WhyChooseBenefit {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface BusinessNeedAudience {
  title: string;
  description: string;
  icon: React.ElementType;
  badge: string;
  keyTactics: string[];
}

// 8 Core Services from the Word Document
export const digitalMarketingServices: ServiceDetail[] = [
  {
    id: 'seo',
    number: '01',
    title: 'Search Engine Optimization (SEO)',
    shortDesc:
      'Help potential customers find your business when they search for products, services, and solutions related to your industry.',
    fullDesc: [
      'Help potential customers find your business when they search for products, services, and solutions related to your industry. Our SEO approach focuses on improving your website’s technical health, content quality, search relevance, and overall user experience.',
      'We begin by evaluating your website, identifying relevant search opportunities, and understanding what your competitors are doing. Based on these insights, we work on keyword research, on-page improvements, technical optimization, content development, and authority building. We also monitor search performance to identify opportunities for improvement.'
    ],
    objective:
      'Build sustainable organic visibility and attract visitors who are genuinely interested in what your business offers.',
    icon: Search,
    tag: 'Organic Growth',
    inclusions: [
      'Technical Health & Indexation Audits',
      'High-Intent Keyword & Semantic Research',
      'On-Page Optimization & Content Structuring',
      'Authority Building & Natural Backlinks',
      'AI Search & Google Overviews Optimization'
    ],
    dedicatedUrl: '/seo-services'
  },
  {
    id: 'ppc',
    number: '02',
    title: 'Pay-Per-Click Advertising (PPC)',
    shortDesc:
      'Reach potential customers through targeted advertising campaigns designed around your specific business objectives.',
    fullDesc: [
      'Reach potential customers through targeted advertising campaigns designed around your business objectives. Our PPC services help you connect with relevant audiences across search engines and selected advertising platforms.',
      'We plan campaigns based on your target audience, location, industry, budget, and conversion goals. Our team works on campaign structure, audience targeting, ad copy, landing page alignment, and conversion tracking. Once campaigns are active, we review performance and adjust targeting, bidding, and creative elements to improve efficiency.'
    ],
    objective:
      'Make every advertising decision measurable, purposeful, and optimized to generate qualified leads and sales.',
    icon: Target,
    tag: 'Instant Traffic & ROI',
    inclusions: [
      'Google Search, Display & Shopping Ads',
      'Precision Audience & Geo-Targeting',
      'Conversion-Aligned Ad Copy & Creative',
      'Negative Keyword & Bid Management',
      'Real-Time Attribution & ROAS Optimization'
    ]
  },
  {
    id: 'social-media',
    number: '03',
    title: 'Social Media Marketing',
    shortDesc:
      'Build a recognizable brand and create meaningful relationships with your audience across major social platforms.',
    fullDesc: [
      'Build a recognizable brand and create meaningful relationships with your audience through social media. We help businesses develop a consistent presence across relevant platforms, using content and campaigns that reflect their brand identity.',
      'Our work includes social media planning, content calendars, creative development, post publishing, audience engagement, and performance monitoring. We consider the nature of each platform and adapt content formats to suit how people interact with it.',
      'From informative posts and short-form videos to promotional campaigns and community-focused content, we help your business communicate consistently.'
    ],
    objective:
      'Build trust, encourage active engagement, and create opportunities for your audience to connect with your brand.',
    icon: Megaphone,
    tag: 'Brand & Community',
    inclusions: [
      'Platform-Specific Content Strategy',
      'Monthly Content Calendars & Creatives',
      'Short-Form Video & Visual Production',
      'Community Management & Engagement',
      'Paid Social Advertising & Audience Scaling'
    ]
  },
  {
    id: 'content-marketing',
    number: '04',
    title: 'Content Marketing',
    shortDesc:
      'Give your audience useful information that helps them understand your products, services, and industry.',
    fullDesc: [
      'Give your audience useful information that helps them understand your products, services, and industry. Our content marketing services focus on creating relevant material that supports customer research, builds brand credibility, and encourages informed decisions.',
      'We develop content plans based on your business goals, audience questions, and market opportunities. This can include website pages, blogs, articles, case studies, guides, email content, and other formats suited to your communication strategy.',
      'Every piece of content is created with a clear purpose, whether it is to explain a solution, answer a common question, demonstrate expertise, or support a buying decision.'
    ],
    objective:
      'Educate potential customers, demonstrate industry authority, and support confident buying decisions.',
    icon: FileText,
    tag: 'Authority & Value',
    inclusions: [
      'Audience-Focused Editorial Planning',
      'In-Depth SEO Articles & Guides',
      'High-Converting Case Studies & Whitepapers',
      'Product & Service Explainer Copy',
      'Multi-Channel Content Distribution'
    ]
  },
  {
    id: 'web-design',
    number: '05',
    title: 'Website Design and Development',
    shortDesc:
      'Create websites that combine modern visual design with practical functionality, speed, and conversion focus.',
    fullDesc: [
      'Your website is often the first meaningful interaction a potential customer has with your business. It should communicate your value clearly, provide a smooth browsing experience, and make it easy for visitors to take the next step.',
      'GrowthVoice helps businesses create websites that combine visual design with practical functionality. We consider your brand identity, target audience, business objectives, and preferred user journey before shaping the website structure.',
      'Our work can include responsive layouts, landing pages, service pages, navigation improvements, performance considerations, and conversion-focused elements.'
    ],
    objective:
      'Deliver smooth browsing experiences across devices that present information clearly and convert visitors into leads.',
    icon: Code2,
    tag: 'Digital Experience',
    inclusions: [
      'Responsive, Fast-Loading UI/UX Architecture',
      'Conversion-Optimized Landing Pages',
      'Modern Tech Stack & Clean Code',
      'Mobile-First Touch & Interaction Design',
      'Core Web Vitals & Speed Optimization'
    ]
  },
  {
    id: 'email-marketing',
    number: '06',
    title: 'Email Marketing',
    shortDesc:
      'Maintain meaningful communication with existing customers and potential buyers through relevant, well-planned email campaigns.',
    fullDesc: [
      'Maintain meaningful communication with existing customers and potential buyers through relevant, well-planned email campaigns. Email marketing gives your business a direct channel to share updates, communicate offers, nurture enquiries, and encourage repeat engagement.',
      'We help plan email campaigns around your audience segments and communication objectives. This includes campaign messaging, email content, template design, scheduling, and performance tracking. Where appropriate, we also help structure automated communication for welcome messages, follow-ups, and customer journeys.',
      'Rather than sending frequent generic messages, we focus on delivering useful information at relevant moments.'
    ],
    objective:
      'Maintain lasting customer relationships and create reliable opportunities for long-term engagement and revenue.',
    icon: Mail,
    tag: 'Retention & Nurturing',
    inclusions: [
      'Audience Segmentation & List Hygiene',
      'Automated Welcome & Follow-Up Flows',
      'Engaging Newsletter & Promo Templates',
      'Subject Line & Copy A/B Testing',
      'Deliverability & Open Rate Optimization'
    ]
  },
  {
    id: 'cro',
    number: '07',
    title: 'Conversion Rate Optimization (CRO)',
    shortDesc:
      'Analyze and optimize your website and landing pages to turn a higher percentage of visitors into active enquiries and customers.',
    fullDesc: [
      'Attracting visitors is only one part of online growth. Your website and landing pages should also help those visitors complete meaningful actions, such as submitting an enquiry, requesting a consultation, or making a purchase.',
      'Our conversion rate optimization process examines how people interact with your website. We review page structure, calls to action, navigation, forms, content clarity, and other elements that may influence user decisions.',
      'Using available analytics and user behaviour insights, we identify areas that can be improved and recommend practical changes. These may include simplifying forms, improving page messaging, adjusting layouts, or making important information easier to find.'
    ],
    objective:
      'Reduce conversion friction and ensure the customer journey effectively leads to measurable business outcomes.',
    icon: TrendingUp,
    tag: 'Funnel Efficiency',
    inclusions: [
      'User Journey & Drop-Off Analysis',
      'Form & Call-To-Action (CTA) Refinements',
      'Layout & Copy Clarity Adjustments',
      'Friction Removal Across Touchpoints',
      'A/B Testing & Quantitative Analytics'
    ]
  },
  {
    id: 'orm',
    number: '08',
    title: 'Online Reputation Management',
    shortDesc:
      'Monitor your digital presence, gather customer confidence, and maintain a credible, professional brand reputation.',
    fullDesc: [
      'The way people perceive your business online can influence whether they choose to work with you. Reviews, customer feedback, brand mentions, and public conversations all contribute to your digital reputation.',
      'Our online reputation management services help businesses monitor their online presence and respond to feedback in a professional and consistent manner. We identify relevant review channels, support review response planning, and help maintain accurate brand information across important platforms.',
      'We also consider how customer experiences are reflected in your website and other digital channels. By encouraging genuine feedback and addressing concerns constructively, your business can build greater credibility.'
    ],
    objective:
      'Build greater public credibility, protect brand perception, and strengthen customer trust over time.',
    icon: ShieldCheck,
    tag: 'Trust & Credibility',
    inclusions: [
      'Cross-Platform Review Monitoring',
      'Constructive Feedback Response Protocols',
      'Consistent NAP & Brand Profile Auditing',
      'Customer Testimonial Amplification',
      'Proactive Brand Sentiment Protection'
    ]
  }
];

// 5-Step Approach to Digital Growth
export const growthApproachSteps: ApproachStep[] = [
  {
    number: '01',
    title: 'Business and Audience Research',
    description:
      'We begin by understanding your business model, products, services, target customers, competitors, and current online presence. This gives us the context needed to identify opportunities and define realistic priorities.',
    icon: Compass
  },
  {
    number: '02',
    title: 'Strategy Development',
    description:
      'Based on the research, we create a marketing plan that outlines the channels, activities, messaging, and performance indicators relevant to your goals. We prioritize the work according to its potential business impact and available resources.',
    icon: Cpu
  },
  {
    number: '03',
    title: 'Campaign Execution',
    description:
      'Our team puts the strategy into action through coordinated campaigns, content development, website improvements, advertising, and other selected activities. We maintain consistency across channels while adapting execution to each platform.',
    icon: Rocket
  },
  {
    number: '04',
    title: 'Performance Monitoring',
    description:
      'We track relevant metrics to understand how campaigns and website activities are performing. Depending on your objectives, this may include traffic quality, search visibility, engagement, enquiries, conversions, and campaign costs.',
    icon: BarChart3
  },
  {
    number: '05',
    title: 'Continuous Improvement',
    description:
      'Marketing performance can change as customer behaviour, competition, and market conditions evolve. We use performance insights to refine campaigns, improve content, adjust targeting, and identify new growth opportunities.',
    icon: Repeat
  }
];

// 6 Core Why Choose Benefits
export const whyChooseBenefits: WhyChooseBenefit[] = [
  {
    title: 'Goal-Oriented Planning',
    description:
      'We build marketing plans around clear business objectives instead of recommending channels without a defined purpose.',
    icon: Target
  },
  {
    title: 'Connected Marketing Activities',
    description:
      'We consider how search, advertising, content, social media, and website experiences work together cohesively.',
    icon: Layers
  },
  {
    title: 'Audience-Focused Communication',
    description:
      "We shape messaging around your customers' real needs, interests, and decision-making process.",
    icon: Users
  },
  {
    title: 'Measurable Performance',
    description:
      'We use relevant data to evaluate real progress and identify specific areas that need attention and scaling.',
    icon: BarChart3
  },
  {
    title: 'Flexible Strategies',
    description:
      'We adapt priorities dynamically as your business grows, your market changes, and new opportunities emerge.',
    icon: Sparkles
  },
  {
    title: 'Consistent Execution',
    description:
      'We focus on maintaining a structured approach across campaigns, content, and ongoing performance improvements.',
    icon: ShieldCheck
  }
];

// 6 Business Needs Audiences
export const businessNeedsAudiences: BusinessNeedAudience[] = [
  {
    title: 'Startups and New Businesses',
    description:
      'Establish your brand identity, build an initial online presence, and reach potential customers with high velocity.',
    icon: Rocket,
    badge: 'Early Stage',
    keyTactics: ['Brand Foundations', 'Rapid Search Footprint', 'Targeted Launch Ads']
  },
  {
    title: 'Small and Medium Businesses',
    description:
      'Improve local or industry visibility, attract qualified enquiries, and create dependable, consistent marketing activities.',
    icon: Building2,
    badge: 'Growing Business',
    keyTactics: ['Local & Organic Visibility', 'Lead Generation PPC', 'Consistent Social Content']
  },
  {
    title: 'B2B Companies',
    description:
      'Reach key decision-makers through targeted content, search visibility, thought leadership, and lead generation campaigns.',
    icon: Briefcase,
    badge: 'B2B & Enterprise',
    keyTactics: ['Decision-Maker Targeting', 'Technical Content & Whitepapers', 'Account-Based Ad Strategy']
  },
  {
    title: 'E-commerce Businesses',
    description:
      'Promote products, optimize category and shopping discovery, streamline checkout experiences, and encourage repeat purchases.',
    icon: ShoppingBag,
    badge: 'Online Retail',
    keyTactics: ['Shopping & Product Ads', 'Category Page SEO', 'Automated Email Nurturing']
  },
  {
    title: 'Professional Service Providers',
    description:
      'Communicate specialized expertise, build digital credibility, and generate relevant consultation enquiries and client bookings.',
    icon: ShieldCheck,
    badge: 'Consulting & Advisory',
    keyTactics: ['Authority Positioning', 'Reputation & Reviews', 'Consultation Funnels']
  },
  {
    title: 'Growing Enterprises',
    description:
      'Coordinate multiple marketing channels, manage brand governance, and strengthen performance across different customer segments.',
    icon: Layers,
    badge: 'Multi-Channel Scale',
    keyTactics: ['Omni-Channel Execution', 'Unified Attribution', 'Cross-Segment Campaigning']
  }
];

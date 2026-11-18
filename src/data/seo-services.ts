import {
  Code,
  FileText,
  Link as LinkIcon,
  MapPin,
  ShoppingCart,
  Building2,
  Search,
  Target,
  BarChart3,
  Map,
  Rocket,
  LineChart,
  Bot,
  Sparkles,
  Globe,
  Compass,
  Cpu,
  BrainCircuit,
  Eye,
  Video,
  Gauge,
  Laptop,
  ShoppingBag,
  HeartPulse,
  Home,
  Briefcase,
  GraduationCap,
  ShieldCheck,
  Repeat,
  Layers
} from 'lucide-react';

export interface SeoServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  highlights: string[];
}

export interface SeoStrategyStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  deliverables: string[];
}

export interface AiStrategyItem {
  title: string;
  description: string;
  icon: React.ElementType;
  badge: string;
}

export interface SeoTrendItem {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
  tag: string;
}

export interface IndustrySeoItem {
  title: string;
  description: string;
  icon: React.ElementType;
  keyFocus: string[];
}

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface SeoFaqItem {
  id: number;
  question: string;
  answer: string;
}

// Section 3: Comprehensive SEO Services
export const comprehensiveSeoServices: SeoServiceItem[] = [
  {
    id: 'technical-seo',
    title: 'Technical SEO Services',
    description:
      "We optimize your website's technical foundation to help search engines crawl, render, and index important pages effectively. Our technical SEO services include website audits, crawlability checks, indexing improvements, XML sitemap optimization, robots.txt reviews, canonical tags, redirect management, structured data implementation, and Core Web Vitals improvements. We also identify technical issues that may affect website accessibility and search performance.",
    icon: Code,
    highlights: [
      'Website & Architecture Audits',
      'Crawlability & Indexing Optimization',
      'XML Sitemaps & Robots.txt Governance',
      'Canonical Tags & Redirect Management',
      'Structured Data & Schema Implementation',
      'Core Web Vitals & Speed Performance'
    ]
  },
  {
    id: 'on-page-seo',
    title: 'On-Page SEO Services',
    description:
      'We optimize individual website pages to improve their relevance for targeted search queries. Our on-page SEO services cover title tags, meta descriptions, heading structures, keyword placement, internal linking, image optimization, URL structures, and content improvements. We also align page content with search intent to make it more useful for visitors and relevant to search engines.',
    icon: FileText,
    highlights: [
      'Search Intent Content Alignment',
      'Title Tags & Meta Descriptions',
      'Heading (H1-H6) & Semantic Hierarchy',
      'Keyword Placement & Density Balance',
      'Strategic Internal Linking Architecture',
      'Image Optimization & Alt Attributes'
    ]
  },
  {
    id: 'off-page-seo',
    title: 'Off-Page SEO Services',
    description:
      'Building website authority requires consistent efforts beyond your website. Our off-page SEO services focus on earning relevant backlinks, digital PR opportunities, industry mentions, brand citations, and authoritative references. We prioritize quality, relevance, and natural link acquisition instead of manipulative link-building practices that could put your website at risk.',
    icon: LinkIcon,
    highlights: [
      'High-Authority Natural Backlinks',
      'Digital PR & Media Placements',
      'Unlinked Brand Mention Claiming',
      'Niche Relevant Directory Citations',
      'Thought Leadership Outreach',
      'Penalty-Safe White-Hat Strategy'
    ]
  },
  {
    id: 'local-seo',
    title: 'Local SEO Services',
    description:
      'We help businesses improve their visibility in location-based searches and connect with nearby customers. Our local SEO services include Google Business Profile optimization, local keyword research, location-specific landing pages, business citation management, review strategy, and local link-building opportunities. These activities help strengthen your presence in relevant geographical markets.',
    icon: MapPin,
    highlights: [
      'Google Business Profile (GBP) Optimization',
      'Geo-Targeted Keyword Research',
      'Localized Landing Pages & Service Areas',
      'NAP Consistency Across Directories',
      'Review Acquisition & Reputation Strategy',
      'Local Map Pack 3-Pack Rankings'
    ]
  },
  {
    id: 'ecommerce-seo',
    title: 'Ecommerce SEO Services',
    description:
      'Our ecommerce SEO services help online stores improve product and category page visibility, attract shoppers, and increase organic sales opportunities. We optimize product descriptions, category structures, product metadata, internal links, image attributes, and relevant structured data. We also address duplicate product URLs, faceted navigation, and indexing challenges that commonly affect ecommerce websites.',
    icon: ShoppingCart,
    highlights: [
      'Product & Category Page Optimization',
      'Faceted Navigation & Filter SEO',
      'Product Schema (Price, Reviews, Stock)',
      'Duplicate URL & Variant Canonicalization',
      'Transactional Keyword Targeting',
      'High-Converting Product Descriptions'
    ]
  },
  {
    id: 'enterprise-seo',
    title: 'Enterprise SEO Services',
    description:
      'Large websites require scalable optimization strategies and structured workflows. Our enterprise SEO services address complex website architecture, large-scale keyword targeting, crawl budget management, international SEO, duplicate content, and technical governance. We work toward improving organic search performance across multiple departments, product categories, locations, and website sections.',
    icon: Building2,
    highlights: [
      'Crawl Budget Management & Log Analysis',
      'Large-Scale Keyword Clustering',
      'International & Multi-Regional SEO (hreflang)',
      'Cross-Functional Team Collaboration',
      'Technical Governance & CI/CD Auditing',
      'Enterprise Reporting Dashboards'
    ]
  }
];

// Section 4: SEO Strategy Roadmap
export const seoStrategySteps: SeoStrategyStep[] = [
  {
    number: '01',
    title: 'Website and SEO Audit',
    description:
      "We evaluate your website's current organic performance, technical health, indexing status, page structure, content quality, backlink profile, and user experience. This helps us identify optimization gaps and prioritize improvements based on their potential business impact.",
    icon: Search,
    deliverables: ['Technical Health Score', 'Indexation Audit', 'UX & Core Web Vitals Analysis']
  },
  {
    number: '02',
    title: 'Keyword Research and Search Intent',
    description:
      'We identify primary, secondary, and long-tail keywords relevant to your services, products, and target audience. Our research considers search intent, keyword difficulty, competition, search demand, and conversion potential. We also identify conversational queries and related topics that customers use during their decision-making process.',
    icon: Target,
    deliverables: ['Intent-Mapped Keyword Matrix', 'Search Demand & Difficulty', 'Conversational AI Queries']
  },
  {
    number: '03',
    title: 'Competitor SEO Analysis',
    description:
      'We analyze competing websites to understand their keyword coverage, content strategies, backlink profiles, landing pages, and organic visibility. These insights help us identify content gaps and opportunities to differentiate your website.',
    icon: LineChart,
    deliverables: ['Competitor Keyword Gaps', 'Backlink Profile Comparison', 'Content Opportunity Map']
  },
  {
    number: '04',
    title: 'SEO Roadmap Development',
    description:
      'Based on our research, we create a prioritized optimization plan. The roadmap includes technical fixes, content improvements, landing page development, authority-building activities, and performance targets aligned with your business objectives.',
    icon: Map,
    deliverables: ['Prioritized Action Plan', 'Content Calendar', 'KPI Milestones & Timelines']
  },
  {
    number: '05',
    title: 'Implementation and Optimization',
    description:
      'Our team executes the planned SEO activities across relevant website sections. We continuously review performance and make adjustments based on ranking movements, search behavior, competitor activities, and conversion data.',
    icon: Rocket,
    deliverables: ['On-Page & Technical Execution', 'Content Publishing', 'Authority Link Building']
  },
  {
    number: '06',
    title: 'Monitoring and Reporting',
    description:
      'We monitor organic traffic, keyword visibility, indexed pages, engagement, leads, and conversions. Regular reporting helps you understand completed activities, performance changes, and the next opportunities for improvement.',
    icon: BarChart3,
    deliverables: ['Custom Analytics Dashboard', 'Lead & Conversion Tracking', 'Monthly Strategy Reviews']
  }
];

// Section 5: AI-Powered SEO Strategies
export const aiSeoStrategies: AiStrategyItem[] = [
  {
    title: 'AI Search Optimization',
    description:
      'We improve content organization, topical relevance, and information clarity to support visibility across AI-powered search experiences. We focus on providing useful answers, supporting details, and reliable information rather than relying on artificial optimization techniques.',
    icon: Bot,
    badge: 'AI Search'
  },
  {
    title: 'Answer Engine Optimization (AEO)',
    description:
      'We structure relevant content to address specific customer questions directly. This includes informative headings, concise explanations, supporting evidence, and useful FAQ sections that make important information easier to understand.',
    icon: BrainCircuit,
    badge: 'Direct Answers'
  },
  {
    title: 'Generative Engine Optimization (GEO)',
    description:
      "We strengthen your brand's digital presence through original content, subject expertise, consistent brand information, and relevant industry references. These activities support discoverability across generative AI platforms.",
    icon: Sparkles,
    badge: 'LLM Visibility'
  },
  {
    title: 'AI-Assisted Keyword Research',
    description:
      'We use AI-supported research workflows to identify related search queries, conversational keywords, semantic relationships, and content opportunities. Human review ensures that keyword recommendations remain relevant to your audience and business objectives.',
    icon: Compass,
    badge: 'Semantic Data'
  },
  {
    title: 'Content Optimization with AI',
    description:
      'AI tools can support content analysis, topic clustering, and optimization recommendations. Our content process combines these capabilities with editorial review, subject knowledge, and original insights to maintain quality and usefulness.',
    icon: FileText,
    badge: 'Editorial Quality'
  },
  {
    title: 'AI Search Performance Monitoring',
    description:
      'We consider changes in organic traffic, search visibility, brand mentions, and available AI search reporting to understand how your website performs as discovery methods evolve.',
    icon: LineChart,
    badge: 'Next-Gen Analytics'
  }
];

// Section 6: Latest SEO Trends for 2026
export const seoTrends2026: SeoTrendItem[] = [
  {
    number: 1,
    title: 'AI Overviews and AI Mode Optimization',
    description:
      "Google's AI-powered search experiences provide summarized information alongside links to relevant websites. Businesses should focus on creating useful, original, well-organized content that can serve as a valuable supporting resource.",
    icon: Cpu,
    tag: 'AI Overviews'
  },
  {
    number: 2,
    title: 'Answer Engine Optimization',
    description:
      'Users increasingly ask detailed questions instead of searching only with short keywords. Developing clear answers, informative explanations, and helpful FAQ content can improve the usefulness of your website for these searches.',
    icon: BrainCircuit,
    tag: 'Conversational Queries'
  },
  {
    number: 3,
    title: 'Search Intent and Query Fan-Out',
    description:
      'Modern search systems can explore multiple related searches to answer complex queries. Businesses should cover the important subtopics of a subject naturally instead of publishing separate pages for every keyword variation.',
    icon: Target,
    tag: 'Query Fan-Out'
  },
  {
    number: 4,
    title: 'E-E-A-T and First-Hand Experience',
    description:
      'Experience, expertise, authoritativeness, and trustworthiness remain important content-quality considerations. Original research, practical examples, expert contributions, and transparent business information help differentiate your content.',
    icon: ShieldCheck,
    tag: 'E-E-A-T Trust'
  },
  {
    number: 5,
    title: 'Entity-Based and Semantic SEO',
    description:
      'Search engines increasingly interpret the relationships between brands, services, products, people, and topics. Consistent brand information and comprehensive subject coverage help establish stronger topical relevance.',
    icon: Globe,
    tag: 'Knowledge Graph'
  },
  {
    number: 6,
    title: 'Zero-Click Search Visibility',
    description:
      'Some users obtain information directly from search results without visiting websites. Businesses should consider brand exposure, search impressions, branded searches, and assisted conversions alongside traditional organic clicks.',
    icon: Eye,
    tag: 'Brand Impressions'
  },
  {
    number: 7,
    title: 'Video and Visual Search Optimization',
    description:
      'Images and videos provide additional discovery opportunities. Relevant visual assets, descriptive filenames, meaningful alt text, video metadata, and useful supporting content can improve accessibility and search visibility.',
    icon: Video,
    tag: 'Visual Search'
  },
  {
    number: 8,
    title: 'Core Web Vitals and Page Experience',
    description:
      'Website speed, responsiveness, stability, mobile usability, and clear navigation influence the experience visitors have after reaching your website. Technical optimization remains essential for sustainable SEO.',
    icon: Gauge,
    tag: 'Core Web Vitals'
  }
];

// Section 7: Industry-Specific SEO Solutions
export const industrySeoSolutions: IndustrySeoItem[] = [
  {
    title: 'Technology and SaaS Businesses',
    description:
      'We help technology and SaaS companies improve organic visibility for software solutions, product features, integrations, and industry-specific queries. Our SEO strategy focuses on product landing pages, solution-based content, comparison keywords, technical documentation, and educational resources that attract potential customers at different stages of the buying journey.',
    icon: Laptop,
    keyFocus: ['Software Landing Pages', 'Feature & Comparison Keywords', 'Technical Documentation']
  },
  {
    title: 'Ecommerce and Retail Businesses',
    description:
      'For online stores, we focus on product discovery and organic sales opportunities. Our ecommerce SEO strategies include category optimization, product page improvements, shopping-related keywords, product structured data, internal linking, and technical improvements that help search engines understand large product inventories.',
    icon: ShoppingBag,
    keyFocus: ['Product Category Architecture', 'Shopping Schema & Reviews', 'Inventory Crawlability']
  },
  {
    title: 'Healthcare and Wellness Businesses',
    description:
      'Healthcare-related searches require accurate, reliable, and responsible information. We help healthcare and wellness businesses strengthen their digital presence through relevant service pages, location-based optimization, informative content, and website improvements. Content quality, expert review, and trust signals receive particular attention.',
    icon: HeartPulse,
    keyFocus: ['Medical E-E-A-T & Fact-Checking', 'Local Clinic / Facility Optimization', 'Patient Education Content']
  },
  {
    title: 'Real Estate and Construction Businesses',
    description:
      'We optimize real estate and construction websites for property-related searches, service keywords, location-specific queries, and industry information. Our approach includes local landing pages, project pages, service descriptions, neighborhood content, and lead-focused website optimization to connect businesses with potential buyers and customers.',
    icon: Home,
    keyFocus: ['Neighborhood & Area Guides', 'Property Search Visibility', 'High-Intent Buyer Leads']
  },
  {
    title: 'Finance and Professional Services',
    description:
      'Financial services, consulting firms, and professional service providers need search strategies that communicate credibility and expertise. We focus on service-specific keyword research, informative resources, expert-led content, technical SEO, and relevant authority-building activities while considering the higher trust requirements of these industries.',
    icon: Briefcase,
    keyFocus: ['Authoritative Trust Signals', 'Commercial Intent Keywords', 'Compliance-Friendly Content']
  },
  {
    title: 'Education and Training Businesses',
    description:
      'We help educational institutions, online learning platforms, and training providers reach students and professionals searching for courses, certifications, and learning opportunities. Our SEO activities cover course pages, program descriptions, informational content, location-based searches, and relevant keyword clusters.',
    icon: GraduationCap,
    keyFocus: ['Course & Degree Pages', 'Certification Searches', 'Student Enrollment Funnels']
  }
];

// Section 8: Why Choose GrowthVoice
export const whyChooseGrowthVoice: WhyChooseItem[] = [
  {
    title: 'Business-Focused SEO Strategies',
    description:
      'We develop SEO plans based on your industry, target audience, competition, and commercial objectives. Our strategies prioritize relevant keywords and website improvements that support business growth rather than targeting traffic without considering its value.',
    icon: Target
  },
  {
    title: 'Complete SEO Execution',
    description:
      "From technical SEO and keyword research to content optimization and link building, we cover the essential activities required to improve your website's organic performance. This integrated approach helps maintain consistency across different SEO activities.",
    icon: Layers
  },
  {
    title: 'AI-Ready Search Optimization',
    description:
      'We consider developments in AI-powered search, conversational queries, and answer engines when planning content and optimization activities. Our focus remains on strong SEO fundamentals supported by useful, original, and accessible website information.',
    icon: Sparkles
  },
  {
    title: 'Transparent Reporting and Communication',
    description:
      "We believe businesses should understand what their SEO investment supports. Our reporting approach covers completed activities, organic performance, keyword visibility, website improvements, and opportunities for further optimization.",
    icon: BarChart3
  },
  {
    title: 'Industry and Competitor Research',
    description:
      'We study your competitive environment to identify keyword gaps, content opportunities, technical weaknesses, and potential authority-building opportunities. These insights help us develop more informed SEO strategies.',
    icon: Search
  },
  {
    title: 'Continuous Optimization',
    description:
      'SEO requires regular monitoring because search algorithms, competitors, website content, and customer expectations continue to change. We review performance and adjust our strategies to maintain relevance and identify new opportunities.',
    icon: Repeat
  }
];

// Section 9: 10 Frequently Asked Questions
export const seoFaqs: SeoFaqItem[] = [
  {
    id: 1,
    question: 'What are SEO services, and why does my business need them?',
    answer:
      'SEO services involve optimizing your website to improve its visibility in organic search results. They include keyword research, technical SEO, on-page optimization, content development, link building, and performance monitoring. Businesses need SEO to reach potential customers who are actively searching for their products, services, or solutions.'
  },
  {
    id: 2,
    question: 'How much do professional SEO services cost?',
    answer:
      'SEO service costs depend on your website size, industry competition, target keywords, business goals, and optimization requirements. Local businesses may require a smaller campaign, while enterprise websites and competitive industries often need more comprehensive SEO strategies. GrowthVoice can help identify a suitable SEO approach based on your requirements and budget.'
  },
  {
    id: 3,
    question: 'How long does SEO take to show results?',
    answer:
      "SEO is a long-term marketing strategy, and results depend on your website's existing condition, competition, content quality, and implementation efforts. Some technical improvements may produce earlier benefits, while meaningful organic ranking and traffic improvements generally require consistent optimization over several months. SEO results are not guaranteed within a specific timeframe."
  },
  {
    id: 4,
    question: 'What is the difference between on-page SEO and off-page SEO?',
    answer:
      'On-page SEO focuses on optimizing elements within your website, including page content, headings, keywords, metadata, images, and internal links. Off-page SEO involves activities outside your website, such as earning quality backlinks, digital PR coverage, brand mentions, and relevant industry references. Both contribute to a comprehensive SEO strategy.'
  },
  {
    id: 5,
    question: 'Can SEO services help my website appear in Google AI Overviews?',
    answer:
      "Yes, your website may be eligible to appear as a supporting source in Google AI Overviews if its pages meet Google's search technical requirements and are eligible to appear in Search. Creating original, helpful, well-structured content and maintaining strong SEO fundamentals can support discoverability. However, appearance in AI-generated results is not guaranteed."
  },
  {
    id: 6,
    question: 'What is the difference between SEO, AEO, and GEO?',
    answer:
      'SEO focuses on improving visibility in search engines through technical optimization, content relevance, and authority development. AEO focuses on making information useful and accessible for answer-oriented search experiences. GEO focuses on improving brand and content visibility across generative AI platforms. These approaches overlap and can be integrated into a broader organic search strategy.'
  },
  {
    id: 7,
    question: 'Do SEO services help generate business leads?',
    answer:
      'Yes. SEO can attract people searching for relevant products and services, creating opportunities for enquiries, purchases, and other conversions. However, lead generation also depends on landing page quality, service relevance, website experience, and clear calls to action. GrowthVoice combines organic optimization with conversion-focused improvements to support business growth.'
  },
  {
    id: 8,
    question: 'Why should I choose GrowthVoice for SEO services?',
    answer:
      'GrowthVoice provides comprehensive SEO services covering technical optimization, keyword research, content strategy, on-page SEO, off-page SEO, and performance monitoring. We combine established SEO practices with evolving AI search optimization approaches to help businesses strengthen their online presence and attract qualified organic traffic.'
  },
  {
    id: 9,
    question: 'Does GrowthVoice provide local and international SEO services?',
    answer:
      'Yes. SEO strategies can be developed for businesses targeting local customers, national markets, or international audiences. Depending on your requirements, optimization may include location-specific landing pages, regional keyword research, international website structures, language targeting, and relevant technical configurations.'
  },
  {
    id: 10,
    question: 'How do I get started with GrowthVoice SEO services?',
    answer:
      'Getting started is simple. Contact GrowthVoice and share your website, industry, target audience, and business objectives. Our team can evaluate your SEO requirements, identify potential optimization opportunities, and recommend a strategy to improve your website\'s organic search performance.'
  }
];

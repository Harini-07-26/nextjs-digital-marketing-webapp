import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/src/data/blogs';
import BlogListClient from '@/src/components/blog/BlogListClient';

export const metadata: Metadata = {
  title: 'Blogs & Insights | Best Digital Marketing Agency | Growth Voice',
  description:
    'Explore the latest trends, strategies, and insights in Digital Marketing, AI-Driven Marketing, SEO, AEO, GEO, Content Strategy, Social Media Growth, Paid Advertising, Influencer Marketing, Marketing Automation, and Customer Engagement.',
  alternates: {
    canonical: '/blog'
  },
  openGraph: {
    title: 'Blogs & Insights | Growth Voice',
    description:
      'Explore the latest trends, strategies, and insights in Digital Marketing, AI-Driven Marketing, SEO, AEO, GEO, Content Strategy, Social Media Growth, Paid Advertising, Influencer Marketing, Marketing Automation, and Customer Engagement.',
    type: 'website',
    url: '/blog'
  }
};

export default function BlogListingPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground transition-colors duration-300 overflow-hidden">
      {/* 🌌 Star Field & Ambient Glow matching application theme */}
      <div className="stars stars-sm" />
      <div className="stars stars-md" />

      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(800px circle at 15% 15%, hsl(var(--primary) / 0.16), transparent 60%), radial-gradient(700px circle at 85% 65%, hsl(var(--hero-gradient-end) / 0.14), transparent 60%)'
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-14 sm:pt-36 sm:pb-18 text-center z-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Announcement badge */}
          <div className="inline-flex items-center justify-center">
            <span className="announcement-badge">
              <span className="glow-dot" />
              Growth Voice Blogs
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            Our <span className="gradient-text">Blogs</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto font-normal">
            Explore the latest trends, strategies, and insights in Digital Marketing, AI-Driven Marketing, SEO, AEO,
            GEO, Content Strategy, Social Media Growth, Paid Advertising, Influencer Marketing, Marketing Automation,
            and Customer Engagement!
          </p>

          {/* CTA Button */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/#contact" className="btn-primary-gradient inline-flex items-center gap-2">
              Speak to a Specialist <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="relative z-10 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogListClient posts={blogPosts} />
        </div>
      </section>
    </main>
  );
}

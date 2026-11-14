import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar, Clock, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import { blogPosts, getBlogPostBySlug } from '@/src/data/blogs';
import BlogImage from '@/src/components/blog/BlogImage';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Blog Not Found | Growth Voice'
    };
  }

  const postUrl = `/blog/${post.slug}`;

  return {
    title: `${post.title} | Growth Voice`,
    description: post.excerpt,
    alternates: {
      canonical: postUrl
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: postUrl,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    }
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Related posts
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <main className="relative min-h-screen bg-background text-foreground transition-colors duration-300 overflow-hidden pt-28 pb-20">
      {/* 🌌 Star Field & Ambient Glow matching application theme */}
      <div className="stars stars-sm" />
      <div className="stars stars-md" />

      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(750px circle at 15% 10%, hsl(var(--primary) / 0.15), transparent 60%), radial-gradient(650px circle at 85% 45%, hsl(var(--hero-gradient-end) / 0.12), transparent 60%)'
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

      <article className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Navigation / Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-card/60 px-4 py-2 text-xs sm:text-sm font-medium text-muted-foreground backdrop-blur-md transition-all hover:border-primary/50 hover:text-primary hover:bg-card"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blogs</span>
          </Link>

          {post.category && (
            <span className="rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary backdrop-blur-md">
              {post.category}
            </span>
          )}
        </div>

        {/* Article Title (Positioned Above Image) */}
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight tracking-tight text-foreground mb-6">
          {post.title}
        </h1>

        {/* Featured Visual Banner with Skeleton Loader */}
        <div className="relative w-full aspect-[16/11] overflow-hidden rounded-2xl border border-border/80 bg-card/70 shadow-2xl mb-8 group">
          <BlogImage
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-contain sm:object-cover transition-transform duration-500 group-hover:scale-102"
            containerClassName="w-full h-full"
          />
        </div>

        {/* Metadata Bar */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-6 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-bold text-primary">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="font-medium text-foreground">by {post.author}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                <Calendar className="h-3 w-3 text-primary/80" />
                {post.date}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {post.readTime && (
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary" />
                {post.readTime}
              </span>
            )}
            <span className="flex items-center gap-1.5 text-primary">
              <MessageSquare className="h-4 w-4" />
              {post.commentsCount} comments
            </span>
          </div>
        </div>

        {/* Key Takeaway Callout Box */}
        <div className="my-8 rounded-2xl border border-primary/30 bg-primary/5 p-6 backdrop-blur-md relative overflow-hidden">
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-semibold tracking-wider uppercase text-primary mb-1">
                Executive Summary
              </h4>
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed italic">
                {post.excerpt}
              </p>
            </div>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="text-[15px] sm:text-base md:text-[17px] leading-relaxed text-foreground/85 space-y-6">
          {post.content.paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Structured Sections */}
          {post.content.sections?.map((section, sIndex) => (
            <div key={sIndex} className="pt-6">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4 flex items-center gap-2.5">
                <span className="h-6 w-1 rounded-full bg-primary" />
                {section.heading}
              </h2>

              {section.body.map((p, pIndex) => (
                <p key={pIndex} className="mb-4 leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}

              {section.list && (
                <div className="space-y-3 my-4">
                  {section.list.map((item, lIndex) => (
                    <div key={lIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/90 text-sm sm:text-base leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tags */}
        {post.tags && (
          <div className="mt-12 flex flex-wrap gap-2 border-t border-border/60 pt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/80 bg-secondary/40 px-3.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Specialist Consultation CTA Banner */}
        <div className="my-14 rounded-2xl border border-border/80 bg-gradient-to-br from-card via-secondary/40 to-card p-8 sm:p-10 text-center relative overflow-hidden shadow-2xl backdrop-blur-xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
          />
          <div className="relative z-10">
            <span className="announcement-badge mb-4">
              <span className="glow-dot" /> High-Impact Web3 Growth
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Ready to Build Your <span className="gradient-text">Winning Strategy</span>?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-6">
              Connect with our dedicated marketing strategists for a comprehensive audit and custom execution blueprint.
            </p>
            <Link href="/#contact" className="btn-primary-gradient inline-flex items-center gap-2">
              Speak to a Specialist <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 border-t border-border/60 pt-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-8">
              Related <span className="gradient-text">Articles</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_25px_hsl(var(--primary)_/_0.15)] hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-secondary/30 mb-4">
                    <BlogImage
                      src={related.image}
                      alt={related.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      containerClassName="w-full h-full"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">
                    by {related.author} · {related.date}
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-bold text-foreground mt-2 line-clamp-2 transition-colors group-hover:text-primary">
                    {related.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary">
                    <span>read more</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}

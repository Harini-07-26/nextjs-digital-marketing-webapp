'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ArrowRight, Clock, Calendar, Search } from 'lucide-react';
import { BlogPost } from '@/src/data/blogs';
import BlogImage from './BlogImage';

interface BlogListClientProps {
  posts: BlogPost[];
}

const categories = ['All Posts'];

export default function BlogListClient({ posts }: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleCategoryChange = (category: string) => {
    startTransition(() => {
      setSelectedCategory(category);
    });
  };

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-10">
      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`relative rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)_/_0.4)]'
                    : 'border border-border/70 bg-card/50 text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-card'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Search Input with inline loader indicator */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-border/70 bg-card/50 pl-10 pr-10 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
          />
          {isPending && (
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
              <div className="h-3.5 w-3.5 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
            </div>
          )}
        </div>
      </div>

      {/* Grid of Blog Cards */}
      <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/70 backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)_/_0.2)] hover:-translate-y-1.5"
            >
              {/* Banner Thumbnail with Skeleton Loader */}
              <Link
                href={`/blog/${post.slug}`}
                className="relative aspect-[16/11] w-full overflow-hidden bg-secondary/30"
              >
                <BlogImage
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  containerClassName="w-full h-full"
                />

                {/* Category Pill Tag on Image */}
                {post.category && (
                  <span className="absolute left-3 top-3 z-20 rounded-full border border-border/80 bg-background/80 px-3 py-1 text-[11px] font-semibold text-primary backdrop-blur-md shadow-sm">
                    {post.category}
                  </span>
                )}
              </Link>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  {/* Meta: Author, Date & Reading Time */}
                  <div className="flex flex-wrap items-center justify-between text-xs text-muted-foreground gap-2">
                    <span className="font-medium text-foreground/80">by {post.author}</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-primary/80" />
                        {post.date}
                      </span>
                      {post.readTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-primary/80" />
                          {post.readTime}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="mt-3 font-display text-lg sm:text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs sm:text-sm">
                  {/* Comments Count */}
                  <div className="flex items-center gap-1.5 text-primary font-medium">
                    <MessageSquare className="h-4 w-4" />
                    <span>{post.commentsCount} Comments</span>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 font-semibold text-primary transition-all duration-200 group-hover:gap-2.5 hover:brightness-110"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="rounded-2xl border border-border/70 bg-card/40 p-12 text-center backdrop-blur-xl">
          <p className="text-base text-muted-foreground">No articles found matching your criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('All Posts');
              setSearchQuery('');
            }}
            className="mt-4 rounded-xl border border-primary/50 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary hover:bg-primary/20 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { aiDevelopmentColumns } from '@/src/data/ai-development-topics';
import { getAiTopicIcon } from '@/src/data/ai-topic-icons';

interface AiDevelopmentMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const AiDevelopmentMegaMenu = ({ isOpen, onClose }: AiDevelopmentMegaMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-background/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed left-0 right-0 top-[4.25rem] z-50 px-4 md:px-6"
          >
            <div className="mx-auto max-w-7xl rounded-2xl border border-border bg-card shadow-2xl shadow-black/20">
              <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 lg:p-6">
                {aiDevelopmentColumns.map((column, colIndex) => (
                  <div key={colIndex} className="flex flex-col gap-2.5">
                    {column.map((topic) => {
                      const Icon = getAiTopicIcon(topic.iconName);
                      return (
                      <Link
                        key={topic.slug}
                        href={`/ai-development/${topic.slug}`}
                        onClick={onClose}
                        className="group flex items-center gap-3 rounded-xl border border-border/80 bg-secondary/30 px-3.5 py-3 transition-all duration-200 hover:border-primary/40 hover:bg-secondary/60 hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.12)]"
                      >
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${topic.iconBg}`}
                        >
                          <Icon className={`h-5 w-5 ${topic.iconColor}`} />
                        </div>
                        <span className="text-sm font-medium leading-snug text-foreground group-hover:text-primary">
                          {topic.title}
                        </span>
                      </Link>
                    );})}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AiDevelopmentMegaMenu;

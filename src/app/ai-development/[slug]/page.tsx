import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AiDevelopmentDetail from '@/src/components/ai-development-detail';
import { getAiTopicBySlug, getAllAiTopicSlugs } from '@/src/data/ai-development-topics';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAiTopicSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getAiTopicBySlug(slug);

  if (!topic) {
    return { title: 'Not Found | DIGI' };
  }

  return {
    title: `${topic.title} | AI Development | DIGI`,
    description: topic.shortDescription
  };
}

const AiDevelopmentTopicPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const topic = getAiTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <AiDevelopmentDetail topic={topic} />
    </div>
  );
};

export default AiDevelopmentTopicPage;

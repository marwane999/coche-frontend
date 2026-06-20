import type { Metadata } from 'next'
import Link from 'next/link'
import SectionWrapper from '@/components/shared/SectionWrapper'
import { ArrowLeft, Calendar, User } from 'lucide-react'

export async function generateStaticParams() {
  return []
}

interface BlogPostPageProps {
  params: { slug: string }
}

const blogPosts: Record<string, {
  title: string
  excerpt: string
  content: string
  cover_image: string | null
  author: string
  published_at: string
  category: string
}> = {
  'exemple-article': {
    title: 'Exemple d\'article de blog',
    excerpt: 'Un exemple d\'article pour la démonstration.',
    content: `
      <p>Ceci est un exemple d'article de blog pour Coach Consulting. Les articles complets seront disponibles prochainement.</p>
      <p>Notre équipe d'experts partage régulièrement des analyses, conseils et bonnes pratiques en matière de management, finance, formation et coaching.</p>
      <p>Restez connectés pour découvrir nos prochains articles.</p>
    `,
    cover_image: 'http://coachconsulting.ma/images/blog-placeholder.jpg',
    author: 'Coach Consulting',
    published_at: '2026-01-15',
    category: 'Actualités',
  },
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts[params.slug]
  if (!post) return { title: 'Article non trouvé – Coach Consulting' }

  return {
    title: `${post.title} – Coach Consulting`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug]

  if (!post) {
    return (
      <SectionWrapper>
        <div className="text-center py-16">
          <h1 className="text-2xl font-heading font-bold text-secondary mb-4">
            Article non trouvé
          </h1>
          <p className="text-muted-foreground mb-6">
            L&apos;article que vous recherchez n&apos;existe pas ou a été déplacé.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l&apos;accueil
          </Link>
        </div>
      </SectionWrapper>
    )
  }

  return (
    <>
      <section className="bg-gradient-to-br from-secondary to-secondary-dark text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l&apos;accueil
          </Link>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-heading font-bold mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.published_at).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="px-2 py-0.5 bg-white/10 rounded text-xs">{post.category}</span>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          {post.cover_image && (
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8 bg-gradient-to-br from-[#0e3d68] to-[#07223b]" />
          )}
          <div
            className="text-muted-foreground leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </SectionWrapper>
    </>
  )
}

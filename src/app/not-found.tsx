import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-[clamp(5rem,10vw,8rem)] font-heading font-bold text-primary leading-none mb-4">
          404
        </p>
        <h1 className="text-[clamp(1.5rem,3vw,2rem)] font-heading font-bold text-secondary mb-3">
          Page non trouvée
        </h1>
        <p className="text-muted-foreground mb-8">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  )
}

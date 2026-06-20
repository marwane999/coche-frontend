import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionWrapper from '@/components/shared/SectionWrapper'
import { ArrowRight, Search, Target, Users, CheckCircle, FileText, ClipboardList, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Recrutement & Gestion des compétences – Coach Consulting',
  description:
    "Coach Consulting vous accompagne dans vos recrutements et la gestion des compétences : méthodes innovantes, espace candidats, accompagnement personnalisé.",
}

const methodes = [
  {
    icon: Search,
    title: 'Analyse des besoins',
    desc: 'Identification précise du profil recherché, des compétences clés et des soft skills nécessaires.',
  },
  {
    icon: Target,
    title: 'Sourcing ciblé',
    desc: 'Recherche multicanal active et passive pour atteindre les meilleurs talents du marché.',
  },
  {
    icon: ClipboardList,
    title: 'Évaluation structurée',
    desc: 'Tests de compétences, assessment, études de cas et entretiens comportementaux.',
  },
  {
    icon: Users,
    title: 'Intégration & suivi',
    desc: "Accompagnement à l'intégration et suivi post-recrutement pour garantir la réussite de la collaboration.",
  },
]

export default function RecrutementPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-secondary to-secondary-dark text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-bold mb-4">
            Talent Management – Recrutement & Gestion des compétences
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Nous vous accompagnons dans l&apos;identification, l&apos;attraction et la fidélisation
            des talents pour bâtir une équipe performante et alignée sur votre stratégie.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-heading font-bold text-secondary mb-4">
            Nos méthodes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une approche structurée et éprouvée pour chaque mission de recrutement.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodes.map((m) => (
            <div key={m.title} className="bg-white rounded-xl p-6 border shadow-sm">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <m.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-secondary mb-2">{m.title}</h3>
              <p className="text-sm text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper bgAlt>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-heading font-bold text-secondary mb-4">
              Espace candidats
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Vous cherchez à donner un nouvel élan à votre carrière ? Coach Consulting vous
              accompagne dans votre projet professionnel avec des conseils personnalisés et un accès
              à des opportunités dans des entreprises de premier plan.
            </p>
            <ul className="space-y-3">
              {[
                'Accompagnement CV et lettre de motivation',
                'Préparation aux entretiens',
                'Accès à nos offres exclusives',
                'Conseil en évolution professionnelle',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors mt-6"
            >
              Envoyer ma candidature
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative h-72 md:h-96 rounded-xl overflow-hidden order-1 md:order-2">
            <Image
              src="http://coachconsulting.ma/images/recrutement.jpg"
              alt="Espace candidats"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-heading font-bold mb-4">
            Vous recrutez ? Confiez-nous votre mission
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Bénéficiez de notre expertise en recrutement et talent management.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Confier un recrutement
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}

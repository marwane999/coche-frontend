import type { Metadata } from 'next'
import Link from 'next/link'
import SectionWrapper from '@/components/shared/SectionWrapper'
import { ArrowRight, Star, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Références & Témoignages – Coach Consulting',
  description:
    "Découvrez les entreprises qui nous font confiance et les témoignages de nos clients satisfaits. Coach Consulting, votre partenaire de confiance au Maroc.",
}

const references = [
  'BMCE Bank', 'Attijariwafa Bank', 'Société Générale', 'CFG Bank',
  'ONCF', 'Marsa Maroc', 'Lydec', 'ONEE',
  'Maroc Telecom', 'Orange', 'Inwi', 'LafargeHolcim',
  'Ciments du Maroc', 'Nestlé Maroc', 'Procter & Gamble', 'Samsung',
  'TotalEnergies', 'Safran', 'OCP', 'Royal Air Maroc',
  'Managem', 'Mutandis', 'Holmarcom', 'Yanzi',
  'Groupe OCP', 'CIH Bank', 'Crédit Agricole', 'Bank Of Africa',
]

const testimonials = [
  {
    name: 'Fatima B.',
    position: 'Directrice Financière',
    company: 'Grande entreprise industrielle',
    content:
      "Coach Consulting a transformé notre approche budgétaire. Leurs experts ont su nous accompagner avec professionnalisme et pragmatisme. Les tableaux de bord mis en place nous permettent désormais un pilotage en temps réel de notre performance.",
    rating: 5,
  },
  {
    name: 'Karim E.',
    position: 'DRH',
    company: 'Société de services',
    content:
      'Un partenariat exceptionnel pour le recrutement de nos cadres dirigeants. Approche rigoureuse et résultats à la hauteur de nos exigences. Le suivi post-recrutement est un vrai plus.',
    rating: 5,
  },
  {
    name: 'Sofia M.',
    position: 'CEO',
    company: 'Startup tech',
    content:
      "Le coaching individuel m'a permis de développer mon leadership et de structurer ma vision stratégique. Les séances étaient parfaitement adaptées à mes besoins et mon planning.",
    rating: 5,
  },
  {
    name: 'Hassan L.',
    position: 'Directeur Général',
    company: 'PME industrielle',
    content:
      "L'accompagnement sur la stratégie financière nous a aidés à optimiser notre structure de financement et à renégocier nos lignes bancaires dans des conditions très avantageuses.",
    rating: 5,
  },
  {
    name: 'Nadia R.',
    position: 'Responsable Formation',
    company: 'Groupe bancaire',
    content:
      "Les formations Coach Consulting sont d'une qualité exceptionnelle. Nos collaborateurs ont particulièrement apprécié l'approche pratique et les études de cas réelles.",
    rating: 5,
  },
  {
    name: 'Youssef D.',
    position: 'Directeur Commercial',
    company: 'Entreprise de distribution',
    content:
      'La formation en techniques de vente a considérablement amélioré les performances de notre équipe commerciale. Résultats visibles dès le premier trimestre.',
    rating: 4,
  },
]

export default function ReferencesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-secondary to-secondary-dark text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-bold mb-4">
            Ils nous font confiance
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Depuis plus de 15 ans, nous accompagnons les plus grandes entreprises marocaines
            dans leur développement et la montée en compétences de leurs équipes.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-heading font-bold text-secondary mb-4">
            Nos références
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Plus de 500 entreprises nous ont fait confiance.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {references.map((ref) => (
            <div
              key={ref}
              className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 border shadow-sm hover:shadow-md transition-shadow"
            >
              <Building2 className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm font-semibold text-secondary">{ref}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper bgAlt>
        <div className="text-center mb-12">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-heading font-bold text-secondary mb-4">
            Témoignages clients
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de leur expérience avec Coach Consulting.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-6 border shadow-sm">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < t.rating ? 'fill-accent-gold text-accent-gold' : 'text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="pt-4 border-t">
                <p className="font-semibold text-secondary text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">
                  {t.position}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-heading font-bold mb-4">
            Vous aussi, rejoignez nos clients satisfaits
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contactez-nous
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}

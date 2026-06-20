import type { Metadata } from 'next'
import Link from 'next/link'
import SectionWrapper from '@/components/shared/SectionWrapper'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Formations professionnelles – Coach Consulting',
  description:
    "Coach Consulting propose des formations professionnelles dans 8 domaines : Finance, Contrôle de gestion, Audit, Stratégie, Credit Management, RH, Coaching et Commercial. Inter et intra-entreprise.",
}

const domaines = [
  {
    code: 'FIN',
    name: 'Finance',
    desc: 'Analyse financière, gestion de trésorerie, finance d\'entreprise, normes IFRS, évaluation d\'entreprises.',
  },
  {
    code: 'CDG',
    name: 'Contrôle de gestion',
    desc: 'Tableaux de bord, budget, contrôle budgétaire, reporting, gestion des coûts, performance.',
  },
  {
    code: 'AUD',
    name: 'Audit',
    desc: 'Audit interne, audit externe, audit opérationnel, contrôle interne, gestion des risques.',
  },
  {
    code: 'STR',
    name: 'Stratégie',
    desc: 'Planification stratégique, business plan, transformation digitale, stratégie d\'entreprise.',
  },
  {
    code: 'CRM',
    name: 'Credit Management',
    desc: 'Gestion du crédit, recouvrement, analyse de risques clients, scoring, contentieux.',
  },
  {
    code: 'RH',
    name: 'Ressources Humaines',
    desc: 'GPEC, recrutement, paie, droit social, gestion des talents, marque employeur.',
  },
  {
    code: 'COA',
    name: 'Coaching',
    desc: 'Coaching de carrière, coaching individuel, coaching relationnel, coaching managérial.',
  },
  {
    code: 'COM',
    name: 'Commercial',
    desc: 'Techniques de vente, négociation commerciale, management d\'équipe, relation client.',
  },
]

const principes = [
  'Approche pédagogique active et participative',
  'Formateurs experts métier certifiés',
  'Programmes actualisés selon les normes en vigueur',
  'Supports de formation complets et outils pratiques',
  'Suivi post-formation personnalisé',
]

export default function FormationsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-secondary to-secondary-dark text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-bold mb-4">
            Nos formations professionnelles
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Plus de 100 séminaires professionnels animés par des experts métier, en inter-entreprise
            dans nos locaux à Casablanca ou en intra-entreprise sur site.
          </p>
        </div>
      </section>

      <SectionWrapper bgAlt>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-heading font-bold text-secondary mb-6">
            Notre pédagogie en 5 principes
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 text-left">
            {principes.map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-6">
          {domaines.map((domain) => (
            <Link
              key={domain.code}
              href={`/agenda?domaine=${domain.code}`}
              className="group flex flex-col sm:flex-row bg-white rounded-xl border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full sm:w-40 h-48 sm:h-auto flex-shrink-0 bg-gradient-to-br from-[#0e3d68] to-[#07223b]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-lg opacity-60">{domain.code}</span>
                </div>
              </div>
              <div className="p-5 flex-1">
                <span className="text-xs font-semibold text-accent-gold">{domain.code}</span>
                <h3 className="font-heading text-lg font-semibold text-secondary mt-1">
                  {domain.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">{domain.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-3 group-hover:gap-2 transition-all">
                  Voir les sessions <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-heading font-bold mb-4">
            Vous souhaitez une formation sur mesure ?
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Nos experts conçoivent des programmes adaptés à vos spécificités métier.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Demander un devis personnalisé
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}

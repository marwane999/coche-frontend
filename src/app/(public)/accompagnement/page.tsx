import type { Metadata } from 'next'
import Link from 'next/link'
import SectionWrapper from '@/components/shared/SectionWrapper'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Accompagnement sur-mesure – Coach Consulting',
  description:
    "Coach Consulting vous accompagne en stratégie financière, pilotage d'investissements, tableaux de bord, budget, analyse des coûts, négociation bancaire et gestion des risques.",
}

const accompagnements = [
  {
    title: 'Stratégie financière',
    desc: "Nous vous aidons à définir et déployer une stratégie financière alignée sur vos objectifs de croissance. Analyse de la structure financière, optimisation du BFR, planification financière pluriannuelle.",
    image: 'http://coachconsulting.ma/images/strategie-financiere.jpg',
    reverse: false,
  },
  {
    title: 'Pilotage des investissements',
    desc: "Évaluation et sélection des projets d'investissement, analyse de rentabilité (VAN, TRI, délai de récupération), suivi budgétaire et reporting investissements.",
    image: 'http://coachconsulting.ma/images/pilotage-investissements.jpg',
    reverse: true,
  },
  {
    title: 'Tableaux de bord de gestion',
    desc: 'Conception et mise en place de tableaux de bord de gestion pertinents et actionnables. Indicateurs clés de performance, reporting mensuel, pilotage opérationnel et stratégique.',
    image: 'http://coachconsulting.ma/images/tableaux-bord.jpg',
    reverse: false,
  },
  {
    title: 'Budget et contrôle budgétaire',
    desc: "Accompagnement dans l'élaboration du budget annuel, suivi budgétaire, analyse des écarts, et mise en place d'un processus budgétaire efficace et participatif.",
    image: 'http://coachconsulting.ma/images/budget.jpg',
    reverse: true,
  },
  {
    title: 'Analyse des coûts et marges',
    desc: "Mise en place de comptabilité analytique, calcul des coûts de revient, analyse des marges par produit/client/canal, optimisation de la rentabilité.",
    image: 'http://coachconsulting.ma/images/couts-marges.jpg',
    reverse: false,
  },
  {
    title: 'Négociation bancaire',
    desc: "Préparation et accompagnement dans vos négociations bancaires. Optimisation de la structure de financement, recherche de covenants adaptés, optimisation des lignes de crédit.",
    image: 'http://coachconsulting.ma/images/negociation-bancaire.jpg',
    reverse: true,
  },
  {
    title: 'Gestion des risques',
    desc: 'Identification, évaluation et couverture des risques financiers et opérationnels. Mise en place de dispositifs de contrôle interne et de gestion des risques.',
    image: 'http://coachconsulting.ma/images/risques.jpg',
    reverse: false,
  },
]

export default function AccompagnementPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-secondary to-secondary-dark text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-bold mb-4">
            Accompagnement sur-mesure pour votre entreprise
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Nos experts vous accompagnent dans la transformation de votre fonction finance et
            gestion pour en faire un véritable levier de performance.
          </p>
        </div>
      </section>

      {accompagnements.map((item, i) => (
        <SectionWrapper key={item.title} bgAlt={i % 2 === 1}>
          <div
            className={`grid md:grid-cols-2 gap-12 items-center ${
              item.reverse ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div
              className={`relative h-72 md:h-96 rounded-xl overflow-hidden ${
                item.reverse ? 'md:order-last' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0e3d68] to-[#07223b]" />
            </div>
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-heading font-bold text-secondary mb-4">
                {item.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </div>
        </SectionWrapper>
      ))}

      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-heading font-bold mb-4">
            Prêt à passer à l&apos;action ?
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Bénéficiez d&apos;un diagnostic gratuit de votre fonction finance et gestion.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Demander un diagnostic gratuit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}

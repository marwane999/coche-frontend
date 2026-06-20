import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionWrapper from '@/components/shared/SectionWrapper'
import { ArrowRight, Clock, Award, Users, HeartHandshake, TrendingUp, MessageCircle, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Coaching professionnel – Coach Consulting',
  description:
    "Coach Consulting propose du coaching de carrière, coaching individuel, coaching relationnel et coaching managérial à Casablanca. Réservez une séance gratuite.",
}

const services = [
  {
    icon: TrendingUp,
    title: 'Coaching de carrière',
    desc: "Bilan de compétences, transition professionnelle, préparation à l'expatriation, rebond après un licenciement.",
    image: 'http://coachconsulting.ma/images/coaching-carriere.jpg',
  },
  {
    icon: Target,
    title: 'Coaching individuel',
    desc: "Développement personnel, gestion du stress, affirmation de soi, leadership, prise de parole en public.",
    image: 'http://coachconsulting.ma/images/coaching-individuel.jpg',
  },
  {
    icon: HeartHandshake,
    title: 'Coaching relationnel',
    desc: 'Communication interpersonnelle, gestion de conflits, intelligence émotionnelle, management d\'équipe.',
    image: 'http://coachconsulting.ma/images/coaching-relationnel.jpg',
  },
  {
    icon: Award,
    title: 'Coaching managérial',
    desc: 'Prise de fonction, management transversal, conduite du changement, délégation et responsabilisation.',
    image: 'http://coachconsulting.ma/images/coaching-managerial.jpg',
  },
]

export default function CoachingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-secondary to-secondary-dark text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-bold mb-4">
            Coaching professionnel à Casablanca
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Développez votre potentiel et atteignez vos objectifs avec nos coachs certifiés.
            Un accompagnement personnalisé pour les professionnels et les entreprises.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-heading font-bold text-secondary mb-4">
            Nos services de coaching
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des programmes adaptés à vos besoins, animés par des coachs certifiés avec une moyenne
            de 10 ans d&apos;expérience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-xl border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image src={s.image} alt={s.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <s.icon className="h-5 w-5 text-accent-gold" />
                  <h3 className="font-heading font-semibold text-lg">{s.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper bgAlt>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-72 md:h-96 rounded-xl overflow-hidden">
            <Image
              src="http://coachconsulting.ma/images/coaching-info.jpg"
              alt="Informations coaching"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-heading font-bold text-secondary mb-4">
              Comment ça marche ?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MessageCircle className="h-4 w-4 text-accent-gold" />
                </div>
                <div>
                  <p className="font-semibold text-secondary">1. Séance de découverte gratuite</p>
                  <p className="text-sm text-muted-foreground">
                    Échangeons sur vos objectifs et définissons ensemble le programme adapté.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Users className="h-4 w-4 text-accent-gold" />
                </div>
                <div>
                  <p className="font-semibold text-secondary">2. Programme personnalisé</p>
                  <p className="text-sm text-muted-foreground">
                    Séances individuelles ou en groupe, en présentiel ou à distance.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TrendingUp className="h-4 w-4 text-accent-gold" />
                </div>
                <div>
                  <p className="font-semibold text-secondary">3. Suivi et mesure des progrès</p>
                  <p className="text-sm text-muted-foreground">
                    Évaluations régulières pour garantir l&apos;atteinte de vos objectifs.
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> Séances de 60 à 90 min</span>
              <span className="flex items-center gap-1"><Award className="h-4 w-4" /> Coachs certifiés</span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-heading font-bold mb-4">
            Prêt à transformer votre potentiel ?
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Réservez votre séance de prise de contact gratuite et sans engagement.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Réserver une séance de prise de contact gratuite
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}

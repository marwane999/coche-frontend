import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionWrapper from '@/components/shared/SectionWrapper'
import {
  CheckCircle,
  Users,
  TrendingUp,
  Award,
  Calendar,
  ChevronRight,
  Star,
  ArrowRight,
  BarChart3,
  Briefcase,
  UserCheck,
  Lightbulb,
  BookOpen,
  LineChart,
  Building2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Coach Consulting – Formation, Conseil & Coaching au Maroc',
  description:
    "Coach Consulting : formation professionnelle, conseil en management, coaching, recrutement et accompagnement des entreprises à Casablanca et partout au Maroc.",
}

const services = [
  {
    icon: BarChart3,
    title: 'Accompagnement',
    desc: 'Stratégie financière, pilotage, tableaux de bord, optimisation des coûts.',
    href: '/accompagnement',
  },
  {
    icon: Briefcase,
    title: 'Recrutement',
    desc: 'Talent management, gestion des compétences, recrutement ciblé.',
    href: '/recrutement',
  },
  {
    icon: UserCheck,
    title: 'Coaching',
    desc: 'Coaching de carrière, individuel, relationnel et managérial.',
    href: '/coaching',
  },
  {
    icon: BookOpen,
    title: 'Formation',
    desc: '8 domaines de formation professionnelle inter et intra-entreprise.',
    href: '/formations',
  },
]

const domains = [
  { code: 'FIN', label: 'Finance', image: 'http://coachconsulting.ma/images/finance.jpg' },
  { code: 'CDG', label: 'Contrôle de gestion', image: 'http://coachconsulting.ma/images/controle-gestion.jpg' },
  { code: 'AUD', label: 'Audit', image: 'http://coachconsulting.ma/images/audit.jpg' },
  { code: 'STR', label: 'Stratégie', image: 'http://coachconsulting.ma/images/strategie.jpg' },
  { code: 'CRM', label: 'Credit Management', image: 'http://coachconsulting.ma/images/credit-management.jpg' },
  { code: 'RH', label: 'Ressources Humaines', image: 'http://coachconsulting.ma/images/rh.jpg' },
  { code: 'COA', label: 'Coaching', image: 'http://coachconsulting.ma/images/coaching.jpg' },
  { code: 'COM', label: 'Commercial', image: 'http://coachconsulting.ma/images/commercial.jpg' },
]

const references = [
  'BMCE Bank', 'Attijariwafa Bank', 'Société Générale', 'CFG Bank',
  'ONCF', 'Marsa Maroc', 'Lydec', 'ONEE',
  'Maroc Telecom', 'Orange', 'Inwi', 'LafargeHolcim',
  'Ciments du Maroc', 'Nestlé Maroc', 'Procter & Gamble', 'Samsung',
]

const testimonials = [
  {
    name: 'Fatima B.',
    position: 'Directrice Financière',
    company: 'Grande entreprise industrielle',
    content:
      "Coach Consulting a transformé notre approche budgétaire. Leurs experts ont su nous accompagner avec professionnalisme et pragmatisme.",
    rating: 5,
  },
  {
    name: 'Karim E.',
    position: 'DRH',
    company: 'Société de services',
    content:
      'Un partenariat exceptionnel pour le recrutement de nos cadres dirigeants. Approche rigoureuse et résultats à la hauteur de nos exigences.',
    rating: 5,
  },
  {
    name: 'Sofia M.',
    position: 'CEO',
    company: 'Startup tech',
    content:
      "Le coaching individuel m'a permis de développer mon leadership et de structurer ma vision stratégique. Je recommande vivement.",
    rating: 5,
  },
]

const faqs = [
  {
    q: 'Quels types de formations proposez-vous ?',
    a: "Nous proposons des formations inter-entreprises et intra-entreprises dans 8 domaines : Finance, Contrôle de gestion, Audit, Stratégie, Credit Management, RH, Coaching et Commercial. Nos formations sont certifiantes et animées par des experts métier.",
  },
  {
    q: 'Comment s\'inscrire à une formation ?',
    a: "Vous pouvez consulter notre agenda en ligne, choisir la session qui vous convient et cliquer sur \"Je m'inscris\". Vous pouvez également nous contacter directement par téléphone ou email pour une inscription personnalisée.",
  },
  {
    q: "Proposez-vous des formations sur mesure ?",
    a: "Oui, nous concevons des formations intra-entreprises adaptées à vos besoins spécifiques. Nos consultants analysent vos besoins et élaborent un programme sur mesure pour vos équipes.",
  },
  {
    q: 'Quels sont vos tarifs ?',
    a: "Nos tarifs varient selon le type de formation, la durée et le nombre de participants. Consultez notre agenda pour les prix des sessions inter-entreprises ou contactez-nous pour un devis personnalisé.",
  },
  {
    q: 'Comment se déroule une séance de coaching ?',
    a: "Le coaching commence par une séance de prise de contact gratuite pour définir vos objectifs. Ensuite, nous mettons en place un programme personnalisé avec des séances régulières, en présentiel ou à distance.",
  },
]

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-secondary to-primary/90 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('http://coachconsulting.ma/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-36">
        <div className="max-w-3xl">
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-bold leading-tight mb-6">
            Votre partenaire excellence en{' '}
            <span className="text-accent-gold">management</span>,{' '}
            <span className="text-accent-gold">formation</span> et{' '}
            <span className="text-accent-gold">coaching</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Coach Consulting accompagne les entreprises marocaines vers l&apos;excellence opérationnelle
            et stratégique depuis plus de 15 ans. Formation, conseil, coaching et recrutement.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/formations"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Découvrir nos formations
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  return (
    <section className="bg-muted py-10">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
          Ils nous font confiance
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {references.slice(0, 8).map((ref) => (
            <span key={ref} className="text-sm font-semibold text-secondary whitespace-nowrap">
              {ref}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <SectionWrapper id="a-propos">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-80 md:h-full min-h-[350px] rounded-xl overflow-hidden">
          <Image
            src="http://coachconsulting.ma/images/about.jpg"
            alt="Coach Consulting"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <span className="text-accent-gold font-semibold text-sm uppercase tracking-wider">
            À propos
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-heading font-bold text-secondary mt-2 mb-6">
            L&apos;excellence au service de votre performance
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Coach Consulting est un cabinet de conseil et de formation basé à Casablanca, dédié à
            l&apos;accompagnement des entreprises marocaines dans leur développement. Notre équipe
            d&apos;experts met son savoir-faire au service de votre performance.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Award, label: '15+ ans d\'expertise' },
              { icon: Users, label: '500+ entreprises accompagnées' },
              { icon: CheckCircle, label: '98% de satisfaction' },
              { icon: TrendingUp, label: 'Expertise certifiée ISO' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-accent-gold flex-shrink-0" />
                <span className="text-sm font-medium text-secondary">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

function ServicesGrid() {
  return (
    <SectionWrapper bgAlt id="prestations">
      <div className="text-center mb-12">
        <span className="text-accent-gold font-semibold text-sm uppercase tracking-wider">
          Nos prestations
        </span>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-heading font-bold text-secondary mt-2">
          Des solutions adaptées à vos besoins
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="group bg-white rounded-xl p-6 shadow-sm border hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-secondary mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">{service.desc}</p>
            <span className="text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              En savoir plus <ChevronRight className="h-3 w-3" />
            </span>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  )
}

function FormationsGrid() {
  return (
    <SectionWrapper id="formations">
      <div className="text-center mb-12">
        <span className="text-accent-gold font-semibold text-sm uppercase tracking-wider">
          Formations
        </span>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-heading font-bold text-secondary mt-2">
          Nos domaines de formation
        </h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Plus de 100 séminaires professionnels animés par des experts métier dans 8 domaines clés.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {domains.map((domain) => (
          <Link
            key={domain.code}
            href={`/formations#${domain.code.toLowerCase()}`}
            className="group relative h-48 rounded-xl overflow-hidden"
          >
            <Image
              src={domain.image}
              alt={domain.label}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="text-xs text-accent-gold font-semibold">{domain.code}</span>
              <h3 className="text-white font-heading font-semibold text-lg">{domain.label}</h3>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          href="/formations"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          Voir toutes les formations
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </SectionWrapper>
  )
}

function ReferencesCarousel() {
  return (
    <SectionWrapper bgAlt id="references">
      <div className="text-center mb-12">
        <span className="text-accent-gold font-semibold text-sm uppercase tracking-wider">
          Références
        </span>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-heading font-bold text-secondary mt-2">
          Ils nous font confiance
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
        {references.map((ref) => (
          <div
            key={ref}
            className="bg-white rounded-lg px-6 py-4 shadow-sm border text-center min-w-[140px]"
          >
            <span className="text-sm font-semibold text-secondary">{ref}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

function TestimonialsCarousel() {
  return (
    <SectionWrapper id="temoignages">
      <div className="text-center mb-12">
        <span className="text-accent-gold font-semibold text-sm uppercase tracking-wider">
          Témoignages
        </span>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-heading font-bold text-secondary mt-2">
          Ce que disent nos clients
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent-gold text-accent-gold" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
              &ldquo;{t.content}&rdquo;
            </p>
            <div>
              <p className="font-semibold text-secondary text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">
                {t.position}, {t.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

function AgendaPreview() {
  return (
    <SectionWrapper bgAlt id="agenda-preview">
      <div className="text-center mb-12">
        <span className="text-accent-gold font-semibold text-sm uppercase tracking-wider">
          Agenda
        </span>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-heading font-bold text-secondary mt-2">
          Prochaines sessions
        </h2>
      </div>
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        {[
          { code: 'FIN-101', title: 'Analyse financière approfondie', date: '15-17 Sep 2026', places: 8, price: '8 500 DH' },
          { code: 'CDG-201', title: 'Tableaux de bord de gestion', date: '22-24 Sep 2026', places: 12, price: '7 500 DH' },
          { code: 'AUD-301', title: 'Audit interne avancé', date: '6-8 Oct 2026', places: 5, price: '9 000 DH' },
        ].map((session) => (
          <div key={session.code} className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors">
            <div className="flex-1 min-w-0">
              <span className="text-xs font-semibold text-accent-gold">{session.code}</span>
              <h3 className="font-heading font-semibold text-secondary">{session.title}</h3>
              <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{session.date}</span>
                <span className="flex items-center gap-1"><Users className="h-3 w-3" />{session.places} places</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-secondary whitespace-nowrap">{session.price}</span>
              <Link
                href="/agenda"
                className="bg-primary text-white text-sm px-4 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors whitespace-nowrap"
              >
                Je m&apos;inscris
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link
          href="/agenda"
          className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-primary transition-colors"
        >
          Voir tout l&apos;agenda <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </SectionWrapper>
  )
}

function CTASection() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-heading font-bold mb-4">
          Prêt à transformer votre organisation ?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Contactez nos experts dès aujourd&apos;hui pour un diagnostic gratuit et personnalisé.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Demander un diagnostic gratuit
          </Link>
          <a
            href="tel:+212522350704"
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
          >
            +212 5 22 35 07 04
          </a>
        </div>
      </div>
    </section>
  )
}

function FAQAccordion() {
  return (
    <SectionWrapper id="faq">
      <div className="text-center mb-12">
        <span className="text-accent-gold font-semibold text-sm uppercase tracking-wider">
          FAQ
        </span>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-heading font-bold text-secondary mt-2">
          Questions fréquentes
        </h2>
      </div>
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, i) => (
          <details key={i} className="group bg-white rounded-xl border overflow-hidden">
            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-secondary hover:bg-gray-50 transition-colors [&::-webkit-details-marker]:hidden">
              <span>{faq.q}</span>
              <ChevronRight className="h-4 w-4 text-accent-gold group-open:rotate-90 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <ServicesGrid />
      <FormationsGrid />
      <ReferencesCarousel />
      <TestimonialsCarousel />
      <AgendaPreview />
      <CTASection />
      <FAQAccordion />
    </>
  )
}

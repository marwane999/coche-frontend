'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-sm ${star <= rating ? 'text-[#c9a84c]' : 'text-[#e2e8f0]'}`}
        >
          ★
        </span>
      ))}
    </div>
  )
}

const testimonials = [
  {
    name: 'Karim Benjelloun',
    position: 'Directeur Financier',
    company: 'BMCE Bank',
    content: "Une formation d'excellence qui a transformé notre approche du contrôle de gestion. Les formateurs sont des experts de terrain qui savent adapter leur pédagogie aux besoins réels de l'entreprise.",
    rating: 5,
    photo: 'http://coachconsulting.ma/images/testimonials/karim.jpg',
  },
  {
    name: 'Najat El Fassi',
    position: 'DRH',
    company: 'Maroc Telecom',
    content: "Coach Consulting nous accompagne depuis 3 ans dans notre stratégie RH. Leur approche sur-mesure et leur professionnalisme font la différence. Je recommande vivement.",
    rating: 5,
    photo: 'http://coachconsulting.ma/images/testimonials/najat.jpg',
  },
  {
    name: 'Omar Tazi',
    position: 'CEO',
    company: 'NMT Group',
    content: "Le coaching individuel m'a permis de développer un leadership plus authentique et efficace. Un investissement qui a changé ma manière de manager.",
    rating: 5,
    photo: 'http://coachconsulting.ma/images/testimonials/omar.jpg',
  },
  {
    name: 'Fatima Zahra Alaoui',
    position: 'Responsable Audit',
    company: 'CDG',
    content: "Formation certifiante en audit très complète. Les exercices pratiques et les études de cas étaient directement applicables à notre quotidien.",
    rating: 4,
    photo: 'http://coachconsulting.ma/images/testimonials/fatima.jpg',
  },
  {
    name: 'Youssef Berrada',
    position: 'Directeur Commercial',
    company: 'Lafarge Maroc',
    content: "Le programme de formation commerciale a boosté les performances de mon équipe de 35% en six mois. Un résultat concret et mesurable.",
    rating: 5,
    photo: 'http://coachconsulting.ma/images/testimonials/youssef.jpg',
  },
  {
    name: 'Amina Sekkouri',
    position: 'Responsable Formation',
    company: 'ONCF',
    content: "Un partenaire de confiance pour la formation continue de nos collaborateurs. La qualité pédagogique et l'organisation logistique sont irréprochables.",
    rating: 5,
    photo: 'http://coachconsulting.ma/images/testimonials/amina.jpg',
  },
]

export function TestimonialsCarousel() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'start',
  })

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-[#0e3d68] text-center mb-12"
        >
          Ce que disent nos clients
        </motion.h2>
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] pl-4"
              >
                <div className="bg-[#f8f9fa] rounded-xl p-6 md:p-8 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-[#c9a84c] mb-4" />
                  <p className="text-[#4a5568] leading-relaxed flex-1">&ldquo;{t.content}&rdquo;</p>
                  <div className="mt-4">
                    <StarRating rating={t.rating} />
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#e2e8f0]">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#e2e8f0] shrink-0">
                        <Image
                          src={t.photo}
                          alt={t.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-[#0e3d68]">{t.name}</p>
                        <p className="text-xs text-[#4a5568]">{t.position}, {t.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

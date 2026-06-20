'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Coaching Individuel',
    description: 'Accompagnement personnalisé pour développer votre potentiel et atteindre vos objectifs professionnels.',
    image: 'http://coachconsulting.ma/images/content/coaching_individuel.jpg',
    href: '/services/coaching-individuel',
  },
  {
    title: 'Coaching en entreprise',
    description: 'Programmes de coaching collectif pour renforcer la cohésion et la performance de vos équipes.',
    image: 'http://coachconsulting.ma/images/content/coaching_entreprise.jpg',
    href: '/services/coaching-entreprise',
  },
  {
    title: 'Formations',
    description: 'Formations intra et inter-entreprises dans les domaines de la finance, management et RH.',
    image: 'http://coachconsulting.ma/images/content/formations.jpg',
    href: '/formations',
  },
  {
    title: 'Accompagnement',
    description: 'Conseil et accompagnement sur-mesure pour vos projets de transformation et de développement.',
    image: 'http://coachconsulting.ma/images/content/accompagnement.jpg',
    href: '/services/accompagnement',
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-[#0e3d68] text-center mb-12"
        >
          Nos Prestations
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item}>
              <Link
                href={service.href}
                className="group block bg-white rounded-xl shadow-sm border hover:shadow-md transition-all overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-heading font-bold text-[#0e3d68]">{service.title}</h3>
                  <p className="mt-2 text-sm text-[#4a5568] line-clamp-2">{service.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#d73300] group-hover:gap-2 transition-all">
                    En savoir plus <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

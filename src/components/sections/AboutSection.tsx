'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Lock, Briefcase, Award, Ruler } from 'lucide-react'

const values = [
  { icon: Lock, title: 'Confidentialité' },
  { icon: Briefcase, title: 'Professionnalisme' },
  { icon: Award, title: 'Excellence' },
  { icon: Ruler, title: 'Rigueur' },
]

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden"
          >
            <Image
              src="/images/content/slide_01.jpg"
              alt="Coach Consulting"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0e3d68] leading-tight">
              Un cabinet-conseil fondé par des experts de grands groupes internationaux
            </h2>
            <p className="mt-6 text-[#4a5568] leading-relaxed">
              Coach Consulting est un cabinet marocain spécialisé en management, formation et coaching.
              Depuis notre création à Casablanca, nous accompagnons les talents et les organisations
              dans leur transformation. Nos experts, issus de grands groupes internationaux, allient
              rigueur académique et expérience terrain pour offrir des solutions sur-mesure qui
              répondent aux enjeux spécifiques du marché marocain.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {values.map((value) => (
                <div key={value.title} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#d73300]/10 flex items-center justify-center shrink-0">
                    <value.icon className="w-5 h-5 text-[#d73300]" />
                  </div>
                  <span className="text-sm font-medium text-[#0e3d68]">{value.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

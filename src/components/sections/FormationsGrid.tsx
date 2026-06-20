'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BarChart3, Calculator, SearchCheck, Target, CreditCard, Users, UserCheck, Megaphone } from 'lucide-react'

const domains = [
  { title: 'Finance', icon: BarChart3, code: 'FIN', color: '#d73300' },
  { title: 'Contrôle de gestion', icon: Calculator, code: 'CDG', color: '#0e3d68' },
  { title: 'Audit', icon: SearchCheck, code: 'AUD', color: '#c9a84c' },
  { title: 'Stratégie', icon: Target, code: 'STR', color: '#d73300' },
  { title: 'Credit Management', icon: CreditCard, code: 'CRM', color: '#0e3d68' },
  { title: 'Ressources Humaines', icon: Users, code: 'RH', color: '#c9a84c' },
  { title: 'Coaching', icon: UserCheck, code: 'COA', color: '#d73300' },
  { title: 'Commercial', icon: Megaphone, code: 'COM', color: '#0e3d68' },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export function FormationsGrid() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-[#0e3d68] text-center mb-12"
        >
          Nos Domaines de Formation
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {domains.map((domain) => (
            <motion.div key={domain.code} variants={item}>
              <Link
                href={`/formations#${domain.code.toLowerCase()}`}
                className="group flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-all text-center"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${domain.color}10` }}
                >
                  <domain.icon className="w-6 h-6" style={{ color: domain.color }} />
                </div>
                <h3 className="text-sm font-heading font-bold text-[#0e3d68]">{domain.title}</h3>
                <span className="text-xs text-[#4a5568] font-mono bg-[#f8f9fa] px-2 py-0.5 rounded">
                  {domain.code}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

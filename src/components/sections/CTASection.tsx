'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarCheck, Download } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-[#0e3d68] text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Prêt à transformer votre organisation ?
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Réservez votre séance de conseil gratuite dès aujourd&apos;hui
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="h-12 px-6 rounded-lg font-medium transition-all active:scale-95 inline-flex items-center gap-2 bg-[#d73300] text-white hover:bg-[#b02a00]"
            >
              <CalendarCheck className="w-4 h-4" />
              Prendre rendez-vous
            </Link>
            <Link
              href="/pdf/plaquettes.pdf"
              target="_blank"
              className="h-12 px-6 rounded-lg font-medium transition-all active:scale-95 inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white/10"
            >
              <Download className="w-4 h-4" />
              Télécharger notre brochure
            </Link>
          </div>
          <div className="mt-6">
            <span className="inline-flex items-center gap-2 text-xs font-medium bg-white/10 text-white/80 px-3 py-1.5 rounded-full border border-[#c9a84c]/30">
              <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
              Places limitées &ndash; 12 participants maximum par session
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

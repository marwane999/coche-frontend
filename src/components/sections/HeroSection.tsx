'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const stagger = {
  animate: {
    transition: { staggerChildren: 0.15 },
  },
}

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      <Image
        src="http://coachconsulting.ma/images/content/images1slider.jpg"
        alt="Coach Consulting"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center md:items-start text-center md:text-left max-w-3xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Depuis 2010, nous transformons les talents marocains en leaders performants
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl"
          >
            Cabinet-conseil en management, formation et coaching &ndash; Casablanca, Maroc
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/formations"
              className="h-12 px-6 rounded-lg font-medium transition-all active:scale-95 inline-flex items-center gap-2 bg-[#d73300] text-white hover:bg-[#b02a00]"
            >
              Découvrez nos formations
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="tel:+212522350704"
              className="h-12 px-6 rounded-lg font-medium transition-all active:scale-95 inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white/10"
            >
              <Phone className="w-4 h-4" />
              Parlez à un expert
            </Link>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center gap-6 text-white/70 text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
              100+ entreprises accompagnées
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
              4.9/5 ★
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
              Certifié ICF
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

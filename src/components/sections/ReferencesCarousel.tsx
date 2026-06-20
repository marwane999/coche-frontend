'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'

const logos = [
  { name: 'BMCE Bank', src: 'http://coachconsulting.ma/images/references/bmce.png' },
  { name: 'Attijariwafa Bank', src: 'http://coachconsulting.ma/images/references/attijari.png' },
  { name: 'OCP', src: 'http://coachconsulting.ma/images/references/ocp.png' },
  { name: 'Maroc Telecom', src: 'http://coachconsulting.ma/images/references/maroc_telecom.png' },
  { name: 'CDG', src: 'http://coachconsulting.ma/images/references/cdg.png' },
  { name: 'ONCF', src: 'http://coachconsulting.ma/images/references/oncf.png' },
  { name: 'Lafarge Maroc', src: 'http://coachconsulting.ma/images/references/lafarge.png' },
  { name: 'CIH Bank', src: 'http://coachconsulting.ma/images/references/cih.png' },
  { name: 'Royal Air Maroc', src: 'http://coachconsulting.ma/images/references/ram.png' },
  { name: 'Bureau Veritas', src: 'http://coachconsulting.ma/images/references/bureau_veritas.png' },
  { name: 'Managem', src: 'http://coachconsulting.ma/images/references/managem.png' },
  { name: 'NMT Group', src: 'http://coachconsulting.ma/images/references/nmt.png' },
]

export function ReferencesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
  })

  const [isPaused, setIsPaused] = useState(false)

  const autoplay = useCallback(() => {
    if (!emblaApi || isPaused) return
    const timer = setInterval(() => {
      emblaApi.scrollNext()
    }, 2500)
    return () => clearInterval(timer)
  }, [emblaApi, isPaused])

  useEffect(() => {
    const cleanup = autoplay()
    return () => cleanup?.()
  }, [autoplay])

  return (
    <section className="py-16 md:py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-[#0e3d68] text-center mb-12"
        >
          Ils nous font confiance
        </motion.h2>
        <div
          ref={emblaRef}
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex-[0_0_50%] min-w-0 md:flex-[0_0_25%] lg:flex-[0_0_16.666%] pl-4"
              >
                <div className="h-16 md:h-20 bg-white rounded-xl border p-4 flex items-center justify-center">
                  <span className="text-secondary font-semibold text-sm text-center leading-tight">{logo.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

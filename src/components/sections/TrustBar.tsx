'use client'

import { useRef, useState, useEffect } from 'react'
import { useInView, animate } from 'framer-motion'
import { Star, Building, ThumbsUp } from 'lucide-react'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (inView) {
      const controls = animate(0, target, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: (v) => setCount(Math.round(v)),
      })
      return controls.stop
    }
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

const items = [
  { icon: Star, target: 15, suffix: '+ ans', label: "d'expertise" },
  { icon: Building, target: 100, suffix: '+', label: 'entreprises accompagnées' },
  { icon: ThumbsUp, target: 98, suffix: '%', label: 'satisfaction clients' },
]

export function TrustBar() {
  return (
    <section className="bg-[#0e3d68] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-4 justify-center sm:justify-start">
              <item.icon className="w-8 h-8 text-[#c9a84c] shrink-0" />
              <div>
                <p className="text-2xl md:text-3xl font-bold font-heading">
                  <Counter target={item.target} suffix={item.suffix} />
                </p>
                <p className="text-sm text-white/70">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

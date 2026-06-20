'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'

const schema = z.object({
  email: z
    .string()
    .min(1, 'Email requis')
    .email('Veuillez entrer un email valide'),
})

type FormData = z.infer<typeof schema>

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (_data: FormData) => {
    setSubmitted(true)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#0e3d68]">
            Restez informé
          </h3>
          <p className="mt-3 text-[#4a5568]">
            Recevez notre catalogue 2026 et le guide offert : Les 7 clés du management performant
          </p>

          {submitted ? (
            <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
              <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto" />
              <p className="mt-2 font-medium text-green-800">Merci pour votre inscription !</p>
              <p className="text-sm text-green-600">Vous recevrez bientôt notre catalogue par email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    {...register('email')}
                    className={`w-full h-12 px-4 rounded-lg border bg-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#d73300]/50 ${
                      errors.email ? 'border-red-400' : 'border-[#e2e8f0]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500 text-left">{errors.email.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 px-6 rounded-lg font-medium transition-all active:scale-95 inline-flex items-center gap-2 bg-[#d73300] text-white hover:bg-[#b02a00] disabled:opacity-50 shrink-0 justify-center"
                >
                  <Send className="w-4 h-4" />
                  S&apos;inscrire
                </button>
              </div>
              <p className="mt-3 text-xs text-[#a0aec0]">
                Nous respectons votre vie privée
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

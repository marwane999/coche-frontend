'use client'

import { useState } from 'react'
import Link from 'next/link'
import SectionWrapper from '@/components/shared/SectionWrapper'
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    message: '',
    gdpr_accepted: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const updateField = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <>
      <section className="bg-gradient-to-br from-secondary to-secondary-dark text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-bold mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Une question, un projet ? Notre équipe est à votre écoute pour vous accompagner.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-heading font-bold text-secondary mb-6">
              Envoyez-nous un message
            </h2>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-heading font-semibold text-green-800 text-lg mb-2">
                  Message envoyé avec succès !
                </h3>
                <p className="text-green-600 text-sm">
                  Notre équipe vous recontactera dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">
                    Société
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => updateField('company', e.target.value)}
                    className="w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-1">
                      Nom complet <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      className="w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-1">
                      Téléphone <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className="w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    className="w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="gdpr"
                    required
                    checked={formData.gdpr_accepted}
                    onChange={(e) => updateField('gdpr_accepted', e.target.checked)}
                    className="mt-1"
                  />
                  <label htmlFor="gdpr" className="text-xs text-muted-foreground">
                    J&apos;accepte que mes données soient traitées conformément à la politique de
                    confidentialité de Coach Consulting. <span className="text-primary">*</span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  <Send className="h-4 w-4" />
                  Envoyer le message
                </button>
              </form>
            )}
          </div>

          <div>
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-heading font-bold text-secondary mb-6">
              Nos coordonnées
            </h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-secondary">Adresse</p>
                  <p className="text-sm text-muted-foreground">
                    82, Bd Abdelmoumen, Casablanca 20250, Maroc
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-secondary">Téléphone</p>
                  <a
                    href="tel:+212522350704"
                    className="text-sm text-primary font-semibold hover:underline"
                  >
                    +212 5 22 35 07 04
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-secondary">Email</p>
                  <a
                    href="mailto:contact@coachconsulting.ma"
                    className="text-sm text-primary font-semibold hover:underline"
                  >
                    contact@coachconsulting.ma
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-secondary">Horaires</p>
                  <p className="text-sm text-muted-foreground">
                    Lun - Ven : 8h30 - 12h30 | 13h30 - 17h30
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary text-white rounded-xl p-6 mb-8">
              <p className="font-heading font-semibold mb-2">Appelez-nous directement</p>
              <a
                href="tel:+212522350704"
                className="text-2xl font-bold text-accent-gold hover:underline"
              >
                +212 5 22 35 07 04
              </a>
              <p className="text-sm text-gray-300 mt-1">Un expert vous répond du lundi au vendredi.</p>
            </div>

            <div className="rounded-xl overflow-hidden border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0!2d-7.6560!3d33.5820!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzU1LjIiTiA3wrAzOScyMS42Ilc!5e0!3m2!1sfr!2sma!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Coach Consulting Casablanca"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}

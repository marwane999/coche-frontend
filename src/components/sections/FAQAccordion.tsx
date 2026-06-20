'use client'

import { motion } from 'framer-motion'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

const faqItems = [
  {
    question: 'Quels types de formations proposez-vous ?',
    answer: "Nous proposons des formations intra-entreprise (sur-mesure pour votre organisation) et inter-entreprises (en groupe avec d'autres professionnels). Nos domaines couvrent la finance, le contrôle de gestion, l'audit, la stratégie, le credit management, les RH, le coaching et le commercial.",
  },
  {
    question: 'Comment se déroule une formation sur-mesure ?',
    answer: "Notre processus en 4 étapes : 1) Audit de vos besoins, 2) Conception pédagogique adaptée, 3) Animation par des experts métier, 4) Évaluation à chaud et à froid des acquis.",
  },
  {
    question: 'Quels sont les tarifs de vos formations ?',
    answer: "Nos tarifs varient selon le format (intra/inter), la durée et le nombre de participants. Contactez-nous via notre formulaire ou au +212 522 350 704 pour un devis personnalisé et sans engagement.",
  },
  {
    question: 'Proposez-vous des formations certifiantes ?',
    answer: "Oui, plusieurs de nos formations sont certifiantes et éligibles au CPF. Nous délivrons des attestations de formation reconnues par les organismes de certification aux normes ISO et ICF.",
  },
  {
    question: "Comment puis-je m'inscrire à une formation ?",
    answer: "Vous pouvez vous inscrire en ligne via notre page formations, par téléphone au +212 522 350 704, ou par email à contact@coachconsulting.ma. Notre équipe vous confirme votre place sous 48h.",
  },
  {
    question: 'Quelle est la différence entre coaching et formation ?',
    answer: "Le coaching est un accompagnement personnalisé et ciblé sur des objectifs spécifiques de développement. La formation transmet des connaissances et compétences structurées à un groupe. Les deux sont complémentaires et adaptés selon vos besoins.",
  },
]

export function FAQAccordion() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <section className="py-16 md:py-24 bg-[#f8f9fa]">
      <div className="max-w-3xl mx-auto px-4">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-[#0e3d68] text-center mb-12"
        >
          Questions fréquentes
        </motion.h2>
        <Accordion.Root
          type="single"
          collapsible
          className="space-y-3"
        >
          {faqItems.map((item) => (
            <Accordion.Item
              key={item.question}
              value={item.question}
              className="bg-white rounded-xl shadow-sm border overflow-hidden"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between px-6 py-4 text-left font-medium text-[#0e3d68] transition-all">
                  {item.question}
                  <ChevronDown className="w-4 h-4 text-[#c9a84c] shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-4 text-sm text-[#4a5568] leading-relaxed">
                {item.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  )
}

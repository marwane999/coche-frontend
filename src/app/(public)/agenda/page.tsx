'use client'

import { useState } from 'react'
import Link from 'next/link'
import SectionWrapper from '@/components/shared/SectionWrapper'
import { Calendar, Users, MapPin, Filter, Search, ChevronDown } from 'lucide-react'

const domaines = [
  'Tous',
  'Finance',
  'Contrôle de gestion',
  'Audit',
  'Stratégie',
  'Credit Management',
  'Ressources Humaines',
  'Coaching',
  'Commercial',
]

const sessions = [
  {
    domaine: 'Finance',
    code: 'FIN-101',
    seminaire: 'Analyse financière approfondie',
    date: '15-17 Sep 2026',
    places: 8,
    prix: '8 500 DH',
    badge: 'Early Bird' as const,
  },
  {
    domaine: 'Contrôle de gestion',
    code: 'CDG-201',
    seminaire: 'Tableaux de bord de gestion',
    date: '22-24 Sep 2026',
    places: 12,
    prix: '7 500 DH',
    badge: null,
  },
  {
    domaine: 'Audit',
    code: 'AUD-301',
    seminaire: 'Audit interne avancé',
    date: '6-8 Oct 2026',
    places: 0,
    prix: '9 000 DH',
    badge: 'Complet' as const,
  },
  {
    domaine: 'Stratégie',
    code: 'STR-101',
    seminaire: 'Business plan & stratégie financière',
    date: '13-15 Oct 2026',
    places: 10,
    prix: '8 500 DH',
    badge: 'Nouveau' as const,
  },
  {
    domaine: 'Credit Management',
    code: 'CRM-201',
    seminaire: 'Credit management & recouvrement',
    date: '20-22 Oct 2026',
    places: 6,
    prix: '7 000 DH',
    badge: 'Early Bird' as const,
  },
  {
    domaine: 'Ressources Humaines',
    code: 'RH-101',
    seminaire: 'GPEC & gestion des talents',
    date: '27-29 Oct 2026',
    places: 15,
    prix: '7 500 DH',
    badge: null,
  },
  {
    domaine: 'Coaching',
    code: 'COA-201',
    seminaire: "Coaching d'équipe & management",
    date: '3-5 Nov 2026',
    places: 8,
    prix: '8 000 DH',
    badge: 'Nouveau' as const,
  },
  {
    domaine: 'Commercial',
    code: 'COM-101',
    seminaire: 'Techniques de vente avancées',
    date: '10-12 Nov 2026',
    places: 0,
    prix: '7 500 DH',
    badge: 'Complet' as const,
  },
]

const badgeStyles = {
  'Early Bird': 'bg-green-100 text-green-700',
  Complet: 'bg-red-100 text-red-700',
  Nouveau: 'bg-blue-100 text-blue-700',
}

export default function AgendaPage() {
  const [selectedDomaine, setSelectedDomaine] = useState('Tous')
  const [search, setSearch] = useState('')

  const filtered = sessions.filter((s) => {
    const matchDomaine = selectedDomaine === 'Tous' || s.domaine === selectedDomaine
    const matchSearch =
      !search ||
      s.seminaire.toLowerCase().includes(search.toLowerCase()) ||
      s.code.toLowerCase().includes(search.toLowerCase())
    return matchDomaine && matchSearch
  })

  return (
    <>
      <section className="bg-gradient-to-br from-secondary to-secondary-dark text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-bold mb-4">
            Planning des formations Inter-entreprises
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Consultez nos prochaines sessions de formation en inter-entreprise et réservez votre place.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Rechercher un séminaire..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <select
              value={selectedDomaine}
              onChange={(e) => setSelectedDomaine(e.target.value)}
              className="pl-10 pr-8 py-2.5 border rounded-lg text-sm appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              {domaines.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        <div className="hidden lg:block bg-white rounded-xl border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-muted text-left">
                <th className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Domaine</th>
                <th className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Code</th>
                <th className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Séminaire</th>
                <th className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Date</th>
                <th className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Places</th>
                <th className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Prix</th>
                <th className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => (
                <tr key={s.code} className="border-t hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-sm">
                    <span className="text-xs font-semibold text-accent-gold">{s.domaine}</span>
                  </td>
                  <td className="px-4 py-3 text-sm font-mono text-muted-foreground">{s.code}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-secondary">{s.seminaire}</span>
                      {s.badge && (
                        <span
                          className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                            badgeStyles[s.badge]
                          }`}
                        >
                          {s.badge}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" /> {s.date}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-sm font-medium ${
                        s.places === 0 ? 'text-red-600' : s.places <= 5 ? 'text-amber-600' : 'text-muted-foreground'
                      }`}
                    >
                      {s.places === 0 ? 'Complet' : `${s.places} places`}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm font-bold text-secondary">{s.prix}</td>
                  <td className="px-4 py-3">
                    <Link
                      href="/contact"
                      className={`text-sm font-semibold px-4 py-2 rounded-lg transition-colors ${
                        s.places === 0
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-primary text-white hover:bg-primary-dark'
                      }`}
                    >
                      Je m&apos;inscris
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <p className="text-center py-8 text-muted-foreground">Aucune session trouvée.</p>
          )}
        </div>

        <div className="lg:hidden space-y-4">
          {filtered.map((s) => (
            <div key={s.code} className="bg-white rounded-xl border p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <span className="text-xs font-semibold text-accent-gold">{s.domaine}</span>
                  <h3 className="font-heading font-semibold text-secondary">{s.seminaire}</h3>
                </div>
                {s.badge && (
                  <span
                    className={`text-[10px] font-semibold px-1.5 py-0.5 rounded whitespace-nowrap ${
                      badgeStyles[s.badge]
                    }`}
                  >
                    {s.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                <span className="font-mono">{s.code}</span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {s.date}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-3 w-3" />{' '}
                  {s.places === 0 ? 'Complet' : `${s.places} places`}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-secondary">{s.prix}</span>
                <Link
                  href="/contact"
                  className={`text-sm font-semibold px-4 py-2 rounded-lg transition-colors ${
                    s.places === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-primary text-white hover:bg-primary-dark'
                  }`}
                >
                  Je m&apos;inscris
                </Link>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-center py-8 text-muted-foreground">Aucune session trouvée.</p>
          )}
        </div>
      </SectionWrapper>
    </>
  )
}

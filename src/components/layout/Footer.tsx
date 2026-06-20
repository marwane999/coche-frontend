import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Linkedin, Youtube } from 'lucide-react'

const domaines = [
  { label: 'Finance', href: '/formations#finance' },
  { label: 'Contrôle de gestion', href: '/formations#controle-de-gestion' },
  { label: 'Audit', href: '/formations#audit' },
  { label: 'Stratégie', href: '/formations#strategie' },
  { label: 'Credit Management', href: '/formations#credit-management' },
  { label: 'Ressources Humaines', href: '/formations#rh' },
  { label: 'Coaching', href: '/formations#coaching' },
  { label: 'Commercial', href: '/formations#commercial' },
]

const prestations = [
  { label: 'Accompagnement', href: '/accompagnement' },
  { label: 'Recrutement', href: '/recrutement' },
  { label: 'Coaching', href: '/coaching' },
]

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Image
              src="/images/logo.png"
              alt="Coach Consulting"
              width={180}
              height={60}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              Coach Consulting est votre partenaire de confiance pour la formation professionnelle,
              le conseil en management, le coaching et le recrutement au Maroc. Forts de notre
              expertise, nous accompagnons les entreprises vers l&apos;excellence.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Domaines formations</h3>
            <ul className="space-y-2">
              {domaines.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-accent-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Prestations</h3>
            <ul className="space-y-2">
              {prestations.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-accent-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent-gold" />
                <span>82, Bd Abdelmoumen, Casablanca 20250, Maroc</span>
              </li>
              <li>
                <a
                  href="tel:+212522350704"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-accent-gold transition-colors"
                >
                  <Phone className="h-4 w-4 text-accent-gold" />
                  +212 5 22 35 07 04
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@coachconsulting.ma"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-accent-gold transition-colors"
                >
                  <Mail className="h-4 w-4 text-accent-gold" />
                  contact@coachconsulting.ma
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.linkedin.com/company/coachconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-accent-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@coachconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-accent-gold transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-center text-sm text-gray-400">
            &copy; 2026 Coach Consulting. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

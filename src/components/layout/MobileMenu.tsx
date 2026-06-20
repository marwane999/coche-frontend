'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X, Phone } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/formations', label: 'Formations' },
  { href: '/accompagnement', label: 'Accompagnement' },
  { href: '/recrutement', label: 'Recrutement' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/agenda', label: 'Agenda' },
  { href: '/references', label: 'Références' },
  { href: '/contact', label: 'Contact' },
]

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const pathname = usePathname()

  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
        <Dialog.Content className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-xl flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-heading text-lg font-semibold text-secondary">Menu</span>
            <Dialog.Close className="p-2 text-secondary hover:text-primary">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href)
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-secondary hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="p-4 border-t space-y-3">
            <a
              href="tel:+212522350704"
              className="flex items-center justify-center gap-2 w-full py-3 bg-secondary text-white rounded-lg font-medium hover:bg-secondary-light transition-colors"
            >
              <Phone className="h-4 w-4" />
              +212 5 22 35 07 04
            </a>
            <Link
              href="/contact"
              className="block w-full text-center py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Devis gratuit
            </Link>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

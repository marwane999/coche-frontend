import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Coach Consulting – Votre partenaire excellence en management, formation et coaching',
  description:
    "Coach Consulting vous accompagne dans la formation professionnelle, le conseil en management, le coaching, le recrutement et l'accompagnement des entreprises au Maroc.",
  openGraph: {
    title: 'Coach Consulting – Votre partenaire excellence en management, formation et coaching',
    description:
      "Coach Consulting vous accompagne dans la formation professionnelle, le conseil en management, le coaching, le recrutement et l'accompagnement des entreprises au Maroc.",
    url: 'https://coachconsulting.ma',
    siteName: 'Coach Consulting',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

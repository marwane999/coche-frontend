'use client'

import { Phone } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/212522350704"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors animate-pulse"
      aria-label="WhatsApp"
    >
      <Phone className="h-6 w-6" />
    </a>
  )
}

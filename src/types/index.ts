export interface Formation {
  id: number
  slug: string
  title: string
  description: string
  category: string
  code: string
  duration: number
  price: number
  program: string[]
  image_url: string | null
  published: boolean
}

export interface AgendaSession {
  id: number
  formation_id: number
  formation?: Formation
  start_date: string
  end_date: string
  location: string
  places_total: number
  places_remaining: number
  early_bird_price: number | null
  is_active: boolean
}

export interface Reference {
  id: number
  name: string
  logo_url: string | null
  category: string
  order: number
}

export interface Testimonial {
  id: number
  client_name: string
  client_position: string
  client_company: string
  content: string
  photo_url: string | null
  rating: number
}

export interface ContactForm {
  company?: string
  name: string
  phone: string
  email: string
  message: string
  consent: boolean
  gdpr_accepted: boolean
}

export interface FAQItem {
  id: number
  question: string
  answer: string
  order: number
}

export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  cover_image: string | null
  author: string
  published_at: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

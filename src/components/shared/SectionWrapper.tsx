import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  bgAlt?: boolean
  id?: string
}

export default function SectionWrapper({
  children,
  className,
  bgAlt,
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        bgAlt && 'bg-muted',
        className
      )}
    >
      <div className="container mx-auto max-w-7xl px-4">{children}</div>
    </section>
  )
}

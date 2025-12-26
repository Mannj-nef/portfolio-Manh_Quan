import { Mail, Phone, Github } from 'lucide-react'

export function Contact({ dict }: { dict: Record<string, any> }) {
  return (
    <section id="contact" className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-12 text-3xl font-bold tracking-tight">
          {dict.title}
        </h2>
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
          <a
            href="mailto:mannjneff@gmail.com"
            className="group flex flex-col items-center gap-3 transition-colors hover:text-primary"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background shadow-sm transition-transform group-hover:scale-110">
              <Mail className="h-6 w-6" />
            </div>
            <span className="font-medium">mannjneff@gmail.com</span>
          </a>
          <a
            href="tel:0985953178"
            className="group flex flex-col items-center gap-3 transition-colors hover:text-primary"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background shadow-sm transition-transform group-hover:scale-110">
              <Phone className="h-6 w-6" />
            </div>
            <span className="font-medium">0985953178</span>
          </a>
          <a
            href="https://github.com/Mannj-nef"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-3 transition-colors hover:text-primary"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background shadow-sm transition-transform group-hover:scale-110">
              <Github className="h-6 w-6" />
            </div>
            <span className="font-medium">Mannj-nef</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export function Footer({ copyright }: { copyright?: string }) {
  const currentYear = new Date().getFullYear()
  const text = copyright
    ? copyright.replace('{year}', currentYear.toString())
    : `© ${currentYear} Vo Manh Quan. All rights reserved.`

  return (
    <footer className="bg-background py-8 border-t border-border">
      <div className="container mx-auto flex items-center justify-center">
        <p className="text-center text-sm text-muted-foreground">{text}</p>
      </div>
    </footer>
  )
}

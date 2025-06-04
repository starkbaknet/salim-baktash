interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto mb-6">{subtitle}</p>}
      <div className="w-16 h-1 bg-primary mx-auto"></div>
    </div>
  )
}

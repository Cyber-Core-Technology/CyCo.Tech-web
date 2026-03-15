import Badge from './Badge'

interface Props { tag: string; title: string; description: string }

export default function ServiceCard({ tag, title, description }: Props) {
  return (
    <article className="h-full p-6 rounded-2xl border border-[var(--border)]
                        bg-[var(--bg-card)] hover:border-[var(--border-mid)]
                        transition-all duration-200 group flex flex-col gap-3">
      <Badge>{tag}</Badge>
      <h3 className="text-[15px] font-semibold text-[var(--text)]
                     group-hover:text-[var(--accent)] transition-colors">
        {title}
      </h3>
      <p className="text-[13px] text-[var(--text-muted)] leading-relaxed flex-1">
        {description}
      </p>
    </article>
  )
}
import Badge from './Badge'

interface Props {
  tag: string
  title: string
  description: string
}

export default function ServiceCard({ tag, title, description }: Props) {
  return (
    <article className="p-6 rounded-xl border border-[var(--border)]
                        bg-[var(--bg-card)] hover:border-[var(--border-mid)]
                        transition-all duration-200 group">
      <Badge>{tag}</Badge>
      <h3 className="mt-3 mb-2 text-base font-semibold text-[var(--text)] group-hover:text-[var(--accent)]
                     transition-colors">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-[var(--text-muted)]">{description}</p>
    </article>
  )
}

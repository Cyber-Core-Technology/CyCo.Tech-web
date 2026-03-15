export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[10px] font-semibold uppercase tracking-wide
                     px-2 py-0.5 rounded
                     bg-[var(--badge-bg)] text-[var(--badge-text)]">
      {children}
    </span>
  )
}

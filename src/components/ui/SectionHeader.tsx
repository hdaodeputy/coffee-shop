type SectionHeaderProps = {
  title: string
  action?: { label: string; onClick: () => void }
  as?: 'h2' | 'h3' | 'h4'
  className?: string
}

export function SectionHeader({
  title,
  action,
  as: Tag = 'h2',
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`flex items-center justify-between mb-3 ${className}`}>
      <Tag className="text-h3 text-ink">{title}</Tag>
      {action && (
        <button
          type="button"
          onClick={action.onClick}
          className="text-body font-semibold text-brand min-h-11 px-1 flex items-center hover:text-brand-pressed active:text-brand-pressed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
        >
          {action.label}
        </button>
      )}
    </div>
  )
}

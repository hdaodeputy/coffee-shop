import type { ReactNode } from 'react'

type AttributeIconTileProps = {
  icon: ReactNode
  label?: string
  variant?: 'soft' | 'card'
  disabled?: boolean
}

type AttributeIconRowProps = {
  items: { icon: ReactNode; label: string }[]
  variant?: 'soft' | 'card'
}

export function AttributeIconTile({
  icon,
  label,
  variant = 'soft',
  disabled = false,
}: AttributeIconTileProps) {
  const variantClass = variant === 'soft' ? 'bg-brand-soft' : 'bg-surface-card shadow-card'

  return (
    <div
      aria-label={label}
      className={[
        'w-11 h-11 flex items-center justify-center rounded-md text-brand',
        variantClass,
        disabled ? 'opacity-50' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
    </div>
  )
}

export function AttributeIconRow({ items, variant = 'soft' }: AttributeIconRowProps) {
  return (
    <div className="flex gap-2">
      {items.map((item) => (
        <AttributeIconTile key={item.label} icon={item.icon} label={item.label} variant={variant} />
      ))}
    </div>
  )
}

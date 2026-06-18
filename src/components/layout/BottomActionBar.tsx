type BottomActionBarProps = {
  price: string
  priceLabel?: string
  ctaLabel: string
  onCta: () => void
  disabled?: boolean
}

export function BottomActionBar({
  price,
  priceLabel = 'Price',
  ctaLabel,
  onCta,
  disabled = false,
}: BottomActionBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="max-w-sm mx-auto px-4 py-4 bg-surface-card shadow-floating flex items-center gap-4">
        <div className="flex flex-col">
          <span className="text-caption text-muted">{priceLabel}</span>
          <span className="text-price text-brand">{price}</span>
        </div>
        <button
          type="button"
          onClick={onCta}
          disabled={disabled}
          className="flex-1 min-h-11 rounded-lg bg-brand text-button text-surface-card active:bg-brand-pressed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {ctaLabel}
        </button>
      </div>
    </div>
  )
}

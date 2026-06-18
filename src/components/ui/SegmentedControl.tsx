import { useRef } from 'react'

type Option<T extends string> = {
  value: T
  label: string
  disabled?: boolean
}

type SegmentedControlProps<T extends string> = {
  options: Option<T>[]
  value: T
  onChange: (v: T) => void
  appearance?: 'connected' | 'spaced'
  size?: 'sm' | 'md'
  disabled?: boolean
}

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  appearance = 'connected',
  size = 'md',
  disabled = false,
}: SegmentedControlProps<T>) {
  const groupRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent, optionValue: T) => {
    const enabledOptions = options.filter((o) => !o.disabled)
    const currentIndex = enabledOptions.findIndex((o) => o.value === optionValue)
    let nextIndex: number | null = null

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      nextIndex = (currentIndex + 1) % enabledOptions.length
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      nextIndex = (currentIndex - 1 + enabledOptions.length) % enabledOptions.length
    }

    if (nextIndex !== null) {
      const next = enabledOptions[nextIndex]
      onChange(next.value)
      const buttons = groupRef.current?.querySelectorAll<HTMLElement>('[role="radio"]')
      const globalIndex = options.findIndex((o) => o.value === next.value)
      buttons?.[globalIndex]?.focus()
    }
  }

  const textSize = size === 'sm' ? 'text-caption' : 'text-body'

  if (appearance === 'connected') {
    return (
      <div
        ref={groupRef}
        role="radiogroup"
        className={[
          'flex rounded-lg bg-brand-soft p-1 gap-1',
          disabled ? 'opacity-50 pointer-events-none' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {options.map((opt) => {
          const selected = opt.value === value
          const isDisabled = disabled || opt.disabled
          return (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={selected}
              aria-disabled={isDisabled}
              disabled={isDisabled}
              tabIndex={selected ? 0 : -1}
              onClick={() => !isDisabled && onChange(opt.value)}
              onKeyDown={(e) => handleKeyDown(e, opt.value)}
              className={[
                'flex-1 min-h-11 rounded-md transition-all',
                textSize,
                selected
                  ? 'bg-surface-card text-ink font-semibold shadow-card'
                  : 'bg-transparent text-muted font-medium',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {opt.label}
            </button>
          )
        })}
      </div>
    )
  }

  // appearance === 'spaced'
  return (
    <div
      ref={groupRef}
      role="radiogroup"
      className={[
        'flex gap-3',
        disabled ? 'opacity-50 pointer-events-none' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {options.map((opt) => {
        const selected = opt.value === value
        const isDisabled = disabled || opt.disabled
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-disabled={isDisabled}
            disabled={isDisabled}
            tabIndex={selected ? 0 : -1}
            onClick={() => !isDisabled && onChange(opt.value)}
            onKeyDown={(e) => handleKeyDown(e, opt.value)}
            className={[
              'flex-1 min-h-11 rounded-lg border transition-all text-ink',
              textSize,
              selected
                ? 'bg-brand-soft border-brand font-semibold'
                : 'bg-surface-card border-line font-medium',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}

type DividerProps = {
  orientation?: 'horizontal' | 'vertical'
  spacing?: 'none' | 'sm' | 'md'
  inset?: boolean
}

export function Divider({
  orientation = 'horizontal',
  spacing = 'md',
  inset = false,
}: DividerProps) {
  const isH = orientation === 'horizontal'

  const spacingClass = isH
    ? ({ none: '', sm: 'my-2', md: 'my-4' } as const)[spacing]
    : ({ none: '', sm: 'mx-2', md: 'mx-4' } as const)[spacing]

  if (isH) {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={['w-full border-t border-line', spacingClass, inset ? 'ml-4' : '']
          .filter(Boolean)
          .join(' ')}
      />
    )
  }

  return (
    <div
      role="separator"
      aria-orientation="vertical"
      className={['border-l border-line self-stretch', spacingClass]
        .filter(Boolean)
        .join(' ')}
    />
  )
}

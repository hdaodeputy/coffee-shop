import { useState, useRef, useLayoutEffect } from 'react'

type ExpandableTextProps = {
  children: string
  clampLines?: number
  moreLabel?: string
  lessLabel?: string
  defaultExpanded?: boolean
}

export function ExpandableText({
  children,
  clampLines = 3,
  moreLabel = 'Read More',
  lessLabel = 'Read Less',
  defaultExpanded = false,
}: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(defaultExpanded)
  const [needsToggle, setNeedsToggle] = useState(false)
  const textRef = useRef<HTMLParagraphElement>(null)

  useLayoutEffect(() => {
    const el = textRef.current
    if (!el) return
    setNeedsToggle(el.scrollHeight > el.clientHeight + 1)
  }, [children, clampLines])

  return (
    <div>
      <p
        ref={textRef}
        className="text-body text-muted"
        style={
          !expanded
            ? {
                display: '-webkit-box',
                WebkitLineClamp: clampLines,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }
            : undefined
        }
      >
        {children}
      </p>
      {needsToggle && (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((e) => !e)}
          className="mt-1 text-body font-semibold text-brand hover:text-brand-pressed active:text-brand-pressed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded min-h-11 flex items-center"
        >
          {expanded ? lessLabel : moreLabel}
        </button>
      )}
    </div>
  )
}

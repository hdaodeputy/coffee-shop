import type { ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'

type AppHeaderProps = {
  title?: string
  onBack?: () => void
  action?: ReactNode
}

export function AppHeader({ title, onBack, action }: AppHeaderProps) {
  return (
    <header className="flex items-center h-14 px-4 bg-surface-card">
      {onBack && (
        <button
          type="button"
          aria-label="Go back"
          onClick={onBack}
          className="w-11 h-11 flex items-center justify-center rounded-md text-ink active:bg-line focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      )}
      {title && (
        <h1 className="flex-1 text-h3 text-ink text-center">{title}</h1>
      )}
      <div className="w-11 h-11 flex items-center justify-center">
        {action}
      </div>
    </header>
  )
}

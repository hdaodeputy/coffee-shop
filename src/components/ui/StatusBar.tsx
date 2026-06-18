import { Battery, Wifi } from 'lucide-react'

export function StatusBar() {
  return (
    <div
      className="flex items-center justify-between px-4 h-11 bg-surface-page"
      aria-hidden="true"
    >
      <span className="text-caption font-semibold text-ink">9:41</span>
      <div className="flex items-center gap-2 text-ink">
        <svg
          className="w-4 h-3"
          viewBox="0 0 16 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M1 9a7 7 0 0114 0" />
          <path d="M4 9a4 4 0 018 0" />
          <path d="M7 9a1 1 0 012 0" />
        </svg>
        <Wifi className="w-4 h-4" />
        <Battery className="w-4 h-4" />
      </div>
    </div>
  )
}

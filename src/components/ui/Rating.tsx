import { Star } from 'lucide-react'

type RatingProps = {
  value: number
  count: number
}

export function Rating({ value, count }: RatingProps) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`Rating ${value} out of 5, ${count} reviews`}
    >
      <Star className="w-4 h-4 text-warning" fill="currentColor" aria-hidden="true" />
      <span className="text-body font-semibold text-ink">{value}</span>
      <span className="text-caption text-muted">({count})</span>
    </div>
  )
}

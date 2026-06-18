type SkeletonProps = {
  className?: string
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export function Skeleton({ className = '', rounded = 'md' }: SkeletonProps) {
  const roundedMap = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  }
  return (
    <div
      aria-hidden="true"
      className={`bg-line animate-pulse ${roundedMap[rounded]} ${className}`}
    />
  )
}

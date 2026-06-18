import { useState } from 'react'
import { Coffee } from 'lucide-react'

type ProductHeroProps = {
  src: string
  alt: string
  aspect?: '16/10' | '1/1' | '4/3'
  rounded?: 'lg' | 'xl'
}

const aspectClass: Record<string, string> = {
  '16/10': 'aspect-[16/10]',
  '1/1': 'aspect-square',
  '4/3': 'aspect-[4/3]',
}

const roundedClass: Record<string, string> = {
  lg: 'rounded-lg',
  xl: 'rounded-xl',
}

export function ProductHero({ src, alt, aspect = '16/10', rounded = 'xl' }: ProductHeroProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')

  return (
    <div
      className={`w-full overflow-hidden ${aspectClass[aspect]} ${roundedClass[rounded]} bg-line relative`}
    >
      {status === 'loading' && (
        <div className="absolute inset-0 bg-line animate-pulse" />
      )}

      {status === 'error' && (
        <div className="absolute inset-0 bg-brand-soft flex items-center justify-center">
          <Coffee className="w-12 h-12 text-brand opacity-60" />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
        className={[
          'w-full h-full object-cover transition-opacity duration-300',
          status === 'loaded' ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
      />
    </div>
  )
}

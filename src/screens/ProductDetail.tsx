import { useState } from 'react'
import { Heart } from 'lucide-react'
import { AppHeader } from '../components/layout/AppHeader'
import { BottomActionBar } from '../components/layout/BottomActionBar'
import { ProductHero } from '../components/product/ProductHero'
import { AttributeIconRow } from '../components/product/AttributeIconTile'
import { Divider } from '../components/ui/Divider'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ExpandableText } from '../components/ui/ExpandableText'
import { SegmentedControl } from '../components/ui/SegmentedControl'
import { Rating } from '../components/ui/Rating'
import { StatusBar } from '../components/ui/StatusBar'
import { Skeleton } from '../components/ui/Skeleton'
import type { ProductDetailData, SizeValue } from '../lib/mockProducts'
import { formatPrice } from '../lib/formatPrice'

type ProductDetailScreenProps = {
  product: ProductDetailData
  screenState?: 'loading' | 'error' | 'loaded'
  isFavorite?: boolean
  onBack: () => void
  onToggleFavorite: (id: string) => void
  onBuyNow: (id: string, size: string) => void
  onRetry?: () => void
}

export function ProductDetail({
  product,
  screenState = 'loaded',
  isFavorite = false,
  onBack,
  onToggleFavorite,
  onBuyNow,
  onRetry,
}: ProductDetailScreenProps) {
  const [selectedSize, setSelectedSize] = useState<SizeValue>('M')

  const selectedSizeOption = product.sizes.find((s) => s.value === selectedSize)
  const currentPrice = selectedSizeOption ? formatPrice(selectedSizeOption.price) : ''

  return (
    <div className="min-h-screen bg-surface-page flex flex-col">
      <StatusBar />

      <AppHeader
        title="Detail"
        onBack={onBack}
        action={
          <button
            type="button"
            aria-label={isFavorite ? 'Remove from favourites' : 'Add to favourites'}
            onClick={() => onToggleFavorite(product.id)}
            className="w-full h-full flex items-center justify-center rounded-md
                       active:bg-line focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <Heart
              className="w-5 h-5"
              fill={isFavorite ? 'var(--color-brand)' : 'none'}
              stroke={isFavorite ? 'var(--color-brand)' : 'currentColor'}
            />
          </button>
        }
      />

      {/* ── Loading state ── */}
      {screenState === 'loading' && (
        <div className="flex-1 overflow-y-auto px-4 pt-4 space-y-4 pb-8">
          <Skeleton className="w-full aspect-[16/10]" rounded="xl" />
          <div className="flex items-start justify-between gap-4 pt-4">
            <div className="flex-1 space-y-2">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-5 w-1/2" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="w-11 h-11" />
              <Skeleton className="w-11 h-11" />
              <Skeleton className="w-11 h-11" />
            </div>
          </div>
          <Skeleton className="h-5 w-1/3" />
          <Divider spacing="sm" />
          <Skeleton className="h-5 w-1/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
          <Divider spacing="sm" />
          <Skeleton className="h-5 w-1/4" />
          <div className="flex gap-3">
            <Skeleton className="flex-1 h-11" />
            <Skeleton className="flex-1 h-11" />
            <Skeleton className="flex-1 h-11" />
          </div>
        </div>
      )}

      {/* ── Error state ── */}
      {screenState === 'error' && (
        <div className="flex-1 flex flex-col items-center justify-center gap-6 px-4">
          <p className="text-body text-muted text-center">
            Couldn't load product. Please check your connection and try again.
          </p>
          <button
            type="button"
            onClick={onRetry}
            className="min-h-11 px-8 rounded-lg bg-brand text-button text-surface-card
                       active:bg-brand-pressed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            Thử lại
          </button>
        </div>
      )}

      {/* ── Loaded state ── */}
      {screenState === 'loaded' && (
        <div className="flex-1 overflow-y-auto pb-28">
          {/* Hero */}
          <div className="px-4 pt-4">
            <ProductHero src={product.imageUrl} alt={product.name} />
          </div>

          {/* Name + AttributeIconRow on same row */}
          <div className="px-4 pt-4 flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h2 className="text-h1 text-ink">{product.name}</h2>
              <p className="text-body text-muted mt-1">{product.subtitle}</p>
            </div>
            <AttributeIconRow items={product.attributes} />
          </div>

          {/* Rating */}
          <div className="px-4 mt-3">
            <Rating value={product.rating} count={product.ratingCount} />
          </div>

          <Divider />

          {/* Description */}
          <div className="px-4">
            <SectionHeader title="Description" />
            <ExpandableText>{product.description}</ExpandableText>
          </div>

          <Divider />

          {/* Size selector */}
          <div className="px-4">
            <SectionHeader title="Size" />
            <SegmentedControl
              options={product.sizes.map((s) => ({ value: s.value, label: s.label }))}
              value={selectedSize}
              onChange={setSelectedSize}
              appearance="spaced"
            />
          </div>
        </div>
      )}

      {/* Bottom action bar — only in loaded state */}
      {screenState === 'loaded' && (
        <BottomActionBar
          price={currentPrice}
          priceLabel="Price"
          ctaLabel="Buy Now"
          onCta={() => onBuyNow(product.id, selectedSize)}
        />
      )}
    </div>
  )
}

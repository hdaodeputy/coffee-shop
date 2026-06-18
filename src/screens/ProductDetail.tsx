import { useState } from 'react'
import { Heart, Bike, Bean, Milk } from 'lucide-react'
import { AppHeader } from '../components/layout/AppHeader'
import { BottomActionBar } from '../components/layout/BottomActionBar'
import { ProductHero } from '../components/product/ProductHero'
import { AttributeIconRow } from '../components/product/AttributeIconTile'
import { Divider } from '../components/ui/Divider'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ExpandableText } from '../components/ui/ExpandableText'
import { SegmentedControl } from '../components/ui/SegmentedControl'

const DESCRIPTION =
  'A cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk foam. Variations of the drink involve the use of cream instead of milk, and flavoring with cinnamon or chocolate powder. It is typically smaller in volume than a latte, with a thicker layer of microfoam.'

type Size = 'S' | 'M' | 'L'

const ATTRIBUTE_ITEMS = [
  { icon: <Bike size={20} />, label: 'Delivery available' },
  { icon: <Bean size={20} />, label: 'Quality beans' },
  { icon: <Milk size={20} />, label: 'Fresh milk' },
]

const PRICES: Record<Size, string> = {
  S: '$ 4.00',
  M: '$ 4.53',
  L: '$ 5.00',
}

export function ProductDetail({ onBack }: { onBack: () => void }) {
  const [size, setSize] = useState<Size>('M')
  const [hearted, setHearted] = useState(false)

  return (
    <div className="min-h-screen bg-surface-page">
      <AppHeader
        title="Detail"
        onBack={onBack}
        action={
          <button
            type="button"
            aria-label={hearted ? 'Remove from favourites' : 'Add to favourites'}
            onClick={() => setHearted((h) => !h)}
            className="w-full h-full flex items-center justify-center rounded-md active:bg-line focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <Heart
              className="w-5 h-5"
              fill={hearted ? 'var(--color-brand)' : 'none'}
              stroke={hearted ? 'var(--color-brand)' : 'currentColor'}
            />
          </button>
        }
      />

      <div className="overflow-y-auto pb-28">
        <div className="px-4 pt-4">
          <ProductHero src="/src/assets/hero.png" alt="Cappuccino" />
        </div>

        <div className="px-4 pt-4">
          <h2 className="text-h1 text-ink">Cappuccino</h2>
          <p className="text-body text-muted mt-1">with Chocolate</p>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M8 1l1.854 3.757L14 5.528l-3 2.922.708 4.129L8 10.493l-3.708 2.086.708-4.13L2 5.53l4.146-.771z"
                  fill="var(--color-warning)"
                />
              </svg>
              <span className="text-body font-semibold text-ink">4.8</span>
              <span className="text-caption text-muted">(230)</span>
            </div>

            <AttributeIconRow items={ATTRIBUTE_ITEMS} />
          </div>
        </div>

        <Divider />

        <div className="px-4">
          <SectionHeader title="Description" />
          <ExpandableText>{DESCRIPTION}</ExpandableText>
        </div>

        <Divider />

        <div className="px-4">
          <SectionHeader title="Size" />
          <SegmentedControl
            options={[
              { value: 'S' as Size, label: 'S' },
              { value: 'M' as Size, label: 'M' },
              { value: 'L' as Size, label: 'L' },
            ]}
            value={size}
            onChange={setSize}
            appearance="spaced"
          />
        </div>
      </div>

      <BottomActionBar
        price={PRICES[size]}
        priceLabel="Price"
        ctaLabel="Buy Now"
        onCta={() => {}}
      />
    </div>
  )
}

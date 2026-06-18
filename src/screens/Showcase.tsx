import { useState } from 'react'
import { Bike, Bean, Milk, Coffee } from 'lucide-react'
import { Divider } from '../components/ui/Divider'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ExpandableText } from '../components/ui/ExpandableText'
import { SegmentedControl } from '../components/ui/SegmentedControl'
import { AttributeIconTile, AttributeIconRow } from '../components/product/AttributeIconTile'
import { ProductHero } from '../components/product/ProductHero'

const LONG_TEXT =
  'A cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk foam. Variations of the drink involve the use of cream instead of milk, and flavoring with cinnamon or chocolate powder. It is typically smaller in volume than a latte, with a thicker layer of microfoam. The name comes from the Capuchin friars, referring to the color of their habits.'

const SHORT_TEXT = 'A quick short description that does not need expanding.'

type ShowcaseProps = {
  onProductDetail: (state: 'loaded' | 'loading' | 'error') => void
}

export function Showcase({ onProductDetail }: ShowcaseProps) {
  const [size, setSize] = useState<'S' | 'M' | 'L'>('M')
  const [delivery, setDelivery] = useState<'Deliver' | 'Pick Up'>('Deliver')

  return (
    <div className="min-h-screen bg-surface-page pb-8">
      <div className="max-w-sm mx-auto px-4 py-6">
        <h1 className="text-h1 text-ink mb-1">Component Showcase</h1>
        <p className="text-body text-muted mb-6">All variants &amp; states</p>

        {/* TICKET-007: ProductDetail screen — 3 states */}
        <section className="mb-8">
          <h2 className="text-h2 text-ink mb-4">ProductDetail Screen (TICKET-007)</h2>
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => onProductDetail('loaded')}
              className="w-full min-h-11 rounded-lg bg-brand text-button text-surface-card
                         active:bg-brand-pressed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              View — Loaded state
            </button>
            <button
              type="button"
              onClick={() => onProductDetail('loading')}
              className="w-full min-h-11 rounded-lg border border-brand text-button text-brand
                         active:bg-brand-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              View — Loading (skeleton) state
            </button>
            <button
              type="button"
              onClick={() => onProductDetail('error')}
              className="w-full min-h-11 rounded-lg border border-line text-button text-ink
                         active:bg-line focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              View — Error state
            </button>
          </div>
        </section>

        {/* TICKET-003: Divider */}
        <section className="mb-8">
          <h2 className="text-h2 text-ink mb-4">Divider (TICKET-003)</h2>

          <p className="text-caption text-muted mb-1">spacing=none</p>
          <Divider spacing="none" />
          <p className="text-caption text-muted mb-1 mt-4">spacing=sm</p>
          <Divider spacing="sm" />
          <p className="text-caption text-muted mb-1">spacing=md (default)</p>
          <Divider spacing="md" />
          <p className="text-caption text-muted mb-1">inset=true</p>
          <Divider inset />

          <p className="text-caption text-muted mb-2">Vertical (in flex row)</p>
          <div className="flex h-12 items-center gap-4 bg-surface-card rounded-lg px-4">
            <span className="text-body text-ink">Left</span>
            <Divider orientation="vertical" spacing="none" />
            <span className="text-body text-ink">Right</span>
          </div>
        </section>

        {/* TICKET-004: SectionHeader */}
        <section className="mb-8">
          <h2 className="text-h2 text-ink mb-4">SectionHeader (TICKET-004)</h2>
          <div className="bg-surface-card rounded-lg p-4 space-y-4">
            <SectionHeader title="Description" />
            <Divider spacing="none" />
            <SectionHeader title="Size" action={{ label: 'See all', onClick: () => {} }} />
          </div>
        </section>

        {/* TICKET-001: AttributeIconTile + Row */}
        <section className="mb-8">
          <h2 className="text-h2 text-ink mb-4">AttributeIconTile + Row (TICKET-001)</h2>
          <div className="bg-surface-card rounded-lg p-4 space-y-4">
            <p className="text-caption text-muted">variant=soft (default)</p>
            <div className="flex gap-2">
              <AttributeIconTile icon={<Bike size={20} />} label="Delivery" variant="soft" />
              <AttributeIconTile icon={<Bean size={20} />} label="Bean" variant="soft" />
              <AttributeIconTile icon={<Milk size={20} />} label="Milk" variant="soft" />
              <AttributeIconTile icon={<Bike size={20} />} label="Disabled" variant="soft" disabled />
            </div>

            <p className="text-caption text-muted">variant=card</p>
            <div className="flex gap-2">
              <AttributeIconTile icon={<Bike size={20} />} label="Delivery" variant="card" />
              <AttributeIconTile icon={<Bean size={20} />} label="Bean" variant="card" />
              <AttributeIconTile icon={<Milk size={20} />} label="Milk" variant="card" />
            </div>

            <p className="text-caption text-muted">AttributeIconRow</p>
            <AttributeIconRow
              items={[
                { icon: <Bike size={20} />, label: 'Delivery' },
                { icon: <Bean size={20} />, label: 'Bean' },
                { icon: <Milk size={20} />, label: 'Milk' },
              ]}
            />
          </div>
        </section>

        {/* TICKET-005: ProductHero */}
        <section className="mb-8">
          <h2 className="text-h2 text-ink mb-4">ProductHero (TICKET-005)</h2>

          <p className="text-caption text-muted mb-2">loaded (real image)</p>
          <ProductHero src="/src/assets/hero.png" alt="Cappuccino" />

          <p className="text-caption text-muted mb-2 mt-4">error state (bad URL)</p>
          <ProductHero src="/nonexistent.jpg" alt="Error state" />

          <p className="text-caption text-muted mb-2 mt-4">aspect=1/1, rounded=lg</p>
          <ProductHero src="/src/assets/hero.png" alt="Square crop" aspect="1/1" rounded="lg" />
        </section>

        {/* TICKET-002: ExpandableText */}
        <section className="mb-8">
          <h2 className="text-h2 text-ink mb-4">ExpandableText (TICKET-002)</h2>
          <div className="bg-surface-card rounded-lg p-4 space-y-4">
            <p className="text-caption text-muted">Long text (needs toggle)</p>
            <ExpandableText>{LONG_TEXT}</ExpandableText>

            <Divider spacing="sm" />

            <p className="text-caption text-muted">Short text (no toggle)</p>
            <ExpandableText>{SHORT_TEXT}</ExpandableText>

            <Divider spacing="sm" />

            <p className="text-caption text-muted">defaultExpanded=true</p>
            <ExpandableText defaultExpanded>{LONG_TEXT}</ExpandableText>
          </div>
        </section>

        {/* TICKET-006: SegmentedControl */}
        <section className="mb-8">
          <h2 className="text-h2 text-ink mb-4">SegmentedControl (TICKET-006)</h2>
          <div className="bg-surface-card rounded-lg p-4 space-y-6">
            <div>
              <p className="text-caption text-muted mb-2">appearance=connected (Deliver/Pick Up)</p>
              <SegmentedControl
                options={[
                  { value: 'Deliver' as const, label: 'Deliver' },
                  { value: 'Pick Up' as const, label: 'Pick Up' },
                ]}
                value={delivery}
                onChange={setDelivery}
                appearance="connected"
              />
            </div>

            <div>
              <p className="text-caption text-muted mb-2">appearance=spaced (Size S/M/L)</p>
              <SegmentedControl
                options={[
                  { value: 'S' as const, label: 'S' },
                  { value: 'M' as const, label: 'M' },
                  { value: 'L' as const, label: 'L' },
                ]}
                value={size}
                onChange={setSize}
                appearance="spaced"
              />
            </div>

            <div>
              <p className="text-caption text-muted mb-2">disabled</p>
              <SegmentedControl
                options={[
                  { value: 'S' as const, label: 'S' },
                  { value: 'M' as const, label: 'M' },
                  { value: 'L' as const, label: 'L' },
                ]}
                value={'M' as const}
                onChange={() => {}}
                appearance="spaced"
                disabled
              />
            </div>

            <div>
              <p className="text-caption text-muted mb-2">size=sm, connected</p>
              <SegmentedControl
                options={[
                  { value: 'Deliver' as const, label: 'Deliver' },
                  { value: 'Pick Up' as const, label: 'Pick Up' },
                ]}
                value={delivery}
                onChange={setDelivery}
                appearance="connected"
                size="sm"
              />
            </div>
          </div>
        </section>

        {/* ProductHero error placeholder */}
        <section className="mb-8">
          <h2 className="text-h2 text-ink mb-4">ProductHero error placeholder</h2>
          <div className="bg-brand-soft rounded-xl flex items-center justify-center py-12">
            <Coffee className="w-12 h-12 text-brand opacity-60" />
          </div>
        </section>
      </div>
    </div>
  )
}

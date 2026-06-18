import { useState } from 'react'
import { Showcase } from './screens/Showcase'
import { ProductDetail } from './screens/ProductDetail'
import { mockCappuccino } from './lib/mockProducts'

type Screen = 'showcase' | 'product-detail'

export default function App() {
  const [screen, setScreen] = useState<Screen>('showcase')
  const [productDetailState, setProductDetailState] = useState<'loading' | 'error' | 'loaded'>(
    'loaded',
  )
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <>
      {screen === 'showcase' && (
        <Showcase
          onProductDetail={(state) => {
            setProductDetailState(state)
            setScreen('product-detail')
          }}
        />
      )}
      {screen === 'product-detail' && (
        <ProductDetail
          product={mockCappuccino}
          screenState={productDetailState}
          isFavorite={isFavorite}
          onBack={() => setScreen('showcase')}
          onToggleFavorite={() => setIsFavorite((f) => !f)}
          onBuyNow={() => {}}
          onRetry={() => setProductDetailState('loaded')}
        />
      )}
    </>
  )
}

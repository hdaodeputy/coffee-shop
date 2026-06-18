import { useState } from 'react'
import { Showcase } from './screens/Showcase'
import { ProductDetail } from './screens/ProductDetail'

type Screen = 'showcase' | 'product-detail'

export default function App() {
  const [screen, setScreen] = useState<Screen>('showcase')

  return (
    <>
      {screen === 'showcase' && (
        <Showcase onProductDetail={() => setScreen('product-detail')} />
      )}
      {screen === 'product-detail' && (
        <ProductDetail onBack={() => setScreen('showcase')} />
      )}
    </>
  )
}

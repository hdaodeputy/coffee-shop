import { Bike, Bean, Milk } from 'lucide-react'
import type { ReactNode } from 'react'

export type SizeValue = 'S' | 'M' | 'L'

export type SizeOption = {
  value: SizeValue
  label: string
  price: number
}

export type AttributeItem = {
  icon: ReactNode
  label: string
}

export type ProductDetailData = {
  id: string
  name: string
  subtitle: string
  imageUrl: string
  rating: number
  ratingCount: number
  description: string
  sizes: SizeOption[]
  attributes: AttributeItem[]
}

export const mockCappuccino: ProductDetailData = {
  id: 'cappuccino-1',
  name: 'Cappuccino',
  subtitle: 'with Chocolate',
  imageUrl: '/cappuccino.jpg',
  rating: 4.8,
  ratingCount: 230,
  description:
    'A cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk foam. Variations of the drink involve the use of cream instead of milk, and flavoring with cinnamon or chocolate powder. It is typically smaller in volume than a latte, with a thicker layer of microfoam.',
  sizes: [
    { value: 'S', label: 'S', price: 4.0 },
    { value: 'M', label: 'M', price: 4.53 },
    { value: 'L', label: 'L', price: 5.0 },
  ],
  attributes: [
    { icon: <Bike size={20} />, label: 'Delivery available' },
    { icon: <Bean size={20} />, label: 'Quality beans' },
    { icon: <Milk size={20} />, label: 'Fresh milk' },
  ],
}

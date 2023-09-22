'use client'
import { ProductCard } from "@/components/ProductCard";

type Product = {
  image?: string
  title: string
  category: string
  stars: number
  price: number
}

const coffee: Product = {
  title: 'Classic coffee',
  category: 'Coffee',
  stars: 3,
  price: 60,
  image: 'https://www.ctvnews.ca/polopoly_fs/1.5130437.1601662297!/httpImage/image.jpg_gen/derivatives/landscape_960/image.jpg'
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductCard
        image={coffee.image}
        price={coffee.price}
        stars={coffee.stars}
        category={coffee.category}
        title={coffee.title}
        addToCart={() => alert('Product added!')}
      />
    </main>
  )
}

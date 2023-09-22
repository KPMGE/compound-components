import { FC } from "react"
import { ProductImage } from "./ProductImage"
import { ProductInfo } from "./ProductInfo"
import { ProductButton } from "./ProductButton"

type ProductCardProps = {
  image?: string
  title: string
  category: string
  stars: number
  price: number
  addToCart?: () => void
}

export const ProductCard: FC<ProductCardProps> = ({ image, price, stars, title, category, addToCart }) => {
  return (
    <div className="border-2 border-gray-300 w-80">
      {image && <ProductImage image={image} />}

      <div>
        <ProductInfo
          price={price}
          stars={stars}
          category={category}
          title={title}
        />
      </div>

      {addToCart && (
        <ProductButton onClick={addToCart}>
          Add to Cart
        </ProductButton>
      )}
    </div>
  )
}

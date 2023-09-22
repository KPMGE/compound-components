import { FC } from "react"

type ProductInfoProps = {
  title: string
  category: string
  stars: number
  price: number
}

export const ProductInfo: FC<ProductInfoProps> = ({ category, title, stars, price }) => {
  return (
    <div>
      <p>{category}</p>
      <h2>{title}</h2>
      <p>{stars}</p>
      <p>{price}</p>
    </div>
  )
}

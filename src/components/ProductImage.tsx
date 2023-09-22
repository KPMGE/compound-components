import { FC } from "react"

type ProductImageProps = {
  image: string
}

export const ProductImage: FC<ProductImageProps> = ({ image }) => {
  return (
      <img className="" src={image} alt="some image" />
  )
}

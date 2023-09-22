import { FC, ButtonHTMLAttributes, ReactNode } from "react"

type ProductButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export const ProductButton: FC<ProductButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} >
      {children}
    </button>
  )
}

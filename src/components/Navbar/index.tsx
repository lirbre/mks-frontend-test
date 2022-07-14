import Image from 'next/image'
import { useState } from 'react'
import { CartWrapper, NavContent, NavWrapper } from './styles'

export const Navbar = () => {
  const [shopCart, setShopcart] = useState<number>(0)

  return (
    <NavWrapper>
      <NavContent>
        <li></li>
        <CartWrapper>
          <Image
            width={19}
            height={18}
            alt="A Shopcart Icon"
            src="/img/shopcart.svg"
          />
        </CartWrapper>
      </NavContent>
    </NavWrapper>
  )
}
